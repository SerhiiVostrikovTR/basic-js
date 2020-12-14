const CustomError = require("../extensions/custom-error");

module.exports = function transform(arrayToBeTransformed) {
  if(arrayToBeTransformed.isArray){
    throw CustomError('It is not array!');
  }
  let skipElement = false;
  const actions = {
    '--discard-prev': (currentArray, indexInitialArray, initialArray) => {
      if (currentArray.length > 0 && initialArray[indexInitialArray - 2] !== '--discard-next'){
        currentArray.pop();
      }
      return currentArray;
    },
    '--discard-next': (currentArray, indexInitialArray, initialArray) => {
      if (indexInitialArray < initialArray.length){
        skipElement = true;
      }
      return currentArray;
    },
    '--double-next': (currentArray, indexInitialArray, initialArray) => {
      if (indexInitialArray + 1 > initialArray.length - 1){
        return currentArray;
      }
      return [...currentArray, initialArray[indexInitialArray + 1]];
    },
    '--double-prev': (currentArray, indexInitialArray, initialArray) => {
      if (indexInitialArray===0 || initialArray[indexInitialArray - 2] === "--discard-next"){
        return currentArray;
      }
      return [...currentArray, initialArray[indexInitialArray - 1]];
    }
  };

  return arrayToBeTransformed.reduce((acc, item, index, arr) => {
    if (skipElement) {
      skipElement = false;
      return acc;
    }
    if (Object.keys(actions).includes(item)){
      return actions[item](acc, index, arr);
    }
    return [...acc, item];
  }, []);
};
