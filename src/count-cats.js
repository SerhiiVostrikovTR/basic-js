const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arrayTest) {
  return arrayTest.reduce((acc, item) => {
    return acc + item.filter(cats => cats === '^^').length;
  },0)
};