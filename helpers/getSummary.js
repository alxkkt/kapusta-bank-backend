const ObjectID = require("bson-objectid");

const getSummary = (type, array) => {
  const typedResult = array.filter((item) => item.type === type);

  const getByMonth = (arr, month) => {
    return arr.filter((item) => item.date.getUTCMonth() === month);
  };

  const countMonthSum = (arr) => {
    return arr.reduce((acc, item) => {
      acc += item.sum;
      return acc;
    }, 0);
  };

  const calcSum = (arr) => {
    let sum = 0;
    const finalArr = [];

    const now = new Date();

    for (let i = 0; i <= now.getUTCMonth(); i++) {
      const monthlyTrans = getByMonth(arr, i);
      sum = countMonthSum(monthlyTrans);

      finalArr.push({ id: ObjectID(), month: i, totalSum: sum });
    }

    return finalArr;
  };

  return calcSum(typedResult);
};

module.exports = getSummary;
