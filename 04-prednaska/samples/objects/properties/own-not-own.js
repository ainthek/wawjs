var assert = require("assert");

var p = {
    a: [],
    b: 'b',
    toString: function() {
        return `it is: ${this.x}`;
    }
};
var o1 = Object.create(p);
o1.x = 'x';

assert(
    o1.toString() === 'it is: x'
);