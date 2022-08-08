const { User } = require("../../models/user");

const { createError } = require("../../helpers");

const emailVerify = async (req, res, next) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });
  if (!user) {
    next(createError("User not found", 404));
  }
  await User.findByIdAndUpdate(user._id, {
    verificationToken: "",
    verify: true,
  });

  res, status(200).json({ message: "User verified" });
};

module.exports = emailVerify;
