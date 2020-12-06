const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(teamMembersArray) {
  let teamName = '';
  let teamCheck = '';
  if(!Array.isArray(teamMembersArray)){
    return false;
  }
  teamCheck = teamMembersArray.filter(name => typeof(name) == "string" );
  for(let i=0; i<teamCheck.length; i++){
    teamName += teamCheck[i].replace(/\s/g, '').charAt(0).toUpperCase();
  }
  return teamName.split('').sort().join('');
};
