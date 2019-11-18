// BAD:
const uniqueName = (arr) => {
  return [...new Set(arr.map((a) => a.name))];
}
const uniqueAge = (arr) => {
  return [...new Set(arr.map((a) => a.age))];
}

// BETTER: value as param
const unique = (arr, key) => {
  return [...new Set(arr.map((a) => a[key]))];
}

// EVEN BETTER: function as param
const unique = (arr, key) => {
  const hash = typeof key === "string" ?
    o => o[key] :
    key;
  return [...new Set(arr.map(hash))];
}

// EVEN BETTER: function as param + default
const unique = (arr, key = (x) => x) => {
  const hash = typeof key === "string" ?
    (item) => item[key] : key
  return [...new Set(arr.map(hash))];
}

let names = uniqueName(students);
let ages = uniqueAges(students);

let names = unique(students, "name");
let ages = unique(students, "ages");

let names = unique(students, "name");
let ages = unique(students, (({ age, gender }) =>
	JSON.stringify({ age, gender }
));

let ages = unique([1, 2, 2]);

