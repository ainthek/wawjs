var assert = require("assert");
var protoOf = (o) => Object.getPrototypeOf(o);

function P(y) {this.y = y;}
    
P.prototype.a = [];
P.prototype.b = 'b';

var o2 = new P('y2');

function CH() {
	// ???
	// ???
}
// ???

var o3 = new CH();

