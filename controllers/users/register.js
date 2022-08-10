const { User } = require("../../models/user");
const bcrypt = require("bcryptjs");

const { nanoid } = require("nanoid");

const { createError, sendMail } = require("../../helpers");

const register = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw createError(409, "email in use");
  }
  const hash = await bcrypt.hash(password, 10);

  const verificationToken = nanoid();

  const result = await User.create({
    email,
    password: hash,
    verificationToken,
  });

  const mail = {
    to: email,
    subject: "Verify your account",
    html: `<a target='_blank' href='https://kapusta-backend-proj.herokuapp.com/api/auth/verify/${verificationToken}'>Click here to verify your account</a>`,
  };
  await sendMail(mail);
  res.status(201).json(result.mail);
};

module.exports = register;
