const asyncMath = async (n) => n * 100;

// bezny koder je schopny 
// toto kludne napisat
// lebo mu dal niekto "await"
// co je zle na tom kode ?

async function calc(nums) {

  const out = [];
  for (let i = 0; i < nums.length; i++) {
    const c = await asyncMath(nums[i]) //!!!
    out.push(c);
  }
  const sum = out.reduce((sum, n) => sum += n);
  return sum;
}

(async () => {

  const sum = await calc([1, 2, 3])
  console.log(sum);

})();