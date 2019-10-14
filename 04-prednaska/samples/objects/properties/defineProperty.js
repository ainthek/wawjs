let o1 = {};
o1.age = 20;

let o2 = {};
Object.defineProperty(o2, "age", {
  value: 20
});

let o3 = {};
Object.defineProperty(o3, "age", {
  value: 20,
  enumerable: true,
  configurable: false,
  writable: false
});

console.log(o1, o2, o3)
// { age: 20 } {} { age: 20 }

let o4 = { age: 20, name: "John" };
let o5 = Object.defineProperties({}, {
  age: { value: 20, writable: true },
  name: { value: "John", enumerable: true }
});
o5.age = 100;
o5.name = "Marry";

console.log(o5.age, o5.name, o5);
// 100 'John' { name: 'John' }
