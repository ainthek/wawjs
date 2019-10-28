const writeTempFile = require("../src/writeTempFile3.js");
const assert = require("assert");

const os = require("os");
const fs = require("fs");
const path = require("path");

describe("writeTempFile", function() {
  it("writeTempFile is function", function() {
    assert.equal(typeof writeTempFile, "function");
  });
  it("writeTempFile returns path to created file on success", function(done) {
    writeTempFile("test01.txt", "sample data", "utf8",
      (err, fileName) => {
        if (err) return done(err);
        assert.equal(typeof fileName, "string");
        assert(path.isAbsolute(fileName));
        done();
      });
  });
  it("writeTempFile creates file under temp directory", function(done) {
    writeTempFile("test02.txt", "sample data", "utf8",
      (err, fileName) => {
        if (err) return done(err);
        assert(fileName.startsWith(os.tmpdir())); //FIXME: naive  
        done();
      });
  });
  it("writeTempFile creates file under temp directory", function(done) {
    writeTempFile("test03.txt", "sample data", "utf8",
      (err, fileName) => {
        fs.readFile(fileName, "utf8", (err, data) => {
          assert.equal(data, "sample data");
          done();
        })
      });
  });
  it("writeTempFile fails in async fashion (writeFile in sync)", function(done) {
    writeTempFile("test03.txt", "sample data", "FOO",
      (err, fileName) => {
        assert(err);
        done();
      });
  });
  it.skip("[BONUS]: writeTempFile has 'same signature' as writeFile", function() {
    assert.equal(writeTempFile.length, fs.writeFile.length);
  });
});