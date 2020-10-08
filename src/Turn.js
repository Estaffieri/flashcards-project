const Card = require("../src/Card")

class Turn {
    constructor(guess, card) {
        this.guess = guess;
        this.card = card;
    }
    returnGuess() {
        if (this.guess === undefined) {
            return "Take a guess!"
        } else {
            return this.guess
        }
    }
}

module.exports = Turn;