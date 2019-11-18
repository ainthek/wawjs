const assert = require("assert");

var students = [
  { name: "Marcus", grades: [1, 2, 2, 5] },
  { name: "John", grades: [3, 2, 1, 1, 1, 1] },
  { name: "Emilia", grades: [5, 4] }
];

// what is wrong with this code ?
var anonymousStudents = students.map((s) => {
  delete s.name;
  return s;
});

// what is wrong with this code ?
var anonymousStudents = students.map((s) =>
  Object.assign(s, { name: undefined })
);

assert(anonymousStudents !== students,
  "array is not mutated, OK");

assert(anonymousStudents[0].name === undefined,
  "items in new array have no names, OK");

assert(students[0].name === undefined,
  "but also original students have names deleted, BAD");

assert(students[0] === anonymousStudents[0],
  "because both arrays point to same object");


