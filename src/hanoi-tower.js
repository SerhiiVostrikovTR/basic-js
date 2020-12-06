const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = Math.pow(2, disksNumber) - 1;
  let seconds = 3600/turnsSpeed*turns;
  return {'turns': turns, 'seconds': Math.floor(seconds)}
};


