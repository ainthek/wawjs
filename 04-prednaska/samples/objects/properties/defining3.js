'use strict';
var assert = require("assert");



var o = {
    firstName: "John"
};

// since ES 5.1 we have more controll
Object.defineProperty(o,"age",{
	// enumerable:false,
	// configurable:false,
	// writable:false,
	value:30
});

// a) writable 
o.age = 20; 			//in strict mode error
assert(o.age === 30);	//else just unchanged 

// b) enumerable
assert(!Object.keys(o).includes("age"));

// c) configurable
delete o.age;
assert(("age" in o));

