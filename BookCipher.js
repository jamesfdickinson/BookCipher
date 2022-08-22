class BookCipher {
  constructor(key) {
    this.key = key;
  }
  decryptAsChar(text, keyText) {
    let result = '';
    //for each word in the text
    const words = text.match(/\S+\s*/g);
    const keys = keyText.split(' ');
    //for each number in the key
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const word = words[key - 1];
      //get first letter of the word
      let firstLetter = word.charAt(0);
      if (firstLetter == "(") firstLetter = word.charAt(1);
      if (firstLetter == "[") firstLetter = word.charAt(1);
      result += firstLetter;
    }
    return result;
  }
  decryptAsWord(text, keyText) {
    let result = '';
    //for each word in the text
    const words = text.match(/\S+\s*/g);
    const keys = keyText.split(' ');
    //for each number in the key
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const word = words[key - 1];

      result += word;
    }
    return result;
  }
  decryptAsCharCount(text, keyText) {
    let result = '';

    const keys = keyText.split(' ');
    //for each number in the key
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const textChar = text[key - 1];

      result += textChar;
    }
    return result;
  }
  decryptAsCharCountIgnoreWhiteSpace(text, keyText) {
    let result = '';
    //regex remove all white space and return the text
    const textNoWhiteSpace = text.replace(/[^a-z0-9]/gi, '');
    const keys = keyText.split(' ');
    //for each number in the key
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const textChar = textNoWhiteSpace[key - 1];

      result += textChar;
    }
    return result;
  }

}