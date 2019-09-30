const assert = require("assert");

describe("Exploratory tests - string", function() {

  it("String can be concatenated with + operator", function(done) {
    let a = "cats";
    let b = "dogs";
    let c //= ....;
    assert(c === "cats and dogs");
  });
  it("String can be concatenated with templated literal", function(done) {
    let a = "cats";
    let b = "dogs";
    let c //=....;
    assert(c === "cats and dogs");
  });

});