// SAMPLE: non blocking non buffering, streaming
const fs = require("fs");
const file = `${__dirname}/data/big.file`;

fs.createReadStream(file, { encoding: "utf8" })
	// with streams we are forced 
	// to extract and name the operations
	.pipe(split)
	.pipe(prefix)
    .pipe(process.stdout);
