var SequenceStream = require("./SequenceStream");
var source = new SequenceStream();
source.pipe(process.stdout);

//OK: 	
//	node sample01.js | cat -n
//Err (EPIPE):  https://github.com/nodejs/node/issues/947
//	node sample01.js | head -n 1 