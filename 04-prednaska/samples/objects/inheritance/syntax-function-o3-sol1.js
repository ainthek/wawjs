var assert = require("assert");
var protoOf = (o) => Object.getPrototypeOf(o);

function P(y) { 
	this.y = y; 
}

P.prototype.a = [];
P.prototype.b = 'b';

function CH() {
	P.call(this);
}
CH.prototype = Object.create(P.prototype);
CH.prototype.constructor = CH;


var o1 = new P('y1');
var o2 = new P('y2');
var o3 = new CH('y3');


//from P.prototype
assert(o3.b === 'b');
assert(o3.a.length === 0);

assert(o3 instanceof CH);
assert(o3 instanceof P);


assert(o3.constructor === CH);


assert('y' in o3);
assert(o3.hasOwnProperty('y'));

assert(!CH.prototype.hasOwnProperty('y'));


