const assert = require("assert");
describe("cvicenie04 - Object properties concepts", function() {

  const {
    allOwnKeys,
    allOwnValues,
    allOwnEntries,
    getProtoChain,
    allKeys,
    forIn,
    shallowClone,
    hasInheritedProperty,
    hasOverridenProperty
  } = require("../src/introspect.js");

  describe("Object.keys", function() {

    it("allOwnKeys() works for Strings and Symbols", function() {
      let o = { a: 10 };
      let s = Symbol();
      o[s] = 20;

      assert(Object.keys(o), ["a"],
        "Object.keys() does not return Symbols");


      assert.deepStrictEqual(allOwnKeys(o), ['a', s],
        "allOwnKeys returns also symbols");
    });

    it("allOwnKeys() works for non enumerable as well", function() {
      let o = { a: 10 };
      Object.defineProperty(o, 'b', {
        value: 20,
        enumerable: false
      });

      assert(Object.keys(o), ["a"],
        "Object.keys() does not return non enumerable props");


      assert.deepStrictEqual(allOwnKeys(o), ['a', 'b'],
        "allOwnKeys returns also non enumerable");
    });
  });
  describe("Object.values", function() {

    it("allOwnValues() works for Strings and Symbols", function() {
      let o = { a: 10 };
      let s = Symbol();
      o[s] = 20;

      assert(Object.values(o), [10],
        "Object.values does not return Symbols");


      assert.deepStrictEqual(allOwnValues(o), [10, 20],
        "allOwnValues retuns also Symbols");
    });

    it("allOwnValues() works for non enumerable as well", function() {
      let o = { a: 10 };
      Object.defineProperty(o, 'b', {
        value: 20,
        enumerable: false
      });

      assert(Object.values(o), [10],
        "Object.values() does not return non enumerable props");


      assert.deepStrictEqual(allOwnValues(o), [10, 20],
        "allOwnValues returns also non enumerable");
    });
  });
  describe("Object.entries", function() {

    it("allOwnEntries() works for Strings and Symbols", function() {
      let o = { a: 10 };
      let s = Symbol();
      o[s] = 20;

      assert(Object.entries(o), [
          ['a', 10]
        ],
        "Object Values does not return Symbols");

      assert(allOwnEntries(o), [
          ['a', 10],
          [s, 20]
        ],
        "allOwnEntries returns also symbols");

    });

    it("allOwnEntries() works for non enumerable as well", function() {
      let o = { a: 10 };
      Object.defineProperty(o, 'b', {
        value: 20,
        enumerable: false
      });

      assert(Object.entries(o), [
          ['a', 10]
        ],
        "Object.entries() does not return non enumerable props");


      assert.deepStrictEqual(allOwnEntries(o), [
          ['a', 10],
          ['b', 20]
        ],
        "allOwnEntries returns also non enumerable");
    });

    it("allOwnEntries() works with getters", function() {
      let o = { a: 10 };
      Object.defineProperty(o, 'b', {
        get() {
          return 20;
        },
        enumerable: false
      });

      assert(Object.entries(o), [
          ['a', 10]
        ],
        "Object.entries() does not return non enumerable props");


      assert.deepStrictEqual(allOwnEntries(o), [
          ['a', 10],
          ['b', 20]
        ],
        "allOwnEntries returns also non enumerable");
    });
  });

  describe("proto chains", function() {

    it("getProtoChain returns [self,...proto] of objects in the chain", function() {
      let x = { a: 10 };
      let y = Object.create(x);
      y.b = 20;
      let z = Object.create(y);
      z.c = 30;

      assert.deepStrictEqual(getProtoChain(x), [x, Object.prototype]);
      assert.deepStrictEqual(getProtoChain(y), [y, x, Object.prototype]);
      assert.deepStrictEqual(getProtoChain(z), [z, y, x, Object.prototype]);

      var n = Object.create(null);
      assert.deepStrictEqual(getProtoChain(n), [n]);

    });
  });

  describe("for..in", function() {
    it("forIn supports Symbols", function() {
      let x = { a: 10 };
      let s = Symbol();
      x[s] = "this is symbol prop";

      var props = [];
      for (let p in x) {
        props.push(p);
      }
      assert.deepStrictEqual(props, ['a'],
        "for..in does not see Symbols");

      var props2 = [];
      forIn(x, (p) => props2.push(p));
      assert(props2.includes('a'));
      assert(props2.includes(s),
        "forIn does see Symbols");

    });
    it("forIn supports inherited props", function() {
      let x = { a: 10 };
      let y = Object.create(x);
      y.b = 20;

      var props = [];
      for (let p in y) {
        props.push(p);
      }
      assert.deepStrictEqual(props, ['b', 'a'],
        "for..in supports inherited properties"
      );

      var props2 = [];
      forIn(y, (p) => props2.push(p));

      assert(props2.includes('b'));
      assert(props2.includes('a'),
        "forIn supports inherited properties as well"
      );

    });
    it("forIn supports nonenumerable", function() {
      let x = Object.create(null, { a: { value: 10, enumerable: true } });
      let y = Object.create(x, { b: { value: 20, enumerable: false } });

      var props = [];
      for (let p in y) {
        props.push(p);
      }

      assert(y.b === 20, "b is there");
      assert.deepStrictEqual(props, ['a'],
        "but b (non-enumerable) is not visible using for..in loop");

      var props2 = [];
      forIn(y, (p) => props2.push(p));

      assert.deepStrictEqual(props2, ['a', 'b'],
        "but visible using forIn");
    });
  });
  describe("cloning", function() {

    it("shallow clone - clones own,inherited,non-enumerable", function() {
      let x = Object.create(null, { a: { value: 10, enumerable: true } });
      let y = Object.create(x, { b: { value: 20, enumerable: false } });


      var y2 = shallowClone(y);
      assert('a' in y2);
      assert('b' in y2);
    });
    it("shallow clone - respects ownership", function() {
      const owns = (o, p) => Object.prototype.hasOwnProperty.call(o, p);

      let x = Object.create(null, { a: { value: 10, enumerable: true } });
      let y = Object.create(x, { b: { value: 20, enumerable: false } });

      assert(!owns(y, 'a'));
      assert(owns(y, 'b'));

      var y2 = shallowClone(y);

      assert(y2 !== y, "returns new instace");

      // same applies after clonning
      // what was own must stay own
      assert(!owns(y2, 'a'));
      assert(owns(y2, 'b'));

    });
    it("shallow clone - props added to proto are visible to clone", function() {
      let x = Object.create(null, { a: { value: 10, enumerable: true } });
      let y = Object.create(x, { b: { value: 20, enumerable: false } });

      var y2 = shallowClone(y);
      // modify proto of y
      Object.getPrototypeOf(y).newProp = 10;

      assert(y2.newProp === 10);
    });
    it("shallow clone - works with symbols", function() {

      let x = Object.create(null, { a: { value: 10, enumerable: true } });
      let y = Object.create(x, { b: { value: 20, enumerable: false } });
      let sx = Symbol();
      let sy
      x[sx] = "symbol sx";
      y[sy] = "symbol sy";

      var y2 = shallowClone(y);
      
      assert(y2[sx] === "symbol sx");
      assert(y2[sy] === "symbol sy");
    });
  });

  describe("ownership tests", function() {

    it("hasInheritedProperty", function() {
      let x = Object.create(null, { a: { value: 10, enumerable: true } });
      let y = Object.create(x, { b: { value: 20, enumerable: false } });

      assert(hasInheritedProperty(y, 'a'));

    });
    it("hasInheritedProperty - return false on non existing", function() {
      let x = Object.create(null, { a: { value: 10, enumerable: true } });
      let y = Object.create(x, { b: { value: 20, enumerable: false } });

      assert(!hasInheritedProperty(y, 'foo'));
    });

    it("hasOverridenProperty", function() {
      let x = Object.create(null);
      x.a = 'x.a';
      x.b = 'x.b';
      let y = Object.create(x);
      y.c = 'y.c';
      y.a = 'y.a';

      assert(hasOverridenProperty(y, 'a'));
      assert(!hasOverridenProperty(y, 'b'));
      assert(!hasOverridenProperty(y, 'c'));
      assert(!hasOverridenProperty(y, 'foo'));

      delete y.a;
      assert(!hasOverridenProperty(y, 'a'));
      assert('a' in y);
    });
    it("hasOverridenProperty - works on proto.proto", function() {
      let x = Object.create(null);
      x.a = 'x.a';
      x.b = 'x.b';
      let y = Object.create(x);
      y.c = 'y.c';
      y.a = 'y.a';
      let z = Object.create(x);
      z.a = 'z.a';

      assert(hasOverridenProperty(z, 'a'));

    });
  });



});