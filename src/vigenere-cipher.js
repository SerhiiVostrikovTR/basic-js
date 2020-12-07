const CustomError = require("../extensions/custom-error");
let EN_ALPHAVITE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

class VigenereCipheringMachine {

  constructor(directMachine=true) {
    this.directMachine = directMachine;
  }

  encrypt(string_to_encrypt, secret_word) {
    let encrypted_string = []
    for(let i=0; i<string_to_encrypt.length; i++){
      encrypted_string.push(EN_ALPHAVITE.indexOf(string_to_encrypt.charAt(i)) + EN_ALPHAVITE.indexOf(secret_word.charAt(i))%26)
    }
  }
  decrypt(string_to_decrypt, secret_word) {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = VigenereCipheringMachine;



//
// const CustomError = require("../extensions/custom-error");

// let EN_ALPHAVITE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
//
// class VigenereCipheringMachine {
//
//   constructor(directMachine=true) {
//     this.directMachine = directMachine;
//   }
//
//   encrypt(string_to_encrypt, secret_word) {
//     let encrypted_string = []
//     for(let i=0; i<string_to_encrypt.length; i++){
//       encrypted_string.push(EN_ALPHAVITE[(EN_ALPHAVITE.indexOf(string_to_encrypt.charAt(i)) + EN_ALPHAVITE.indexOf(secret_word.charAt(i)))%26]);
//     }
//     return encrypted_string.join("");
//   }
//   decrypt(string_to_decrypt, secret_word) {
//     throw new CustomError('Not implemented');
//     // remove line with error and write your code here
//   }
// }
//
//
// a = new VigenereCipheringMachine();
// console.log(a.encrypt('ATTACKATDAWN', 'LEMON'))
// //'LXFOPVEFRNHR'