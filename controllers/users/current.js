const { User } = require("../../models/user");

const current = async (req, res, next) => {
  const { email } = req.user;
  res.json({ email });
};

module.exports = current;
