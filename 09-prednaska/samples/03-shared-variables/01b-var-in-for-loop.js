function createJobs() {
  var jobs = [];
  var i; 						// 1.) shared lebo var scope
  for (i = 0; i < 3; i++) { 	// 3.) mutated
    jobs[i] = function job() {
      console.log(i); 			// 2.) visible, scope
    }
  }
  return jobs;
}

var jobs = createJobs();

jobs[0](); 						// 4.) i je accessible (lebo closure) 
jobs[1]();
jobs[2]();

/* 
								// 5.) "unexpected"

3
3
3

*/
