var Letter = require("./Letter");

function Word(randomWord) {
    this.currentWord = [];

    for (var i = 0; i < randomWord.length; i++) {
        this.currentWord.push(new Letter(randomWord[i]))
    }
    // console.log(currentWord);
}

Word.prototype.outputWordDisplay = function () {
    var outputWord = "";
    this.currentWord.forEach(function (letter) {
        outputWord += letter.outputLetterDisplay();
    })
    return outputWord;
}

Word.prototype.checkGuess = function (userInput) {
    this.currentWord.forEach(function (letter) {
        letter.checkGuess(userInput);
    })
}

module.exports = Word;


// var testWord = new Word("ali");
// console.log(testWord.outputWordDisplay());
// testWord.checkGuess("a");
// console.log(testWord.outputWordDisplay());

