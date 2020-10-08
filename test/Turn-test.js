const chai = require("chai");
const expect = chai.expect;

const dummyData = require("./dummy-data");
const Card = require("../src/Card");
const Turn = require("../src/Turn");

describe("Turn", function() {
    let card, guess1, guess2, turn1, turn2;
    beforeEach(function() {
    card = new Card(dummyData.id, dummyData.question, dummyData.answers, dummyData.correctAnswer);
    // guess1 =
    // guess2 =
    // turn1 = 
    // turn2 =
    });

it("should be a function", function() {
    expect(Turn).to.be.a("function");
})
});

