const { User } = require("../../models/user");

const { createError } = require("../../helpers");

const balanceUpdate = async (req, res, next) => {
  const { _id } = req.user;
  const result = await User.findByIdAndUpdate(_id, req.body, {
    new: true,
  });
  if (!result) {
    next(createError("User not found", 404));
  }
  res.json({ massage: "balance is updated", balanceNow: result.totalBalance });
};

module.exports = balanceUpdate;
