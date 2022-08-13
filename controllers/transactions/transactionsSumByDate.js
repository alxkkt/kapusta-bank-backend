const { createError } = require("../../helpers");
const Transaction = require("../../models/transaction");
const { User } = require("../../models/user");

const categorySumByDate = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const { month, year } = req.params;
    const result = await User.findById(_id);

    if (!result) {
      throw createError(404, "User not found");
    }

    const transactions = await Transaction.find({ owner: _id });

    const transactionsByMonthAndYear = transactions.filter(({ date }) => {
      return (
        date.getFullYear().toString() === year &&
        date.getMonth().toString() === `${month}`
      );
    });
    const incomeTransactions = transactionsByMonthAndYear.filter(
      ({ type }) => type === "income"
    );
    const expenseTransactions = transactionsByMonthAndYear.filter(
      ({ type }) => type === "expense"
    );
    const totalExpense = expenseTransactions.reduce(
      (prevValue, { sum }) => prevValue + sum,
      0
    );
    const totalIncome = incomeTransactions.reduce(
      (prevValue, { sum }) => prevValue + sum,
      0
    );
    const transactionObj = {
      incomeTransactions,
      expenseTransactions,
      totalExpense,
      totalIncome,
    };
    res.json(transactionObj);
  } catch (error) {
    next(error);
  }
};

module.exports = categorySumByDate;
