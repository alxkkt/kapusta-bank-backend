const { User } = require("../../models/user");

const { createError } = require("../../helpers");

const updateBalance = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const result = await User.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    if (!result) {
      createError(404, "User not found");
    }
    res.status(201).json({
      message: `Balance updated, new balance is: ${result.totalBalance}`,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateBalance;
