var students = [{
        name: "Marcus",
        grades: [1, 2, 2, 5]
    }, {
        name: "John",
        grades: [3, 2, 1, 1, 1, 1]
    },
    {
        name: "Emilia",
        grades: [5, 4]
    }
];

// Task: find failing student
// [] N -> [] M<N means filter 
const failing = (students) =>
    students.filter(({ grades }) =>
        grades.some(grade => grade === 5)
    )










// Changed requirement: 
// hey, sorry I just want the names, not
// full data
// [] of full -> [] of Strings -> map, add code

const failingNames = (students) =>
    students.filter(student =>
        student.grades.some(grade => grade === 5)
    )
    // CHR: 2018_123
    .map(({ name }) => name);












// Task: average grades for every student
// [] of students -> [] of numbers (means map)
// [] numbers 2 one number (means reduce)
const averageGrades = (students) =>
    students.map(({ grades }) =>
        grades.reduce((x, y) => x + y) / grades.length
    )











// // BUG report, sorry but where are the student names ? 
// // I need student name and average grade 
// var studentsWithAverageGrades = students.map(function mergeGrades(s, i) {
//     return {
//         ...s,
//         averageGrade: this[i] // ugly this
//     }
// }, averageGrades);
// console.log(studentsWithAverageGrades);

// const merge = (array) => (item, i) => ({ ...item, ...array[i] });

// var studentsWithAverageGrades2 = averageGrades
//     .map(g => ({ average: g }))
//     .map(merge(students))
// // BUG report ? Change request : yeah but I do not want to see grades or anything else, just name and average
// // ME: you know what ... ? ;-)
// // .map(({ name, average }) => ({ name, average }));

// console.log(studentsWithAverageGrades2);
// //console.log([{ a: 1 }, { b: 2 }].map(merge([{ average: 1.89 }, { average: 2.1 }])));

// // Task: can we close the year ?
// // do all students have average calculated ?
// var canWeCloseYear = studentsWithAverageGrades2.every(s => "average" in s)
//     // CHR: sorry, and also they need at least 4 marks	
//     &&
//     students.every(s => s.grades.length >= 4);

// console.log(canWeCloseYear);

// // Task: best student ?
// // [] -> {} is reduce 
// // but I already know the customer....
// var sortedStudents = [...studentsWithAverageGrades2]
//     .sort((s1, s2) => s1.average - s2.average); //sort is mutating
// var bestStudent = sortedStudents[0];

// console.log(bestStudent);
// // CHR: sorry can we get full the list of all students and with top 2 marked ?
// var studentsWithTopRanking = sortedStudents.map((s, i) => ({
//     ...s,
//     ...i < 2 && { top: true } //some will have this prop, some will not
// }));

// console.log(studentsWithTopRanking);


function __test() {
    console.log(failing(students));
    console.log(failingNames(students));
    console.log(averageGrades(students));
}

__test();