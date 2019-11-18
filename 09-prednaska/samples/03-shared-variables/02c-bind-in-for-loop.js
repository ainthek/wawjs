function job(i, p1, p2) { console.log(i, p1, p2) };
// job(1,"a","b");

function createJobs() {
  var jobs = [];
  for (var i = 0; i < 3; i++) {
    jobs[i] = job.bind(this, i);
  }
  return jobs;
}

var jobs = createJobs();

jobs[0]();
jobs[1]();
jobs[2]();

// jobs[2]("a", "b");

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

Design z function job(){print(i)} je ZLY od zaciatku
lebo je to non pure funkcia a aby nam to chodilo robime "triky"

Cisty design je job(i){print(i)} teda funkcia 
ktora si berie VSETKO co potrebuje z parametrov a nie zo scope

v loope, potom 
- nevyrabam nove funkcie zo scoped variable i
- ale vyrabam "bindnute funkcie" (z funkcie job) 
    z prednastavenym parametrom i

*/