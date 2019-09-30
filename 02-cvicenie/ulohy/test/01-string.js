const assert = require("assert");

describe("Exploratory tests - string", function() {

  it("String can be concatenated with + operator", function() {
    let a = "cats";
    let b = "dogs";
    let c //= ....;
    assert.strictEqual(c, "cats and dogs");
  });
  it("String can be concatenated with templated literal", function() {
    let a = "cats";
    let b = "dogs";
    let c //=....;
    assert.strictEqual(c, "cats and dogs");
  });
  it("Pad all strings to size of longest", function() {
    const strings = ["a", "bbc", "cc"];
    let result = [];
    // ....
    // ....
    // ....
    // ....
    assert.deepStrictEqual(result, ["  a", " bb", "ccc"]);
  });
  it("replace all animals in sentence", function() {
    const sentence = "cats ignore dogs";
    let result;//=... 
    assert.strictEqual(result, " ignore ");
  });
});