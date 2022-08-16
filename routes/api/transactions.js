const express = require("express");
const Joi = require("joi");
const transactionsSumByDate = require("../../controllers/transactions/transactionsSumByDate");
const router = express.Router();

const Transaction = require("../../models/transaction");
const { User } = require("../../models/user");

const { createError } = require("../../helpers");
const { authorize } = require("../../middlewares");

const transactionSchema = Joi.object({
  description: Joi.string().required(),
  category: Joi.string().required(),
  sum: Joi.number().required(),
  type: Joi.string().required(),
  date: Joi.date().required(),
});

// get all transactions
router.get("/", authorize, async (req, res, next) => {
  try {
    const { _id: owner } = req.user;
    const result = await Transaction.find(
      { owner },
      "-createdAt -updatedAt"
    ).populate("owner", "_id, email");
    res.json(result);
  } catch (error) {
    next(error);
  }
});

// get transaction by id

// create new transaction
router.post("/", authorize, async (req, res, next) => {
  try {
    const { _id, totalBalance } = req.user;
    const { type, sum } = req.body;
    const { error } = transactionSchema.validate(req.body);
    if (error) {
      throw createError(400, error.message);
    }

    const result = await Transaction.create({ ...req.body, owner: _id });

    let updateBalance = +totalBalance;
    type === "income" ? (updateBalance += +sum) : (updateBalance -= +sum);

    const updatedUser = await User.findByIdAndUpdate(
      { _id },
      { totalBalance: updateBalance }
    );

    res.status(201).json({ result, totalBalance: updatedUser.totalBalance });
  } catch (error) {
    next(error);
  }
});

// delete transaction by id
router.delete("/:transactionId", async (req, res, next) => {
  try {
    const { transactionId } = req.params;
    const result = await Transaction.findByIdAndRemove(transactionId);
    if (!result) {
      throw createError(404, "Not Found");
    }

    res.json({ message: "Transaction Deleted" });
  } catch (error) {
    next(error);
  }
});
router.get("/total/:month/:year", authorize, transactionsSumByDate);

module.exports = router;
