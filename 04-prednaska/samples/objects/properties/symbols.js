'use strict';
var assert = require("assert");



var o = {
    firstName: "John"
};

const kAge = Symbol("age");
Object.defineProperty(o, "age", {
    set: function(val) {
        if (!Number.isInteger(val)) {
            throw new TypeError('age must be integer');
        }
        this[kAge] = val;
    },
    get: function() {
        return this[kAge];
    },
    enumerable: true
});


o.age = 20;
assert(o.age === 20);

assert.throws(() => o.age = "teen", TypeError);


console.log(JSON.stringify(o,null,2));
/*
{
  "firstName": "John",
  "age": 20
}
*/
