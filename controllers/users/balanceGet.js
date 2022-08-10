const { User } = require("../../models/user");

const { createError } = require("../../helpers");

const balanceGet = async (req, res, next) => {
  const { _id, totalBalance } = req.user;
  const result = await User.findById(_id, req.body);
  if (!result) {
    next(createError("User not found", 404));
  }
  res.json({
    message: `balance is ${totalBalance}`,
    balanceNow: totalBalance,
  });
};

module.exports = balanceGet;
