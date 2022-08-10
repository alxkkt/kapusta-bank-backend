const { User } = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { createError } = require("../../helpers");

const { SECRET_KEY } = process.env;

const login = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw createError(401, "invalid password or email");
  }

  const passwordValid = await bcrypt.compare(password, user.password);

  if (!passwordValid) {
    throw createError(401, "invalid password or email");
  }

  if (!user.verify) {
    throw createError(401, "Email not verified");
  }

  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "72h" });

  await User.findByIdAndUpdate(user._id, { token });

  res.status(201).json({
    token,
    email,
    totalBalance: user.totalBalance,
  });
};

module.exports = login;
