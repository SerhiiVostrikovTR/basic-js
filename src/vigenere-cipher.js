// const CustomError = require("../extensions/custom-error");

ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

class VigenereCipheringMachine {
  constructor(directMachine=true) {
    this.directMachine = directMachine;
  }

  secretWordMultiple = (stringToModify, secretKey) =>
    secretKey.repeat((stringToModify.length/secretKey.length)+1).substring(0,stringToModify.length)


  pairCharsStringAndSecret(stringToModify, secretKey){
    let secretKeyIndexCounter = 0;
    return stringToModify.map(char => {
      return ALPHABET.includes(char) ? [char, secretKey[secretKeyIndexCounter++]] : [char, null];
    });
  }

  commonEncryptDecryptFunction = (stringToModify, secretKey, encrypt=true) =>
      this.pairCharsStringAndSecret(
          stringToModify.toUpperCase().split(''),
          this.secretWordMultiple(stringToModify, secretKey).toUpperCase().split(''))
          .reduce((acc, currChar) =>
              {
                if(ALPHABET.includes(currChar[0])) {
                  if(encrypt)
                  {
                    return acc + ALPHABET[(ALPHABET.indexOf(currChar[0]) + ALPHABET.indexOf(currChar[1])) % ALPHABET.length];
                  }
                  return acc + ALPHABET[(ALPHABET.indexOf(currChar[0]) - ALPHABET.indexOf(currChar[1]) + ALPHABET.length) % ALPHABET.length];
                }
                return acc+currChar[0];
              }
              , '');

  encrypt(stringToEncrypt, secretKey) {
    if (arguments.length!==2) {throw CustomError('Invalid number of arguments!');}
    let encryptedMessage = this.commonEncryptDecryptFunction(
        stringToEncrypt,
        secretKey);
    return this.directMachine ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }
  decrypt(stringToDecrypt, secretKey) {
    if (arguments.length!==2) {throw CustomError('Invalid number of arguments!');}
    let decryptedMessage = this.commonEncryptDecryptFunction(
        stringToDecrypt,
        secretKey,
        false);
    return this.directMachine ? decryptedMessage : decryptedMessage.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
