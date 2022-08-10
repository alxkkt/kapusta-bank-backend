const { User } = require("../../models/user");

const { createError } = require("../../helpers");

const balanceUpdate = async (req, res, next) => {
  const { _id } = req.user;
  const result = await User.findByIdAndUpdate(_id, req.body, {
    new: true,
  });
  if (!result) {
    next(createError(404, "User not found"));
  }
  res.json({ massage: "balance is updated", balanceNow: result.totalBalance });
};

module.exports = balanceUpdate;
