// const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const Joi = require("joi");
// const { nanoid } = require("nanoid");

// require("dotenv").config();
// const { SECRET_KEY } = process.env;

// const User = require("../../models/user");

// const { createError, sendMail } = require("../../helpers");
// const { authorize } = require("../../middlewares");

// const router = express.Router();

//? register

//? mail double check

//? signin

//? logout

//? get current user

const express = require("express");

const ctrl = require("../../controllers/users");
const { schemas } = require("../../models/user");
const { ctrlWrapper } = require("../../helpers");
const { validateBody, authorize } = require("../../middlewares");

const router = express.Router();

console.log(ctrlWrapper);
// user register route
router.post(
  "/register",
  validateBody(schemas.register),
  ctrlWrapper(ctrl.register)
);

// user verify by email route
router.get("/verify/:verificationToken", ctrlWrapper(ctrl.emailVerify));

// user resend verification email route
router.post(
  "/verify",
  validateBody(schemas.verification),
  ctrlWrapper(ctrl.reverify)
);

// user login route
router.post("/login", validateBody(schemas.logIn), ctrlWrapper(ctrl.login));

// user logout route
router.get("/logout", authorize, ctrlWrapper(ctrl.logOut));

// route user get session info by token
router.get("/current", authorize, ctrlWrapper(ctrl.current));

router.patch(
  "/balance",
  authorize,
  validateBody(schemas.balance),
  ctrlWrapper(ctrl.balanceUpdate)
);

// const avatarDir = path.join(__dirname, "../../", "public", "avatars");

// router.patch(
//   "/avatar",
//   authorize,
//   upload.single("avatar"),
//   async (req, res, next) => {
//     try {
//       const { _id } = req.user;
//       const { path: tempDir, originalname } = req.file;

//       const [ext] = originalname.split(".").reverse();
//       const avatarName = `${_id}.${ext}`;
//       const avatarPath = path.join(avatarDir, avatarName);

//       await fs.rename(tempDir, avatarPath);
//       const avatarURL = path.join("/avatars", avatarName);
//       await User.findByIdAndUpdate(_id, { avatarURL });

//       res.json({ avatarURL });
//     } catch (error) {
//       await fs.unlink(req.file.path);
//       next(error);
//     }
//   }
// );

module.exports = router;

module.exports = router;
