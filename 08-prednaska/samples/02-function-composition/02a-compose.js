// compose - left-to-right
const a = (v) => `a(${v})`
const b = (v) => `b(${v})`
const c = (v) => `c(${v})`

// var horror
var rc = c("test");
var rb = b(rc);
var r0 = a(rb);

// not a composition
// does not return function but value
var r0 = a(b(c("test")));

// manual composition
// returns function
const abc1 = (v) => a(b(c(v)));
let r1 = abc1("test");

// generic composition
const compose = (...fns) =>
  x => fns.reduceRight((v, f) => f(v), x);

const abc2 = compose(a, b, c);
let r2 = abc1("test");



console.log([r0,r1,r2].join("\r\n"))



