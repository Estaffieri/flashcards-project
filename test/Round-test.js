const chai = require("chai");
const expect = chai.expect;

const Card = require("../src/Card");
const Turn = require("../src/Turn");
const Deck = require("../src/Deck");
const Round = require("../src/Round");

describe.only("Round", function() {
  let card1, card2, card3, deck, round;
  beforeEach(function() {
    card1 = new Card(1, "What is Sam\'s favorite animal", ["sea otter", "pug", "capybara"], "sea otter");
    card2 = new Card(2, "What is my favorite food?", ["Tuna", "Peanut Butter & Honey Sandwich", "Chips"], "Chips");
    card3 = new Card(3, "What is my dog's name?", ["Beatrix", "Harlequin", "Valentine"], "Beatrix");
    deck = new Deck ([card1, card2, card3]);
    round = new Round(deck);

  });

  it("should be a function", function() {
    expect(Round).to.be.a("function");
  });

  it("should be an instance of Round", function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it("should be an instance of Turn", function() {
    round.takeTurn("guess");

    expect(round.currentTurn).to.be.an.instanceof(Turn);
  })

  it("should have a way to keep track of the turn", function() {
    round.takeTurn("guess");

    expect(round.turns).to.equal(1);
  })

  it("should add incorrect guess to the incorrectGuesses array", function() {
    round.takeTurn("guess");

    expect(round.incorrectGuesses.length).to.equal(1);
  })

  it("should return the percent of incorrectGuesses", function() {
    round.takeTurn("pug");
    round.takeTurn("Chips");
    round.takeTurn("Beatrix");

    expect(round.calculatePercentCorrect()).to.equal(66);
  });

  it("should print the message that", function() {
    round.takeTurn("pug");
    round.takeTurn("Chips");
    round.takeTurn("Beatrix");

    expect(round.endRound()).to.equal("**Round Over!** You've answered 66% of the questions correctly!");

  });

});
  