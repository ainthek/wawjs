const assert = require("assert");

var students = [
  { name: "Marcus", surname: "M", grades: [1, 2, ], rank: 1 },
  { name: "John", surname: "Doe", grades: [3, 2, ], rank: 2 },
  { name: "Emilia", surname: "Black", grades: [5, 4], rank: 2 }
];

// blacklisting
var anonymousStudents = students.map((s) => {
  let { name, surname, ...allowed } = s;
  return { ...allowed };
});

// whitelisting
var namesOnly = students.map((s) => {
  let { name, surname } = s;
  return { name, surname };
});

// both can be done as part of parameter destructuring

// blacklist by param destructuring
var anonymousStudents = students.map(
  ({ name, surname, ...allowed }) => ({ ...allowed })
);
var namesOnly = students.map(
  ({ name, surname }) => ({ name, surname })
);


console.log(anonymousStudents)
console.log(namesOnly)