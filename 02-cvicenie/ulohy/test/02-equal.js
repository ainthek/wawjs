const assert = require("assert");
describe("Exploratory tests - 4 equality algs", function() {
  it("== (Abstract)", function() {
    // doplnte rue false miesto null
    assert.strictEqual(null == undefined, null);
    assert.strictEqual(0 == -0, null);
    assert.strictEqual(0 == "0", null);
    assert.strictEqual(NaN == NaN, null);
    assert.strictEqual({} == {}, null);
  });
  it("=== (Strict)", function() {
    assert.strictEqual(null === undefined, null)
    assert.strictEqual(0 === -0, null);
    assert.strictEqual(0 === "0", null);
    assert.strictEqual(NaN === NaN, null);
    assert.strictEqual({} === {}, null);
  });
  it("SameValueZero", function() {
    assert.strictEqual([0].includes("0"), null);
    assert.strictEqual([0].includes("-0"), null);
    assert.strictEqual([0].includes(NaN), null);
    assert.strictEqual([{}].includes({}), null);
  });
  it("SameValue", function() {
    assert.strictEqual(Object.is(0, -0), null);
    assert.strictEqual(Object.is(0, "0"));
    assert.strictEqual(Object.is(NaN, NaN), null);
    assert.strictEqual(Object.is({ a: 1 }, { a: 1 }));
  });
  it("implement function sameValueZeroEqual", function() {
    function sameValueZeroEqual(a, b) {
    	//...
    }
    assert.equal(sameValueZeroEqual(0, -0), true);
    assert.equal(sameValueZeroEqual(1, "1"), false);
    assert.equal(sameValueZeroEqual(NaN, NaN), true);
    assert.equal(sameValueZeroEqual(100, 100), true);
  });

});