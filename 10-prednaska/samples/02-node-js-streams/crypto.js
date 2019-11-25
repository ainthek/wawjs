const fileName = `${__dirname}/data.txt`;
const fileName2 = `${__dirname}/data.aes192`;

const fs = require("fs");
let input = fs.createReadStream(fileName);
let output = fs.createWriteStream(fileName2);
let output2 = process.stdout;


const { randomBytes } = require('crypto');
const iv = Buffer.from(randomBytes(16));
const secret = "019234578901923457890123";


const crypto = require('crypto');

const cipher = crypto.createCipheriv(
  'aes192', secret, iv
);

input.pipe(cipher).pipe(output);

const decipher = crypto.createDecipheriv(
  'aes192', secret, iv);

input.pipe(cipher).pipe(decipher).pipe(output2);

const hash = crypto.createHash('sha256');

input.pipe(hash).pipe(output2);

const hmac = crypto.createHmac('sha256', secret);
input.pipe(hmac).pipe(output2);