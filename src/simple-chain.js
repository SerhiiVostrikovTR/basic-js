const CustomError = require("../extensions/custom-error");

let intermediate_chain = [];

const chainMaker = {
  getLength() {
    return intermediate_chain.length;
  },
  addLink(value='') {
    intermediate_chain.push("( " + value +" )");
    return chainMaker;
  },
  removeLink(position) {
    if(isNaN(position) || position<0 || position>chainMaker.getLength()-1) {
      intermediate_chain = []; // clear the chain if position incorrect
      throw CustomError('Incorrect position!')}
    intermediate_chain.splice(position-1, 1);
    return chainMaker;
  },
  reverseChain() {
    intermediate_chain.reverse();
    return chainMaker;
  },
  finishChain() {
    let finalize_chain_value = intermediate_chain.join("~~");
    intermediate_chain = []; // clear the chain after finishing the chain
    return finalize_chain_value;
  }

};

module.exports = chainMaker;
