const students = Array.from({ length: 10e6 },
  (_, i) => ({ name: `student${i}` })
);


// can memoize only 1 param functions
function memoize(fn) {
  const memo = new Map();

  const memoized = function(arg) {
    const key = arg;
    if (memo.has(key)) { return memo.get(key) }

    let origRet = fn.call(this, arg);

    memo.set(key, origRet);
    return origRet;
  }
  return memoized;
}

// orig funct and call
const findStudent = (name) =>
  students.find((s) => s.name === name);

let s1 = findStudent("student1000000");
let s3 = findStudent("student1000000");

// new funct and call
const findStudent2 = memoize(findStudent);

let ss1 = findStudent2("student1000000");
let ss3 = findStudent2("student1000000");

// how faster (naive measure)
const measure = require("./03-measure.js");
const findStudentM = measure(findStudent);
const findStudentMM = measure(memoize(findStudent));

//non memoised
findStudentM("student999999")
findStudentM("student999999")
findStudentM("student999999")

//memoized"
findStudentMM("student999999")
findStudentMM("student999999")
findStudentMM("student999999")

/*

$ node 02-higher-order-functions/01-returning-functions/02-memoizer.js
Execution time (hr): 0s 89.678275ms
Execution time (hr): 0s 19.953699ms
Execution time (hr): 0s 16.645149ms
Execution time (hr): 0s 17.606519ms
Execution time (hr): 0s 0.005991ms
Execution time (hr): 0s 0.000937ms

*/

console.log(findStudentMM.toString());
