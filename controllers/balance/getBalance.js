const { User } = require("../../models/user");

const { createError } = require("../../helpers");

const getBalance = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const result = await User.findById(_id);
    if (!result) {
      createError(404, "User not found");
    }
    res.json({
      totalBalance: result.totalBalance,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getBalance;
