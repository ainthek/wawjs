const assert = require("assert");

// tested library
const lsr = require("../src/ls-promises.js");

describe("test ls-promises.js", function() {

  const expected = ['ls-async.js', 'ls-promises.js', 'ls-async.spec.js', 'ls-pomises.spec.js'];

  it("01", function() {

    return lsr(".")
      .then((files) => {
        assert.deepStrictEqual(files, expected);
      })

  });
});