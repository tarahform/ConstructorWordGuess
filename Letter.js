function Letter(character) {
    this.guessed = false;
    this.character = character;
}

Letter.prototype.outputLetterDisplay = function () {
    if (this.guessed) {
        return this.character + " ";
    } else {
        return "_ ";
    }
};

Letter.prototype.checkGuess = function (userInput) {
    if (userInput.toUpperCase() === this.character.toUpperCase()) {
        this.guessed = true;
    }
}

module.exports = Letter;