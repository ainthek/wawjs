//;-)))
Array.prototype.filter = (function(fn) {
  return function(...args) {
    const r = fn.apply(this, args);
    console.log(r);
    return r;
  }
})(Array.prototype.filter);

const grades = [1, 5, 3, 5, 4]

grades.filter((g) => 5 === g)

grades.filter((g) => Object.is(5, g))

var is = (c) => (v) => Object.is(c, v)
grades.filter(is(5));

var is = (c) => Object.is.bind(null, c)
grades.filter(is(5))

var is5 = Object.is.bind(null, 5);
grades.filter(is5)

var is5 = partial(Object.is, 5);
grades.filter(is5)


function partial(fn, ...args) {
  return fn.bind(null, ...args)
}