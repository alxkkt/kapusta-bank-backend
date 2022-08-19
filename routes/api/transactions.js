const express = require("express");
const Joi = require("joi");
const transactionsSumByDate = require("../../controllers/transactions/transactionsSumByDate");
const router = express.Router();

const Transaction = require("../../models/transaction");
const { User } = require("../../models/user");

const { createError, getSummary } = require("../../helpers");
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

    const newBalance =
      type === "income" ? totalBalance + sum : totalBalance - sum;

    await User.findByIdAndUpdate(_id, { totalBalance: newBalance });

    res.status(201).json({
      result,
      totalBalance: newBalance,
    });
  } catch (error) {
    next(error);
  }
});

// delete transaction by id
router.delete("/:transactionId", authorize, async (req, res, next) => {
  try {
    const { transactionId } = req.params;
    const { _id, totalBalance } = req.user;

    const { type, sum } = await Transaction.findByIdAndRemove(transactionId);
    if (!sum) {
      throw createError(404, "Not Found");
    }

    const newBalance =
      type === "income" ? totalBalance - sum : totalBalance + sum;

    await User.findByIdAndUpdate({ _id }, { totalBalance: newBalance });

    res.json({
      message: "Transaction Deleted",
      newBalance,
    });
  } catch (error) {
    next(error);
  }
});

// by month / year
router.get("/total/:month/:year", authorize, transactionsSumByDate);

// get summary
router.get("/summary/:type", authorize, async (req, res, next) => {
  try {
    const { _id: owner } = req.user;
    const { type } = req.params;

    const result = await Transaction.find({ owner }, "-createdAt -updatedAt");

    const summary = getSummary(type, result);

    res.json(summary);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
