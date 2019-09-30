const assert = require("assert");
describe("Exploratory tests - number datatype and api and Math", function() {
  it("division by zero", function() {
    let x = 10 / 0;
    //assert(x===Infinity);
    //assert(x===NaN);
    assert.fail("choose one of the options");
  });
  it("Number.MAX_SAFE_INTEGER", function() {
    let x = Number.MAX_SAFE_INTEGER;
    //assert(x + 1 === x + 2);
    //assert(x+1!==x+2);
    assert.fail("choose one of the options");
  });
  /*
  TODO: play with operators and Math API 
  
  Math.abs()
  Math.sign()

  Math.round()
  Math.ceil()
  Math.floor()
  Math.fround()
  Math.trunc()

  Math.max()
  Math.min()

  Math.random()

  Math.pow()
  Math.sqrt()
  Math.cbrt()
  Math.hypot()

  Math.log()
  Math.log1p()
  Math.log2()
  Math.log10()

  Math.exp()
  Math.expm1()

  Math.sin()
  Math.sinh()
  Math.acos()
  Math.acosh()
  Math.asin()
  Math.asinh()
  Math.atan()
  Math.atanh()
  Math.atan2()
  Math.cos()
  Math.cosh()
  Math.tan()
  Math.tanh()

  Math.clz32()
  Math.imul()

  Math.E
  Math.LN10
  Math.LN2
  Math.LOG10E
  Math.LOG2E
  Math.PI
  Math.SQRT1_2
  Math.SQRT2
*/
});