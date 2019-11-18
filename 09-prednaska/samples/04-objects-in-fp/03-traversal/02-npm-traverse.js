'use strict';
const traverse = require("traverse");

console.log("Pre-order")

//Pre-order: 
traverse.forEach({ a: 1, b: 2, c: { d: 3, e: 4 } },
  print);

console.log("Post-order")

// Post-order: 
traverse.forEach({ a: 1, b: 2, c: { d: 3, e: 4 } }, function() {
  this.post((n) => print.call(n));
});


function print() {
  console.log(
    "k:", this.key,
    "v:", this.node,
    "o:", this.parent && this.parent.node
  );
};

/*
k: a v: 1 o: { a: 1, b: 2, c: { d: 3, e: 4 } }
k: b v: 2 o: { a: 1, b: 2, c: { d: 3, e: 4 } }
k: d v: 3 o: { d: 3, e: 4 }
k: e v: 4 o: { d: 3, e: 4 }
k: c v: { d: 3, e: 4 } o: { a: 1, b: 2, c: { d: 3, e: 4 } }
*/


let o = { a: 1, b: 2, c: { d: 3, e: 4 } }

const freeze = ({ node }) => Object.freeze(node)
traverse.forEach(o, function() {
  this.post(freeze);
});

o.c.d = 999; //will fail now
