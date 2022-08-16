const register = require("./register");
const emailVerify = require("./emailVerify");
const reverify = require("./reverify");
const login = require("./login");
const logOut = require("./logOut");
const current = require("./current");
const googleAuth = require("./googleAuth");

module.exports = {
  register,
  emailVerify,
  reverify,
  login,
  logOut,
  current,
  googleAuth,
};
