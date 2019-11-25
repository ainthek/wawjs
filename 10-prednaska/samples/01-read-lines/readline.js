// readline api
const file = `${__dirname}/../data/big.file`;

const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
    input: fs.createReadStream(file),
    crlfDelay: Infinity
});

rl.once('line', (line) => {
	
});
rl.on('close', () => {

});