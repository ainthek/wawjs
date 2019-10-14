'use strict';
var assert = require("assert");



var o = {
    firstName: "John"
};

// since ES 5.1 we have more controll
Object.defineProperty(o, "age", {
    set: function(val) {
        if (!Number.isInteger(val)) {
            throw new TypeError('age must be integer');
        }
        this._age = val;
    },
    get: function() {
        return this._age;
    },
    enumerable: true
});


o.age = 20;
assert(o.age === 20);

assert.throws(() => o.age = "teen", TypeError);

/*
{
  "firstName": "John",
  "age": 20,
  "_age": 20
}
*/

