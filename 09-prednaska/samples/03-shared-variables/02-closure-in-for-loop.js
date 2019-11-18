function createJobs() {
  var jobs = [];
  for (var i = 0; i < 3; i++) {
    jobs[i] = (function(_i) {
      return function job() {
        console.log(_i);
      }
    })(i);
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
*/

/*
Demonstracia na shared variables.
Podla definicie zo slajdu 45:

Shared:
strictly : visible by more than one function

Not Shared:
strictly: no shared variables – parametrized/bound functions

toto je riesenie (klasicke) pomocou parametrized function 
chceme dosiahnut aby 3 funkcie nezdielali jednu premennu
ale kazda zdielala svoji premennu.

Dosiahneme to tym ze shared i posledme do IIFE ako parameter
a vzniknita funkcia job, vidi "svoje _i z parametra" 
a nie sharnute/spolocne i zo scopu createJob

mame 3 funkcie a 3 nesharovane premenne
*/

/* bezne to piseme samozrejme takto, nie cez _i)
function createJobs() {
  var jobs = [];
  for (var i = 0; i < 3; i++) {
    jobs[i] = (function(i) {
      return function job() {
        console.log(i);
      }
    })(i);
  }
  return jobs;
}
*/