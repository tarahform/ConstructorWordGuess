var inquirer = require("inquirer");
var Word = require("./Word");

var numGuesses;
var wordObject;

function wordSelector() {
    var wordArray = [
        "apricot",
        "nessy",
        "aliens"
    ]
    var random = wordArray[Math.floor(Math.random() * wordArray.length)];
    // console.log(random);
    return new Word(random);
}

function guessALetter() {
    inquirer.prompt([
        {
            name: "guess",
            type: "input",
            message: "Guess a letter: "
        }
    ]).then(function (val) {
        console.log(val);
        wordObject.checkGuess(val.guess);
        var wordString = wordObject.outputWordDisplay();
        console.log(wordString);
        numGuesses -= 1;
        console.log("Guesses Left: " + numGuesses);
        if (wordString.includes("_") && numGuesses > 0) {
            guessALetter();
        } else {
            start();
        }
    });
}

function start() {
    wordObject = wordSelector();
    numGuesses = 10;
    // console.log(wordObject);
    console.log(wordObject.outputWordDisplay());
    console.log("Guesses Left: " + numGuesses);
    guessALetter();
};
// executed code
start();