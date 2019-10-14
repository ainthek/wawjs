'use strict';
var assert = require("assert");

// you can define properies
// 'in-place' in object literal
var o = {
    firstName: "John"
};

// or later any time
o.age = 30;

// by default (and historicaly) 
// these poroperties are very lax
// so all of the are:


// a) writable
o.age = 20;
assert(o.age === 20);

// b) enumerable
assert(Object.keys(o).includes("age"));

// c) configurable
delete o.age;
assert(!("age" in o));

