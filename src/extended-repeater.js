const CustomError = require("../extensions/custom-error");

module.exports = function repeater(repeatString, repeatOptions) {
  const basicRepeater = (str, repeatNumber, strSeparator='+') => {return (str+strSeparator).repeat(repeatNumber-1).concat(str)}
  const additionRepeaterStr =  basicRepeater(
      repeatOptions.addition,
      repeatOptions.additionRepeatTimes,
      repeatOptions.additionSeparator ? repeatOptions.additionSeparator : '|');
  return basicRepeater(
      repeatString+(additionRepeaterStr==='undefined' ? '':additionRepeaterStr),
      repeatOptions['repeatTimes'],
      repeatOptions['separator']);
};

  