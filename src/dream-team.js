const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(teamMembersArray) {
  if(!Array.isArray(teamMembersArray)){
    return false;
  }
  return teamMembersArray.reduce((acc, name) =>
      typeof name == 'string' ? [...acc, name.trim().charAt(0).toUpperCase()] : acc, [])
      .sort()
      .join('');
};
