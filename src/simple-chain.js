const CustomError = require("../extensions/custom-error");

let intermediateChain = [];

const chainMaker = {
  getLength() {
    return intermediateChain.length;
  },
  addLink(value='') {
    intermediateChain.push("( " + value +" )");
    return chainMaker;
  },
  removeLink(position) {
    if(isNaN(position) || position<0 || position>chainMaker.getLength()-1)
    {
      intermediateChain = []; // clear the chain if position incorrect
      throw CustomError('Incorrect position!');
    }
    intermediateChain.splice(position-1, 1);
    return chainMaker;
  },
  reverseChain() {
    intermediateChain.reverse();
    return chainMaker;
  },
  finishChain() {
    let finishChainValue = intermediateChain.join('~~');
    intermediateChain = []; // clear the chain after finishing the chain
    return finishChainValue;
  }

};

module.exports = chainMaker;
