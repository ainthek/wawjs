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
// var [], for-for-push, []
const failing = (students) => {
    var failingStudents = [];
    for (var i = 0; i < students.length; i++) {
        var grades = students[i].grades;
        for (var j = 0; j < grades.length; j++) {
            if (grades[j] === 5) {
                failingStudents.push(students[i]);
            }
        }
    }
    return failingStudents;
}


// Changed requirement: 
// hey, sorry I just want the names, not
// full data
// for, change code

const failingNames = (students) => {
    var failingStudents = [];
    for (var i = 0; i < students.length; i++) {
        var grades = students[i].grades;
        for (var j = 0; j < grades.length; j++) {
            if (grades[j] === 5) {
                //failingStudents.push(students[i]);
                // CHR: 2018_123
                failingStudents.push(students[i].name);
            }
        }
    }
    return failingStudents;
}




// Task: average grades for every student
// 
// 
const averageGrades = (students) => {
    const sum = (arr) => {
        var sum = 0;
        for (var i = 0; i < arr.length; sum += arr[i++]);
        return sum;
    }
    var ag = [];
    for (var i = 0; i < students.length; i++) {
        var grades = students[i].grades;
        ag[i] = sum(grades) / grades.length;
    }
    return ag;
}




// console.log(averageGrades);

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

// var studentsWithTopRanking2 = sortedStudents.map(top(2));
// function top2(){

// }

// console.log(studentsWithTopRanking);


function __test() {
    console.log(failing(students));
    console.log(failingNames(students));
    console.log(averageGrades(students));
}

__test();