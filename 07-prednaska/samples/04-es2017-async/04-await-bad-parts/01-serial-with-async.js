const data1 = async () => 1;
const data2 = async () => 2;
const data3 = async () => 3;

// bezny koder je schopny 
// toto kludne napisat
// lebo mu dal niekto "await"
// co je zle na tom kode ?

async function calc() {

  let r1 = await data1();
  let r2 = await data2();
  let r3 = await data3();

  return r1 + r2 + r3;
}

(async () => {

  const r = await calc();
  console.log(r);

})();