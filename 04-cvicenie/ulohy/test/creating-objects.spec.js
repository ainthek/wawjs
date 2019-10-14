const assert = require("assert");

describe("Creating objects", function() {

  it("01 - Basic properties and metods", function() {

    let o = {
      // create object with property and method
      // use method shortcut syntax
      // TODO:
      //
      //
     
    };

    assert(o.hasOwnProperty("a") && o.hasOwnProperty("b"), "Object has two properties");
    assert(typeof o.b === "function")
    assert(o.b() === o.a, "b is method return value of a");

    o.a = Math.random();
    assert(o.b() === o.a);
  });
  it("02 - getter", function() {
    // same as previous just make b getter instead of function
    let o = {
      // create object with property and method
      // use method shortcut syntax
      // TODO:
      //
      //
      
    };

    assert(o.hasOwnProperty("a") && o.hasOwnProperty("b"), "Object has two properties");
    assert(o.b === o.a, "b is property and return value of a");

    o.a = Math.random();
    assert(o.b === o.a);
  });
  it("03 - non enumerable properties", function() {
    // create object with property "a" "hidden" 
    // and accessible, only with getter b
    // b shall be visible (enumerable)
    let o; //TODO: use Object.create...
    

    assert.deepStrictEqual(o && Object.keys(o), ["b"], "shall have ONE enumerable property b")
    assert(o.b === o.a, "b is property and return value of a");
    o.a = Math.random();
    assert(o.b === o.a);
  });
  it("04 - inheritance with Object.create", function() {

    let base = {
      get b() {
        return this.a;
      }
    };
    let o; // TODO: inherit from base using Object.create... 
    

    assert(typeof o === "object");
    assert("b" in o && "a" in o, "shall have properties a,b");
    assert(o.hasOwnProperty("b") === false, "b shall be inherited");
    assert(o.hasOwnProperty("a") === true, "a shall be own");
    assert.deepStrictEqual(o && Object.keys(o), ["a"], "a shall be enumerable");

    let changed = Math.random();
    o.a = changed;
    assert(o.b === changed, "a shall be writable");

  });
  it("05 - create object not inherited from anything", function() {
    let o; //TODO:
    

    assert(typeof o === "object");
    assert(Object.getPrototypeOf(o) === null);
  });
  it("06 - modify API of array instance", function() {
    let arr = ["a", "b", "c"];
    arr.push(666);
    assert.deepStrictEqual(arr, ["a", "b", "c", 666], "this is standard behavior");

    function typedArray(arr) {

      return arr;
    }
    let orig = ["a", "b", "c"];
    let arr2 = typedArray(orig);
    arr2.push(666); //will silently ignore
    arr2.push({}); //will silently ignore
    assert.deepStrictEqual(arr2, ["a", "b", "c"], "typed array wil silently ignore non string value");
    assert(arr2 === orig, "Shell be augmented instance not wraper, not inherited");
    arr2.push("d", "e", "f");
    assert.deepStrictEqual(arr2, ["a", "b", "c", "d", "e", "f"], "beware: push may have multiple args");
    assert.deepStrictEqual(Object.keys(arr2), ["0", "1", "2", "3", "4", "5"], "beware: push may have multiple args");

  });
  it("08 - create objects with constructors", function() {

    let base = {
      get b() {
        return this.a;
      }
    };
    //TODO: create object with own "a" and  "b" from prototype
    function MyObject(a) {
      // TODO: define own property
     
    }
    // TODO: define inherited properties
   

    let o = new MyObject("test");
    assert("b" in o && "a" in o, "shall have properties a,b");
    assert(o.hasOwnProperty("a"), "a shell be own");
    assert(!(o.hasOwnProperty("b")), "b shell be inherited");
    // beware
    assert(Object.getPrototypeOf(o) === base);
    assert(Object.getPrototypeOf(o).hasOwnProperty("b"));

  });

  it("09 - create objects with classes", function() {
    // same as previous just use class syntax
    // create object with own "a" and  "b" from prototype
    class MyObject {
      // TODO: 
      
    }


    let o = new MyObject("test");
    assert("b" in o && "a" in o, "shall have properties a,b");
    assert(o.hasOwnProperty("a"), "a shell be own");
    assert(!(o.hasOwnProperty("b")), "b shell be inherited");
    // beware
    assert.equal(Object.getPrototypeOf(o).constructor, MyObject);
    assert(Object.getPrototypeOf(o).hasOwnProperty("b"));
  })

});