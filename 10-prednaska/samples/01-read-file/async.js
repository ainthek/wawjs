// non blocking but buffering
const fs = require("fs");
const file=`${__dirname}/../data/big.file`;

fs.readFile(file, { encoding: "utf8" }, (err, str) => {   
    
    console.log(str);
})