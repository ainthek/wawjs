const assert = require("assert");

var students = [
  { name: "Marcus", grades: [1, 2, 2, 5] },
  { name: "John", grades: [3, 2, 1, 1, 1, 1] },
  { name: "Emilia", grades: [5, 4] }
];

// non mutation map
var fiitStudents = students.map((s) => ({
  ...s,
  school: "FIIT"
}));

// non mutation map
var fiitStudents = students.map((s) =>
  Object.assign({}, s, { school: "FIIT" })
);

assert(fiitStudents !== students,
  "array is not mutated, OK");

assert(fiitStudents[0].school === "FIIT",
  "items in new array have school, OK");

assert(students[0].school === undefined,
  "original students do not have school, OK");

assert(students[0] !== fiitStudents[0],
  "arrays do not point to same object, OK");


