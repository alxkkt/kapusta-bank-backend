const express = require("express");

const { authorize } = require("../../middlewares");
const { ctrlWrapper } = require("../../helpers");
const ctrl = require("../../controllers/balance");

const router = express.Router();

// get current user balance
router.get("/current", authorize, ctrlWrapper(ctrl.getBalance));

// update user balance
router.patch("/update", authorize, ctrlWrapper(ctrl.updateBalance));

module.exports = router;
