const express = require("express");
const Joi = require("joi");

const router = express.Router();

const Transaction = require("../../models/transaction");

const { createError } = require("../../helpers");
const { authorize } = require("../../middlewares");

const transactionSchema = Joi.object({
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
    const { _id: owner } = req.user;
    const { error } = transactionSchema.validate(req.body);

    if (error) {
      throw createError(400, error.message);
    }

    const result = await Transaction.create({ ...req.body, owner });
    res.status(201).json(result);
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

module.exports = router;
