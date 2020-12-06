const CustomError = require("../extensions/custom-error");

module.exports = function repeater(rep_str, rep_options) {
  let separator;
  let additionSeparator;
  let addition;
  if (rep_options['separator'])
  {
    separator = rep_options['separator'];
  }
  else
  {
    separator = '+';
  }
  if (rep_options['additionSeparator']){
    additionSeparator = rep_options['additionSeparator'];
  }
  else {
    additionSeparator = '|';
  }
  if (rep_str !== null){
    rep_str = rep_str.toString();}
  if(typeof(rep_options['addition']) !== 'string' && rep_options['addition'] !== undefined && rep_options['addition']!==null)
  {
    addition = rep_options['addition'].toString();}
  else {
    addition = rep_options['addition']
  }
  if (typeof(addition) !== "undefined" ){
    let addition_str = (addition+additionSeparator).repeat(rep_options['additionRepeatTimes']-1).concat(addition);
    rep_str = rep_str+addition_str;
  }

  return (rep_str + separator).repeat(rep_options['repeatTimes'] - 1) + rep_str
}

  