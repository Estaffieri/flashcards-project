const chai = require('chai');
const expect = chai.expect;

const dummyData = require("./dummy-data");
const Card = require('../src/Card');

describe("Card", function() {
    let id, question, answers, correctAnswer;
    beforeEach(function() {
        card = new Card(dummyData.id, dummyData.questions, dummyData.answers, dummyData.correctAnswer)
    });

  it('should be a function', function() {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    expect(card).to.be.an.instanceof(Card);
  });

  it('should store a question', function() {
    expect(card.question).to.equal(dummyData.questions);
  });

  it('should store a list of possible answers', function() {
    expect(card.answers).to.deep.equal(dummyData.answers);
  });

  it('should store the correct answer', function() {
    expect(card.correctAnswer).to.equal(dummyData.correctAnswer);
  });
});
