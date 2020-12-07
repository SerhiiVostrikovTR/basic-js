const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  console.log(sampleActivity);
  if (typeof(sampleActivity) !== 'string' || isNaN(Number(sampleActivity)) || Number(sampleActivity)<1 || Number(sampleActivity)>15){return false;}


  return Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)*HALF_LIFE_PERIOD/Math.log(2));
};
