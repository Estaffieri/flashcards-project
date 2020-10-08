const chai = require("chai");
const expect  = chai.expect;

const Deck = require("../src/Deck.js");
const Card = require("../src/Card");
const Turn = require("../src/Turn")
const dummyData = require("./dummy-data.js");


describe("Deck", function(){
let card, guess1, guess2, turn1, turn2;
beforeEach(function() {
    card = new Card( 1,"How tall is Estelle?", ["6ft", "3.5ft", "5.0ft"], "5.0ft");
    guess1 = "5.0ft"
    guess2 = "left"
    turn1 = new Turn(guess1, card);
    turn2 = new Turn(guess2, card);
});

it("should be a function", function() {
expect(Deck).to.be.a("function")
})
})