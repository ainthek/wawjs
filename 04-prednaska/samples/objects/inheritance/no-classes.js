var assert = require("assert");

var p = {};
p.a = [];
p.b = 'b';

var o1 = Object.create(p);

o1.x = 'x';

assert(o1.x === 'x');
assert(o1.b === 'b');
assert(o1.a.length === 0);



var o2 = Object.create(p);
o2.y = 'y';


assert(o2.y === 'y');
assert(o2.b === 'b');
assert(o2.a.length === 0);
//
assert(o2.a === o1.a);

// ....

var o3 = Object.create(o2);

//from o2
assert(o3.y === 'y');

//from p
assert(o3.b === 'b');
assert(o3.a.length === 0);


// p is instance/object
// o1,o2,o3 are instances/objects

// "parent" object becomes prototype
// of "child object", linked with
// [[Prototype]] internal property

// prototype is always object
// the real instance
// not "class" or "other abstract"

assert(o2 === Object.getPrototypeOf(o3));
assert(p === Object.getPrototypeOf(o2));
assert(p === Object.getPrototypeOf(o1));


var r = Object.getPrototypeOf(p);

assert(typeof r.valueOf == "function");
assert(typeof r.toString == "function");


var n = Object.getPrototypeOf(r);
assert(n === null);

assert(r === Object.prototype);

assert(r === Object.getPrototypeOf(p));
assert(r.isPrototypeOf(p));



// assert(o3.y === 'y');
// assert(o3.b === 'b');
// assert(o3.a.length === 0);

// assert(!('x' in o3));


// // changing prototype
// Object.setPrototypeOf(o3, o1);

// assert('x' in o3);
// assert(o3.x === 'x');


// prototype is shared

assert(o1.a.length === 0);
assert(o2.a.length === 0);

o1.a.push("one");
assert(o1.a[0] === "one");

assert(o2.a[0] === "one");

// add method to prototype
p.first = function() {
    return this.a[0];
}

assert(o1.first() === "one");
assert(o2.first() === "one");


// own properties

assert('x' in o1);
assert('a' in o1);
assert('toString' in o1);

assert(o1.hasOwnProperty('x'));
assert(!o1.hasOwnProperty('b'));
assert(!o1.hasOwnProperty('toString'));


assert(!o1.hasOwnProperty('b'));
assert(o1.b === 'b');

assert(!o2.hasOwnProperty('b'));
assert(o2.b === 'b');

// setting not own property
o1.b = 'changed';

// becomes own
assert(o1.hasOwnProperty('b'));
assert(o1.b === 'changed');

// other object not effected
assert(!o2.hasOwnProperty('b'));
assert(o2.b === 'b');

// deleting own property
var deleted = delete o1.b;

assert(deleted === true);

assert(!o1.hasOwnProperty('b'));
assert(o1.b === 'b');


delete o1.b; // ???

// delete only has an effect 
// on own properties 


assert(o2.hasOwnProperty('y'));
assert(!o3.hasOwnProperty('y'));


// shared reference on prototype
// what will happend ?


o1.a.push("something");

o1.a //???
p.a //???
o2.a //???

o1.a.concat("something");

o1.a //???
p.a //???
o2.a //???

o1.a = ["something"];

o1.a //???
p.a //???
o2.a //???