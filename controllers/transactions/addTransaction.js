const Transaction = require("../../models/transaction");
const User = require("../../models/user");
const { createError } = require("../../helpers");

const addTransaction = async (req, res, next) => {
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
    const resultBalance = await User.fi(_id, req.body, {
      new: updateBalance,
    });
    res.status(201).json({ result });
  } catch (error) {
    next(error);
  }
};
