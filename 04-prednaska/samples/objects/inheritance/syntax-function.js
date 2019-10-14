var assert = require("assert");
var protoOf = (o) => Object.getPrototypeOf(o);

function P() {}
P.prototype.a = [];
P.prototype.b = 'b';

var o1 = new P();
o1.x = 'x';

var o2 = new P();
o2.y = 'y';

assert(protoOf(o1) === P.prototype);
assert(protoOf(o2) === P.prototype);

assert(protoOf(protoOf(o1)) === Object.prototype);
assert(protoOf(protoOf(protoOf(o1))) === null);


assert(Object.getPrototypeOf(o1) === P.prototype);
assert(Object.getPrototypeOf(o2) === P.prototype);

assert(o1 instanceof P);
assert(o2 instanceof P);

assert(o1 instanceof Object);
assert(o2 instanceof Object);

// constructor - [Function: P]
assert(o1.constructor === P);

assert(P.prototype.constructor === P);

