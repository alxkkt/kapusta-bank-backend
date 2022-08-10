const { User } = require("../../models/user");

const { createError, sendMail } = require("../../helpers");

const reverify = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw createError(404, "User not found");
  }
  if (user.verify) {
    throw createError(409, "User already verified");
  }
  const verificationToken = user.verificationToken;
  const mail = {
    to: email,
    subject: "Verify your account",
    html: `<a target='_blank' href='https://kapusta-backend-proj.herokuapp.com/api/auth/${verificationToken}'>Click here to verify your account</a>`,
  };
  await sendMail(mail);

  res.status(200).json({ message: "Verification email sent" });
};

module.exports = reverify;
