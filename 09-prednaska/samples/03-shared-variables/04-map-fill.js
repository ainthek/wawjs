function createJobs(nums) {
  return nums.map(function(n, i) {
    return function() {
      console.log(i);
    }
  });
}

// b) 
// const createJobs=(nums)=>nums.map((n,i)=>()=>console.log(i));

// c)
// const job=(i,p1,p2)=>console.log(i);
// const createJobs=(nums)=>nums.map((n,i)=>job.bind(null,i));

var jobs = createJobs([0, 1, 2]);

jobs[0]();
jobs[1]();
jobs[2]();

// princip je rovnaky ako v 02-closure
// teda neni jedna shared 
// ale su 3 closures a 3 variables