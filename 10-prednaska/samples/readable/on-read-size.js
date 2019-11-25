// (echo abc; sleep 1; echo def; sleep 1; echo ghi) | node on-read-size.js
var c = 1;
process.stdin.on('readable', function() {
    var buf = this.read();
    console.dir(c++);
    console.dir(buf);
});