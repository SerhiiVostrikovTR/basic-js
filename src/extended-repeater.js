const CustomError = require("../extensions/custom-error");

module.exports = function repeater(repeatString, repeatOptions) {
  let separator = repeatOptions['separator'] || '+';
  let additionSeparator = repeatOptions['additionSeparator'] || '|';
  let addition = repeatOptions['addition'];
  let additionString;
  try {
    repeatString = repeatString.toString();
    addition = addition.toString();
  }
  catch (error) {}
  if (typeof(addition) !== "undefined")
  {
    additionString = (addition+additionSeparator).repeat(repeatOptions['additionRepeatTimes']-1).concat(addition);
    repeatString = repeatString+additionString;
  }
  return (repeatString + separator).repeat(repeatOptions['repeatTimes'] - 1) + repeatString;
}

  