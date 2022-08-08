const { User } = require("../../models/user");

const logOut = async (req, res, next) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: "" });
  res.json({ message: "logged out" });
};

module.exports = logOut;
