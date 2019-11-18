// A) void function 
// modifies by ref param instead of return
// performance reasons ?
function bcrypt_hash(sha2pass, sha2salt, out) {
  //...
  //...
  out[4 * i + 3] = cdata[i] >>> 24;
  out[4 * i + 2] = cdata[i] >>> 16;
  out[4 * i + 1] = cdata[i] >>> 8;
  out[4 * i + 0] = cdata[i];
};

// B)
stream.on("data", (chunk) => {
  console.log(chunk);
});

// D)
const constants = { LIMIT: 100 }
function below(n) { //impure
  return n < constants.LIMIT;
}
function filterByLimit(nums) {
  return nums.filter(below);
}


