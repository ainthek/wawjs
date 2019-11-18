function createJobs() {
  var jobs = [];
  for (var i = 0; i < 3; i++) {
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

3
3
3

asi nie to co by sme cakali */

/*
Demonstracia na shared variables.
Podla definicie zo slajdu 45:

Shared:
strictly : visible by more than one function

Not Shared:
strictly: no shared variables – parametrized/bound functions

Premenna VAR i, ma function scope (funkcie createJobs)
kazda funkcia ktora vznikla v tom scope
ma pristup k shared i (lebo closure)
kazda iteracia zmutuje i
kazda funkcia ma potom po zavolani 
k dispozicii zmutovane i

Stav: mame 3 funkcie job, sharujuce JEDNU premennu
*/