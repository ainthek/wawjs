//'use strict';
let underLimit=[1, 2, 3, 3, 4].filter(lessThen3) //-> [1,2]

function lessThen3(i) {
  return i < 3;
}


function Limiter(limit) {
  this.limit = limit;
  this.lessThen = function(i) {
    return i < this.limit;
  }
};


let limiter = new Limiter(3);

[1, 2, 3, 3, 4].filter(limiter.lessThen);
//-> fail in strict or []
[1, 2, 3, 3, 4].filter(limiter.lessThen, limiter);
//-> [1,2]
[1, 2, 3, 3, 4].filter((n) => limiter.lessThen(n));
//-> [1,2]
let lessThen=limiter.lessThen.bind(limiter);
[1, 2, 3, 3, 4].filter(lessThen);
//-> [1,2]