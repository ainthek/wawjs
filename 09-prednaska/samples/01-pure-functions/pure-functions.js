//-------------------------
function below(n, limit) {
  return n < limit;
}
//-------------------------
function below(n) {
  var LIMIT = 100;
  return n < LIMIT;
}
//--------------------------
const LIMIT = 100;
function below(n) {
  return n < LIMIT;
}
//--------------------------
const limit = () => 100;
function below(n, limit) {
  return n < limit();
}
//--------------------------
function below(limit) {
  return function(n) {
    return n < limit;
  }
}
below(100)(10);
