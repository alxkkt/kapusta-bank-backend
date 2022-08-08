const { User } = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

const login = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  const passwordValid = await bcrypt.compare(password, user.password);

  if (!passwordValid || !user) {
    next(createError("invalid email or password ", 401));
  }
  if (!user.verify) {
    next(createError("Email not verified", 401));
  }

  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });

  await User.findByIdAndUpdate(user._id, { token });

  res.status(200).json(token);
};

module.exports = login;
