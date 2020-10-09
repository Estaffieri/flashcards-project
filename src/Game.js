const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require("../src/Deck");
const Round = require("../src/Round");

class Game {
  constructor() {
    this.currentRound = {};
  }
  start() {
    const currentDeck = new Deck(prototypeQuestions);
    this.currentRound = new Round(currentDeck);
    this.printMessage(currentDeck, this.currentRound);
    this.printQuestion(this.currentRound);
    this.startTimer();
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.)
----------------------------------------------------------------------------`)
  }

  formatDuration() {
    return `${}`
  }

  startTimer() {
  const startTimeInMillis = Date.now()
  const endTimeInMillis = Date.now() - startTimeInMillis;
  const timeElapsedInSeconds = Math.floor((endTimeInMillis - startTimeInMillis) / 1000);
  console.log(startTimeMillis)
  console.log(endTimeInMillis)
  const formattedDuration = formatDuration(timeElapsedInSeconds);
  console.log(`it took you ${formattedDuration}`);
  }

  printQuestion(round) {
    util.main(round);
  }

 
}

module.exports = Game;