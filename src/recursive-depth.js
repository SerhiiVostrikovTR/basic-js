const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arrayToBeTransformed)
  {
    let maxdepth = 0;
    if ( typeof arrayToBeTransformed == 'object' ) {
      for (let i = 0; i < arrayToBeTransformed.length; i++) {
        let dpth = this.calculateDepth(arrayToBeTransformed[i]);
        if (dpth > maxdepth)
          maxdepth = dpth;
      }
      return maxdepth + 1;
    }
  }

};