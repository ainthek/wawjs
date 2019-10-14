var assert = require("assert");

var o = {
  firstName: "John",
  set age(val) {
    if (!val || !Number.isInteger(val)) {
      throw new TypeError();
    }
    this._age = val;
  },
  get age() {
    return this._age || NaN;
  }
};

// o.age(10) - setter sa nevola ako metoda !
// hodnoty STALE setujete priradenim

o.age = 10;
assert(o.age === 10);

assert.throws(() => {
  o.age = "30.78"
}, TypeError)

// however
o._age = "30.78"; //nothing stops you
assert(o.age === "30.78");

