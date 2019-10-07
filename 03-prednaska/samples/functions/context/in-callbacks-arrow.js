function Limiter(limit) {
    this.limit = limit;
    this.lessThen = function(i) {
        return i < this.limit;
    }
}
let limiter = new Limiter(3);

//X) will not work
let x = [1, 2, 3, 3, 4].filter(limiter.lessThen);

//A) send thisArgs, if API supports it
let a = [1, 2, 3, 3, 4].filter(limiter.lessThen, limiter);

//B) bind, if the API does not support thisArg
let b = [1, 2, 3, 3, 4].filter(limiter.lessThen.bind(limiter));


// C) arrow, define functions as arrows 
// to have fixed this, of definition context
function Limiter1(limit) {
    this.limit = limit;
    this.lessThen = (i) => {
        return i < this.limit;
    }
}
let limiter1 = new Limiter1(3);

// C) arrow as callback, 
// no need to call with thisArgs or bind
// this is fixed by definition place
let c = [1, 2, 3, 3, 4].filter(limiter1.lessThen);

// call context and bind context have no effect
limiter1.lessThen(4) // of course false
limiter1.lessThen.call({limit:10},4) // false
limiter1.lessThen.bind({limit:10})(4) // false


console.log(x, a, b, c);