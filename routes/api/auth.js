const express = require("express");

const ctrl = require("../../controllers/users");
const { schemas } = require("../../models/user");
const { ctrlWrapper } = require("../../helpers");
const { validateBody, authorize } = require("../../middlewares");

const router = express.Router();

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

module.exports = router;
