function Limiter(limit) {
  this.limit = limit;
  this.lessThen = function(i) {
    return i < this.limit;
  }
}
let lim = new Limiter(3); //ugly new

lim.lessThen(10) // 10<3 -> false

let a1 = [1, 2, 3, 3, 4].filter(
	// triky z this a bind
	lim.lessThen.bind(lim)
	//(n)=>limiter1.lessThen(n)
);

console.log(a1);