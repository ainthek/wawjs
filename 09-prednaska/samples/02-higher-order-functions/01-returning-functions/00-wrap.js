// orig funkcia a volania
function sum(a, b, c) { return a + b + c };
let x1 = sum(1, 2, 3);

// transform funkcia
function transf(fn) {
  const fn2 = function(...args) {
    let origRet = fn.apply(this, args);
    return origRet;
  }
  return fn2;
}

// nova funkcia a volanie
const sum2 = transf(sum);
let x2 = sum2(1, 2, 3);


// transform funkcia
function transf(fn, ...transformArgs) {
  // ...
  const fn2 = function(...args) {
    // here we still see ...transformArgs
    // because of closure
    // ...
    let origRet = fn.apply(this, args);
    // ...
    return origRet;
  }
  // ...
  return fn2;
}

console.log(x1,x2)

