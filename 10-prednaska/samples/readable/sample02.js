var SequenceStream = require("./SequenceStream");
var source = new SequenceStream();
process.stdout.on("error", function(err) {
	// REVIEW: is this ok ?
    if (err.errno === 'EPIPE') err = null;
    else throw err;
});
source.pipe(process.stdout);


//OK: 	
//	node sample01.js | cat -n
//OK :  
//	node sample01.js | head -n 1 
