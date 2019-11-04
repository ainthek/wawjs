// A returning value
async function a() {
  return 10;
}
a() // promise resolved with value
  .then(console.log, console.error);

// B throwing
async function b() {
  throw new Error("boom");
}
b() // promise rejected with thrown
  .then(console.log, console.error);

// C returning promise that will be resolved
async function c() {
  return Promise.resolve(10);
}
c() // promise resolved with ret promise value
  .then(console.log, console.error);

// D returning promise that will be rejected
async function d() {
  return Promise.reject(new Error("boom"));
}
d() // promise rehected with ret promise err
  .then(console.log, console.error);


