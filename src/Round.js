const Turn = require("../src/Turn");

class Round {
    constructor(deck){
      this.deck = deck;
      this.turns = 0;
      this.incorrectGuesses = [];
      this.currentTurn = {};
    }
    returnCurrentCard() {
      return this.deck.cards[this.turns];
    }
    takeTurn(guess) {
      const currentCard = this.returnCurrentCard();
      this.currentTurn = new Turn(guess, currentCard);
      if (!this.currentTurn.evaluateGuess()){
        this.incorrectGuesses.push(currentCard.id);
      }
      this.turns++;
      return this.currentTurn.giveFeedback();
    }
}


module.exports = Round;