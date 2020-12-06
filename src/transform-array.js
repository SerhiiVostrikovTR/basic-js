const CustomError = require("../extensions/custom-error");

module.exports = function transform(arrayToBeTransformed) {
  if(!Array.isArray(arrayToBeTransformed)){
    throw new CustomError('It is not array!');
  }
  let result_array = arrayToBeTransformed;

  for (let i=0; i<arrayToBeTransformed.length; i++){
    if(typeof(arrayToBeTransformed[i]) == 'string'){
      switch(arrayToBeTransformed[i]){
        case '--discard-prev':
          result_array.splice(i,1);
          if(i!==0){
            result_array.splice(i-1,1);}
          break;
        case '--discard-next':
          if(i!==arrayToBeTransformed.length-1){
            result_array.splice(i+1,1);
          }
          result_array.splice(i,1);
          break;
        case '--double-next':
          if(i!==arrayToBeTransformed.length-1){
            result_array.splice(i, 1, arrayToBeTransformed[i+1]);
          }
          else {
            result_array.splice(i,1);
          }
          break;
        case '--double-prev':
          if(i!==0){
            result_array.splice(i, 1, arrayToBeTransformed[i-1]);
          }
          else {
            result_array.splice(i,1);
          }
          break;

      }
    }
  }
  return result_array
};
