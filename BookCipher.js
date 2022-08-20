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

}