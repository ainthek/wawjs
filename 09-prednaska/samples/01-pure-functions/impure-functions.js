//-------------------------
function below(n, options) {
  return n < options.limit;
}
//----------------------------------------
var LIMIT = 100;
function below(n) {
  return n < LIMIT;
}
//----------------------------------------
const constants = { LIMIT: 100 }
function below(n) {
  return n < constants.LIMIT;
}
//----------------------------------------
let limit = () => 100;
function below(n, limit) {
  return n < limit();
}
//----------------------------------------













