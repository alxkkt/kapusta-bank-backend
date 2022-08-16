const { User } = require("../../models/user");

const { createError, verifyMarkup } = require("../../helpers");

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

  const html = verifyMarkup(user.email);

  res.send(html);
};

module.exports = emailVerify;
