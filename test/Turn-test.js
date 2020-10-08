const chai = require("chai");
const expect = chai.expect;

const dummyData = require("./dummy-data");
const Card = require("../src/Card");
const Turn = require("../src/Turn");

describe("Turn", function() {
    let card, guess1, guess2, turn1, turn2;
    beforeEach(function() {
    card = new Card(dummyData.id, dummyData.question, dummyData.answers, dummyData.correctAnswer);
    guess1 = "A good guess"
    guess2 = "5.0ft"
    turn1 = new Turn(guess1, card);
    turn2 = new Turn(guess2, card);
    });

it("should be a function", function() {
    expect(Turn).to.be.a("function");
});

it("should be an instance of Turn", function() {
    expect(turn1).to.be.an.instanceof(Turn);
  });

it("Should return a users guess", function() {
    expect(guess1).to.equal(turn1.returnGuess());
    expect(guess1).to.equal(turn1.returnGuess());
})
});

