(async () => {
  
  let x = 0;

  async function test() {
    x = x + await 2;
    console.log(x);
  }

  await test();
  x = x + 1;
  console.log(x);

})();

// from: https://www.youtube.com/watch?v=bfxglBVSNDI
// what will this programm print ?