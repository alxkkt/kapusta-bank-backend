const { User } = require("../../models/user");
const bcrypt = require("bcryptjs");

const { nanoid } = require("nanoid");

const { createError, sendMail, emailMarkup } = require("../../helpers");

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

  const html = emailMarkup({ email, verificationToken });
  const mail = {
    to: email,
    subject: "Verify your account",

    html,
  };
  await sendMail(mail);
  res.status(201).json(result.email);
};

module.exports = register;
