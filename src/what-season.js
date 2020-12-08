const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(userDate) {
  if (typeof(userDate) === 'undefined' || userDate === null)
  {
    return 'Unable to determine the time of year!';
  }
  if (this.toString.call(userDate) === '[object Date]')
  {
    if (isNaN(userDate.getTime()))
    {
      throw CustomError(userDate + 'is not date format');
    }
  }
  else
    {
      throw CustomError('Unable to determine the time of year!');
  }

  let month = userDate.getMonth();
  let winter = 'winter';
  let spring = 'spring';
  let summer = 'summer';
  let fall = 'fall';
  let seasons = {
    '12':winter,
    '1': winter,
    '2': winter,
    '3': spring,
    '4': spring,
    '5': spring,
    '6': summer,
    '7': summer,
    '8': summer,
    '9': fall,
    '10': fall,
    '11': fall
  };
  return seasons[(month+1).toString()];
};

