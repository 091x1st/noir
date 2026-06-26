const { getServerStatus } = require('../script/api');

module.exports = async (_req, res) => {
  try {
    const status = await getServerStatus();
    res.status(200).json(status);
  } catch (error) {
    console.error('Erro em /api/status:', error.message);
    res.status(500).json({ online: false, players: 0, maxPlayers: 0 });
  }
};
