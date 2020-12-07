const CustomError = require("../extensions/custom-error");

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

class VigenereCipheringMachine {

  constructor(directMachine=true) {
    this.directMachine = directMachine;
  }

  commonEncryptDecryptSteps(stringToModify, secretKey, encrypt=true){
    let modifiedStringArray = [];
    let secretKeyIndexCounter = 0;
    const alphabetLength = ALPHABET.length;
    const getAlphabetValueByIndex = index => ALPHABET[index];
    const getAlphabetIndexByValue = value => ALPHABET.indexOf(value);

    stringToModify = stringToModify.toUpperCase();
    secretKey = secretKey.toUpperCase();

    for(let i=0; i<stringToModify.length; i++){
      let modifiedChar = stringToModify[i];
      // Skip symbol in encryption/decryption if it isn't in alphabet
      if(!ALPHABET.includes(stringToModify[i]))
      {
        modifiedStringArray.push(modifiedChar);
      }
      else {
        let currentCharFromString = stringToModify.charAt(i);
        let currentIndexFromCharOfStringInAlphabet =  getAlphabetIndexByValue(currentCharFromString);
        let currentCharFromSecretString = secretKey.charAt(secretKeyIndexCounter % secretKey.length);
        let currentIndexFromCharOfSecretWordInAlphabet = getAlphabetIndexByValue(currentCharFromSecretString);
        if (encrypt){
          // calculate encrypted char according to Vigenere's cipher
          modifiedChar = getAlphabetValueByIndex((currentIndexFromCharOfStringInAlphabet +
              currentIndexFromCharOfSecretWordInAlphabet) % alphabetLength);}
        else {
          // calculate decrypted char according to Vigenere's cipher
          modifiedChar =
              getAlphabetValueByIndex((currentIndexFromCharOfStringInAlphabet -
                      currentIndexFromCharOfSecretWordInAlphabet + alphabetLength) % alphabetLength);}
        secretKeyIndexCounter++;

        modifiedStringArray.push(modifiedChar);
      }
    }
    return modifiedStringArray;

  }

  encrypt(stringToEncrypt, secretKey) {
    if (arguments.length!==2) {throw CustomError('Invalid number of arguments!');}
    let encryptedMessage = this.commonEncryptDecryptSteps(stringToEncrypt, secretKey);
    return this.directMachine ? encryptedMessage.join('') : encryptedMessage.reverse().join('');
  }
  decrypt(stringToDecrypt, secretKey) {
    if (arguments.length!==2) {throw CustomError('Invalid number of arguments!');}
    let decryptedMessage = this.commonEncryptDecryptSteps(stringToDecrypt, secretKey, false);
    return this.directMachine ? decryptedMessage.join('') : decryptedMessage.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
