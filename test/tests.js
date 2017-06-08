QUnit.test("Pig Latin Single Word tests", function(assert) {
  function plWordTest(word, expected, message) {
    assert.equal(convertWord(word), expected, message);
  }
  plWordTest("a", "away", "a -> away"); // word starts with a vowel
  plWordTest("blow", "owblay", "below --> owblay"); // word that starts with a consonant 
  plWordTest("Yellow", "ellowYay", "Yellow --> elloYay"); // word that starts with a Y 
  plWordTest("Squeal", "ealSquay", "Squeal --> ealSquay"); // if first vowel is U with a Q

});

QUnit.test("Full sentence tests", function(assert) {
  function plSentenceTest(sent, expected, message) {
    assert.equal(pigLatin(sent), expected, message);
  }
  plSentenceTest("The quick brown fox squealed with delight", "eThay uickqay ownbray oxfay uealedsqay ithway elightday", "brown fox test"); // word starts with a vowel

});