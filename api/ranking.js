const { getRanking, getDbConfig } = require('../script/api');

module.exports = async (_req, res) => {
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
    res.status(200).json(data);
  } catch (error) {
    console.error('Erro em /api/ranking:', error.message);
    res.status(500).json({ error: 'Falha ao carregar ranking', ffa: [], action: [], queue: [] });
  }
};
