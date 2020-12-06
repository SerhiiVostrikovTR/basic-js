const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arrayTest) {
  let counter = 0;
  for(let i=0; i<arrayTest.length; i++){

    counter += arrayTest[i].filter(cats => cats === '^^').length;
  }
  return counter
};