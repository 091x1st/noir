const path = require('path');
const express = require('express');
const { getServerStatus, getRanking, getDbConfig, getPublicConfig } = require('./api');

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.static(path.join(__dirname, '..')));

app.get('/api/config', (_req, res) => {
  res.json(getPublicConfig());
});

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

    const data = await getRanking();
    res.json(data);
  } catch (error) {
    console.error('Erro em /api/ranking:', error.message);
    res.status(500).json({ error: 'Falha ao carregar ranking', ffa: [], action: [], queue: [] });
  }
});

app.listen(PORT, () => {
  console.log(`Noir web rodando em http://localhost:${PORT}`);
});
