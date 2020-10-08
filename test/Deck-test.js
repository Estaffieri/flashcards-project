const chai = require("chai");
const expect = chai.expect;

const Deck = require("../src/Deck");
const Card = require("../src/Card");
const Turn = require("../src/Turn");

describe.only("Deck", function() {
  let card, card1, card2, card3, guess1, guess2, turn1, turn2, deck1;
beforeEach(function() {
    card = new Card( 1, "How tall is Estelle?", ["6ft", "3.5ft", "5.0ft"], "5.0ft");
    guess1 = "5.0ft";
    guess2 = "left";
    turn1 = new Turn(guess1, card);
    turn2 = new Turn(guess2, card);
    card1 = new Card(1, "What is Sam\'s favorite animal", ["sea otter", "pug", "capybara"], "sea otter");
    card2 = new Card(2, "What is my favorite food?", ["Tuna", "Peanut Butter & Honey Sandwich", "Chips"], "Chips");
    card3 = new Card(3, "What is my dog's name?", ["Beatrix", "Harlequin", "Valentine"], "Beatrix");
    deck1 = new Deck([card, card2, card3]);

});

  it("should be a function", function() {
    expect(Deck).to.be.a("function")
  });

  it("should be an instance of Deck", function() {
    expect(deck1).to.be.an.instanceof(Deck);
  });

  it("should be an array of cards", function() {
    expect(deck1.cards).to.deep.equal([card, card2, card3]);
  })
})