var assert = require("assert");
var protoOf = (o) => Object.getPrototypeOf(o);

var p = {};
p.a = [];
p.b = 'b';

var o1 = Object.create(p);
o1.x = 'x';

var o2 = Object.create(p);
o2.y = 'y';

assert(protoOf(o1) === p);
assert(protoOf(o2) === p);

assert(protoOf(protoOf(o1)) === Object.prototype);
assert(protoOf(protoOf(protoOf(o1))) === null);


assert(Object.getPrototypeOf(o1) === p);
assert(Object.getPrototypeOf(o2) === p);

assert(o1 instanceof Object);
assert(o2 instanceof Object);

