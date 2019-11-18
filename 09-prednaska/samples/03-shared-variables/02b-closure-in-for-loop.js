function createJobs() {
  var jobs = [];
  for (var i = 0; i < 3; i++) {
    jobs[i] = (function(_i) {
      return function job() {
        console.log(_i, i);
      }
    })(i);
  }
  return jobs;
}

var jobs = createJobs();

jobs[0]();
jobs[1]();
jobs[2]();

/* 
cvicenie: co toto vypise ? 
a preco ?
*/

