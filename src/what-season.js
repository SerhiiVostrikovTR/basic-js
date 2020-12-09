const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(userDate) {

  const winter = 'winter';
  const spring = 'spring';
  const summer = 'summer';
  const fall = 'fall';

  if (typeof userDate === 'undefined' || userDate === null)
  {
    return 'Unable to determine the time of year!';
  }

  if (this.toString.call(userDate) !== '[object Date]' || isNaN(userDate.getTime()))
  {
    throw CustomError('Error');
  }

  switch (userDate.getMonth()+1){
    case 12: case 1: case 2: return winter;
    case 3: case 4: case 5: return spring;
    case 6: case 7: case 8: return summer;
    case 10: case 11: case 9: return fall;
  }
}

