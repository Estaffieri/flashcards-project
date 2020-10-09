const Turn = require("../src/Turn");

class Round {
  constructor(deck) {
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
    if (!this.currentTurn.evaluateGuess()) {
      this.incorrectGuesses.push(currentCard.id);
    }
    this.turns++;
    return this.currentTurn.giveFeedback();
  }
  calculatePercentCorrect() {
    const amountIncorrect = this.incorrectGuesses.length;
    const amountCorrect = this.deck.cards.length - amountIncorrect;
    return Math.floor((amountCorrect / this.deck.cards.length) * 100);
  }
  endRound() {
    const percentCorrect = this.calculatePercentCorrect();
    let endRoundMessage = `**Round Over!** You've answered ${percentCorrect}% of the questions correctly!`
    console.log(endRoundMessage);
    return endRoundMessage
  }
}


module.exports = Round;