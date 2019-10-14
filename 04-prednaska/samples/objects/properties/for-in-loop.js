var o = {
    firstName: "John",
    age: 20
};
for (let k in o) {
    console.log(k);
}

/*
firstName
age
*/

var e = Object.create(o);
e.job = "programmer";

for (let k in e) {
    console.log(k);
}
/*
job
firstName
age
*/

for (let k in e) {
    if (e.hasOwnProperty(k)) {
        console.log(k);
    }
}
/*
job
*/




