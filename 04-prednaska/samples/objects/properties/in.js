var assert = require("assert");

var o = {
    firstName: "John",
    age: 20
};
var e = Object.create(o);
e.job = "programmer";

// own 
assert("job" in e);

// inherited
assert("age" in e);
assert("firstName" in e);

// inherited nonenumerable
assert("toString" in e);

// symbol
assert(!(Symbol.iterator in e));

// symbol
assert(Symbol.iterator in [1, 2, 3]);

// often replaced by simple 
// check and boolean coercion 

if('firstName' in e){}
if(e.firstName){}

if(e.age){} // beware for numbers


