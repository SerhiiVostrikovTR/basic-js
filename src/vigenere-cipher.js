const CustomError = require("../extensions/custom-error");



class VigenereCipheringMachine {
  constructor(directMachine=true) {
    this.directMachine = directMachine;
  }

  ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  getAlphabetValueByIndex = index => this.ALPHABET[index];
  getAlphabetIndexByValue = value => this.ALPHABET.indexOf(value);
  secretWordMultiple = (stringToModify, secretKey) => {return secretKey.repeat((stringToModify.length/secretKey.length)+1).substring(0,stringToModify.length-1)}

  commonEncryptDecryptSteps(stringToModify, secretKey, encrypt=true){
    let modifiedStringArray = [];
    let secretKeyIndexCounter = 0;
    const alphabetLength = this.ALPHABET.length;
    const secretNew = this.secretWordMultiple(stringToModify, secretKey)
    stringToModify = stringToModify.toUpperCase();
    secretKey = secretKey.toUpperCase();

    for(let i=0; i<stringToModify.length; i++){
      let modifiedChar = stringToModify[i];
      if(this.ALPHABET.includes(stringToModify[i])) {
        // let currentCharFromString = stringToModify.charAt(i);
        let currentIndexFromCharOfStringInAlphabet = this.getAlphabetIndexByValue(stringToModify.charAt(i));
        // let currentCharFromSecretString = secretKey.charAt(secretKeyIndexCounter % secretKey.length);
        let currentIndexFromCharOfSecretWordInAlphabet = this.getAlphabetIndexByValue(secretKey.charAt(secretKeyIndexCounter % secretKey.length));
        modifiedChar = encrypt ? this.getAlphabetValueByIndex((currentIndexFromCharOfStringInAlphabet +
            currentIndexFromCharOfSecretWordInAlphabet) % alphabetLength) : this.getAlphabetValueByIndex((currentIndexFromCharOfStringInAlphabet -
            currentIndexFromCharOfSecretWordInAlphabet + alphabetLength) % alphabetLength);
        secretKeyIndexCounter++;
      }
      modifiedStringArray.push(modifiedChar);
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



a = new VigenereCipheringMachine();
console.log(a.encrypt('attack at dawn!', 'alphonse'))

// console.log(repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' }))
// 'nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null');
// console.log(repeater('la', { repeatTimes: 3 }))
// 'la+la+la')