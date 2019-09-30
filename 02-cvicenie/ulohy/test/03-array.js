const assert = require("assert");
describe("Exploratory tests - array api", function() {
  it("length and sparse arrays", function() {
    let a = [1, 2, 3];
    a[10] = 10;
    // assert(a.length===4);
    // assert(a.length===11);
    // assert(a.length===10);
    assert.fail("choose one of the options");
  });
  it("length and sparse arrays", function() {
    let a = [1, 2, 3];
    //assert(a[-1]===...)
    //assert(a[1000]===...);
    //assert(a["slon"] === ...);
    delete a[2];
    //assert(a[2]===...)
  });
  it("construct array with predefined length and content", function() {
    assert.deepStrictEqual(array(3, "X"), ["X", "X", "X"]);
    function array(count, item) {
      // TODO: implement
    }
  });
  /* TODO: play with other APIs
  make tests testing for mutable/non mutable operations
  see samples on MDN for border cases

  Array.prototype.constructor()
  Array.of(element0[, element1[, ...[, elementN]]])
  Array.from(arrayLike[, mapFn[, thisArg]])
  Array.fill(value[, start[, end]])

  Array[@@species]
  Array.isArray()

  Array.prototype.length
  Array.prototype.keys()
  Array.prototype.entries()
  Array.prototype.forEach()
  Array.prototype[@@iterator]
  Array.prototype[@@unscopables]

  Array.prototype.concat()
  Array.prototype.push(element1[, ...[, elementN]])
  Array.prototype.unshift()

  Array.prototype.pop()
  Array.prototype.shift()

  Array.prototype.splice(start[, deleteCount[, item1[, item2[, ...]]]])
  Array.prototype.copyWithin()

  Array.prototype.indexOf()
  Array.prototype.lastIndexOf()
  Array.prototype.find()
  Array.prototype.findIndex()
  Array.prototype.includes()
  Array.prototype.every()
  Array.prototype.some()


  Array.prototype.filter()
  Array.prototype.slice()

  Array.prototype.map()
  Array.prototype.reduce(callback(accumulator,value,index,arr)[, initialValue])
  Array.prototype.reduceRight(callback(accumulator,value,index,arr)[, initialValue])

  Array.prototype.reverse()
  Array.prototype.sort()

  Array.prototype.join()
  Array.prototype.toString()
  Array.prototype.toLocaleString()

  */
});