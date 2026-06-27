const { getPublicConfig } = require('../script/api');

module.exports = async (_req, res) => {
  res.status(200).json(getPublicConfig());
};
