let input = [2, 3, 4];
const f1 = (x) => x * 2;
const f2 = (x) => x + 5;
const f3 = (x) => x / 2;

// 1 - 3 * O(n)
let out1 = input.map(f1).map(f2).map(f3);

// 2 - inline, anonymous, O(n)
let out2 = input.map((item) => f3(f2(f1(item))));

// 3 - named, O(n), do "not use made up names"
const f123 = (item) => f3(f2(f1(item)));
let out3 = input.map(f123);

// 4 - "generic" compose
let out4 = input.map(compose(f3, f2, f1));

// 5 - override of array.map syntax
let out5 = input.map([f3, f2, f1]);


// 4.1, compose implementation - functional reduce
const compose = (...funs) => item =>
  funs.reduceRight((itemX, f) => f(itemX), item);

let out42 = input.map(compose2(f3, f2, f1));

// 4.2, compose implementation - for cycle
function compose2(...funs) {
  return function(...args) {
    let i = funs.length - 1;
    let x = funs[i](...args);
    for (--i; i >= 0; --i) {
      x = funs[i](x);
    }
    return x;
  }
}


console.log(out1);
console.log(out2);
console.log(out3);
console.log(out4);
console.log(out42);