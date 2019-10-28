const saveSomewhere = require("../src/saveSomewhere2.js");
const assert = require("assert");

const os = require("os");
const fs = require("fs");
const path = require("path");

describe("saveSomewhere", function() {
  it("saveSomewhere is function with 3 params", function() {
    assert.equal(typeof saveSomewhere, "function");
    assert.equal(saveSomewhere.length, 3);
  });

  it("saveSomewhere return string path of saved file", function(done) {
    const paths = [
      `${__dirname}/data/c/sample.txt`,
      `${__dirname}/data/a/sample.txt`,
      `${__dirname}/data/b/sample.txt`
    ];
    saveSomewhere(paths, "sample", (err, saved) => {
      if (err) return done(err);
      
      assert.equal(saved, `${__dirname}/data/a/sample.txt`);
      done();
    })
  });
  it("saveSomewhere fails if none saved", function(done) {
    const paths = [
      `${__dirname}/data/x/sample.txt`,
      `${__dirname}/data/y/sample.txt`,
      `${__dirname}/data/z/sample.txt`
    ];
    saveSomewhere(paths, "sample", (err, d) => {
      assert(err);
      done();
    })
  });


});