var items = [
  { id: "JavaScript", parent: null },
  { id: "Operators", parent: "JavaScript" },
  { id: "Buildins", parent: "JavaScript" },
  { id: "Array", parent: "BuildIns" },
  { id: "Set", parent: "BuildIns" },
  { id: "Functions", parent: "JavaScript" },
  { id: "FuncDec", parent: "Functions" },
  { id: "FuncExpr", parent: "Functions" },
  { id: "ArrowFuncExpr", parent: "Functions" }
];
var arr2obj = function(data, parent) {
  return data
    .filter(d => d.parent === parent)
    .reduce((r, d) => {
      r[d.id] = arr2obj(data, d.id);
      return r;
    }, {});
}
var r = arr2obj(items, null);


console.log(JSON.stringify(r, null, 2));


// var expected = {
//   JavaScript: {
//     Operators: {},
//     Buildins: {
//       Array: {},
//       Set: {}
//     },
//     Functions: {
//       FuncDec: {},
//       FuncExpr: {},
//       ArrowFuncExpr: {}
//     }
//   }
// }