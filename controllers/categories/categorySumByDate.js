const { createError } = require("../../helpers");
const Category = require("../../models/category");
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
    const categories = await Category.find({ _id });

    if (!categories) throw createError(404, "Categories are not found");

    const transactions = await Transaction.find({});
    const transactionsByMonthAndYear = transactions.filter(({ date }) => {
      return (
        date.getFullYear().toString() === year &&
        date.getMonth().toString() === `${month - 1}`
      );
    });

    const categoriesSum = categories.map(({ name }) => {
      const transaictionByCategory = transactionsByMonthAndYear.filter(
        ({ category }) => category === name
      );
      const sum = transaictionByCategory.length
        ? transaictionByCategory.reduce(
            (prevValue, { sum }) => prevValue + sum,
            0
          )
        : 0;
      return {
        name,
        sum,
      };
    });
    res.json(categoriesSum);
  } catch (error) {
    next(error);
  }
};

module.exports =categorySumByDate;
