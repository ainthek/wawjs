const { series, waterfall, seq, applyEach } = require("async");
const done = (err, data) => {
    if (err) {
        console.error("Error:", err, "Data:", data);
    } else {
        console.log("Data:", data);
    }
};
// sequential tasks, results independent 
series([
    (cb) => /*...*/ cb(null, 1),
    (cb) => /*...*/ cb(null, 2),
    (cb) => /*...*/ cb(null, 3),
], done);

// sequential tasks, results dependent 
waterfall([
    (cb) => /*...*/ cb(null, 1),
    (d, cb) => /*...*/ cb(null, d + 2),
    (d, cb) => /*...*/ cb(null, d + 3),
], done);

// functional pipe for async
const sequence = seq(
    (d, cb) => /*...*/ cb(null, d + 1),
    (d, cb) => /*...*/ cb(null, d + 2),
    (d, cb) => /*...*/ cb(null, d + 3),
);
sequence(0, done);

// usefull for methods (boundable this)
const o = {
    d: 1,
    c: [],
    f1: function(d, cb) { /*...*/ cb(null, this.d * d + 1) },
    f2: function(d, cb) { /*...*/ cb(null, this.d * d + 2) },
    f3: function(d, cb) { /*...*/ cb(null, this.d * d + 3) },
}
seq(o.f1, o.f2, o.f3).bind(o)(0, done);
seq(o.f1, o.f2, o.f3).bind({ d: 2 })(1, done);

// parralel, same signatures
// TODO: verify with async impls 
//		data seems to have non failed 
// 		so far executed results
// 		even if one fails
applyEach([
    (d, cb) => /*...*/ cb(null, d + 1),
    (d, cb) => /*...*/ cb(null, d + 2),
    //(d, cb) => /*...*/ cb(2, d + 2),
    (d, cb) => /*...*/ cb(null, d + 3),
], 0, done);