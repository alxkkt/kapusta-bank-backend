const { User } = require("../../models/user");

const { createError } = require("../../helpers");

const emailVerify = async (req, res, next) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });
  if (!user) {
    throw createError(404, "User not found");
  }
  await User.findByIdAndUpdate(user._id, {
    verificationToken: "",
    verify: true,
  });

  res.json({ message: "User verified" });
};

module.exports = emailVerify;
