const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const express = require('express');
const axios = require('axios');
const mysql = require('mysql2/promise');

const app = express();
const PORT = Number(process.env.PORT) || 3000;

const FIVEM_SERVER_IP = process.env.FIVEM_SERVER_IP || '178.132.198.165:30120';
const FIVEM_DISPLAY_IP = process.env.FIVEM_DISPLAY_IP || 'connect noir.rpfivem.online';
const FIVEM_JOIN_CODE = process.env.FIVEM_JOIN_CODE || '98yjgee';
const FIVEM_JOIN_URL = process.env.FIVEM_JOIN_URL || `https://cfx.re/join/${FIVEM_JOIN_CODE}`;

const RANKING_MODES = {
  ffa: {
    sortColumn: 'ffa_kills',
    kills: 'ffa_kills',
    deaths: 'ffa_deaths',
    playtime: 'ffa_playtime',
  },
  action: {
    sortColumn: 'action_kills',
    kills: 'action_kills',
    deaths: 'action_deaths',
    playtime: 'action_playtime',
  },
  queue: {
    sortColumn: 'queue_wins',
    sortSecondary: 'queue_kills',
    wins: 'queue_wins',
    kills: 'queue_kills',
    deaths: 'queue_deaths',
    playtime: 'queue_playtime',
  },
};

function formatPlaytime(value) {
  const totalSeconds = Math.max(0, Number(value) || 0);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (hours > 0) return `${hours}h ${minutes}m`;
  if (minutes > 0) return `${minutes}m ${seconds}s`;
  return `${seconds}s`;
}

function buildDisplayName(firstname, name) {
  const full = [firstname, name].filter(Boolean).join(' ').trim();
  return full || 'Desconhecido';
}

async function getServerStatus() {
  const requestConfig = {
    timeout: 5000,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    },
  };

  const base = `http://${FIVEM_SERVER_IP}`;

  const [playersRes, dynamicRes, infoRes, cfxRes] = await Promise.allSettled([
    axios.get(`${base}/players.json`, requestConfig),
    axios.get(`${base}/dynamic.json`, requestConfig),
    axios.get(`${base}/info.json`, requestConfig),
    axios.get(`https://servers-frontend.fivem.net/api/servers/single/${FIVEM_JOIN_CODE}`, requestConfig),
  ]);

  const hasDirectSuccess = [playersRes, dynamicRes, infoRes].some(
    (result) => result.status === 'fulfilled' && result.value?.status === 200
  );

  const cfxData =
    cfxRes.status === 'fulfilled' && cfxRes.value?.status === 200
      ? cfxRes.value.data?.Data
      : null;

  if (!hasDirectSuccess && !cfxData) {
    return {
      online: false,
      players: 0,
      maxPlayers: 0,
      displayIp: FIVEM_DISPLAY_IP,
      joinCode: FIVEM_JOIN_CODE,
      joinUrl: FIVEM_JOIN_URL,
    };
  }

  const playersFromList =
    playersRes.status === 'fulfilled' && Array.isArray(playersRes.value?.data)
      ? playersRes.value.data.length
      : null;

  const dynamicData = dynamicRes.status === 'fulfilled' ? dynamicRes.value?.data : null;
  const infoData = infoRes.status === 'fulfilled' ? infoRes.value?.data : null;

  const players =
    Number(playersFromList) ||
    Number(dynamicData?.clients) ||
    Number(infoData?.clients) ||
    Number(cfxData?.clients) ||
    0;

  const maxPlayers =
    Number(dynamicData?.sv_maxclients) ||
    Number(infoData?.sv_maxclients) ||
    Number(infoData?.vars?.sv_maxclients) ||
    Number(infoData?.vars?.sv_maxClients) ||
    Number(cfxData?.svMaxclients) ||
    Number(cfxData?.sv_maxclients) ||
    Number(cfxData?.vars?.sv_maxClients) ||
    32;

  return {
    online: true,
    players,
    maxPlayers,
    displayIp: FIVEM_DISPLAY_IP,
    joinCode: FIVEM_JOIN_CODE,
    joinUrl: FIVEM_JOIN_URL,
  };
}

function getDbConfig() {
  const required = ['DB_HOST', 'DB_USER', 'DB_PASSWORD', 'DB_NAME'];
  const missing = required.filter((key) => !process.env[key]?.trim());
  if (missing.length) return null;

  return {
    host: process.env.DB_HOST.trim(),
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER.trim(),
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME.trim(),
  };
}

async function fetchTopRanking(mode) {
  const cfg = RANKING_MODES[mode];
  if (!cfg) return [];

  const dbConfig = getDbConfig();
  if (!dbConfig) return [];

  let connection;
  try {
    connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute(
      `SELECT rs.user_id,
              rs.ffa_kills, rs.ffa_deaths, rs.ffa_playtime,
              rs.action_kills, rs.action_deaths, rs.action_playtime,
              rs.queue_wins, rs.queue_kills, rs.queue_deaths, rs.queue_playtime,
              i.firstname, i.name
       FROM ranking_stats rs
       LEFT JOIN vrp_user_identities i ON i.user_id = rs.user_id
       ORDER BY rs.${cfg.sortColumn} DESC${
         cfg.sortSecondary ? `, rs.${cfg.sortSecondary} DESC` : ''
       }, rs.user_id ASC
       LIMIT 10`
    );

    return rows.map((row, index) => ({
      rank: index + 1,
      userId: row.user_id,
      name: buildDisplayName(row.firstname, row.name),
      wins: cfg.wins ? Number(row[cfg.wins] ?? 0) : undefined,
      kills: Number(row[cfg.kills] ?? 0),
      deaths: Number(row[cfg.deaths] ?? 0),
      playtime: formatPlaytime(row[cfg.playtime]),
    }));
  } catch (error) {
    console.error(`Erro ao buscar ranking (${mode}):`, error.message);
    return [];
  } finally {
    if (connection) await connection.end().catch(() => {});
  }
}

app.use(express.static(path.join(__dirname, '..')));

app.get('/api/status', async (_req, res) => {
  try {
    const status = await getServerStatus();
    res.json(status);
  } catch (error) {
    console.error('Erro em /api/status:', error.message);
    res.status(500).json({ online: false, players: 0, maxPlayers: 0 });
  }
});

app.get('/api/ranking', async (_req, res) => {
  try {
    if (!getDbConfig()) {
      return res.status(503).json({
        error: 'Banco não configurado',
        ffa: [],
        action: [],
        queue: [],
      });
    }

    const [ffa, action, queue] = await Promise.all([
      fetchTopRanking('ffa'),
      fetchTopRanking('action'),
      fetchTopRanking('queue'),
    ]);

    res.json({
      updatedAt: new Date().toISOString(),
      ffa,
      action,
      queue,
    });
  } catch (error) {
    console.error('Erro em /api/ranking:', error.message);
    res.status(500).json({ error: 'Falha ao carregar ranking', ffa: [], action: [], queue: [] });
  }
});

app.listen(PORT, () => {
  console.log(`Noir web rodando em http://localhost:${PORT}`);
});
