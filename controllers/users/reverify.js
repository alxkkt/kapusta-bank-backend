const { User } = require("../../models/user");

const reverify = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    next(createError("User not found", 404));
  }
  if (user.verify) {
    next(createError("User already verified", 400));
  }
  const verificationToken = user.verificationToken;
  const mail = {
    to: email,
    subject: "Verify your account",
    html: `<a target='_blank' href='https://mondodb-project.herokuapp.com/${verificationToken}'>Click here to verify your account</a>`,
  };
  await sendMail(mail);

  res.status(200).json({ message: "Verification email sent" });
};

module.exports = reverify;
