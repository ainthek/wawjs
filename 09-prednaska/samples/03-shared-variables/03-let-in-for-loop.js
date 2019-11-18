function createJobs() {
  var jobs = [];
  for (let i = 0; i < 3; i++) {
    jobs[i] = function job() {
      console.log(i);
    }
  }
  return jobs;
}

var jobs = createJobs();

jobs[0]();
jobs[1]();
jobs[2]();

/* prints:

0
1
2

asi nie to co by sme cakali */

/*
Demonstracia na non shared variables
Podla definicie zo slajdu 45:

Shared:
strictly : visible by more than one function

Not Shared:
strictly: no shared variables – parametrized/bound functions

Premenna LET i, uz nema function scope (funkcie createJobs), 
ale block scope
kazda funkcia ktora vznikla v tom scope
ma pristup k i (lebo closure), 
ale i uz nie je shared

Stav: mame 3 funkcie a 3 nesharovane premenne
*/