// TODO: rewrite to real performance test !!!
// resualts in node v 6 ... v.10 vary 
// reduce performance is now same as for cycle

var assert = require("assert");

describe("function compositions", function() {

  var input = Array(1000000).fill(1);

  const f1 = (x) => x * 2;
  const f2 = (x) => x + 5;
  const f3 = (x) => x / 2;

  it("map(f1).map(f2).map(f3)", function() {
    // PERF: 3*O(n)
    var output = input.map(f1).map(f2).map(f3);
    
  });

  it("ad-hoc inline - map(()=f3(f2(f1())))", function() {
    // PERF: O(n)
    var output = input.map((item) => f3(f2(f1(item))));
    
  });

  it("ad-hoc extracted - map(f123))", function() {
    // only if the name does make sense, else inline
    const f123 = (item) => f3(f2(f1(item)));
    // PERF: O(n)

    var output = input.map(f123);
    
  });
  //--------------------------------------------------
  it("generic compose (POC) - map(compose([f1,f2,f3]))", function() {

    var output = input.map(compose([f3, f2, f1]));

    // draft of generic function
    function compose(funs) {
      // functs=[f3,f2,f1];
      return function(item, i, items) {
        var item1 = funs[2](item, i, items /*FIXME*/ )
        var item2 = funs[1](item1, i, items);
        var item3 = funs[0](item2, i, items /*FIXME*/ );
        return item3;
      }
    }
    
  });
  it("generic compose functional - map(compose(f1,f2,f3))", function() {
    const compose = (...funs) => item =>
      funs.reduceRight((itemX, f) =>
        f(itemX), item)

    var output = input.map(compose(f3, f2, f1));
    
  });
  it("generic compose (old good for cycle) - map(df.compose(f1,f2,f3))", function() {

    var output = input.map(compose(f3, f2, f1));
    function compose(...funs) {
      return function(x) {
        var i = funs.length - 1,
          x = funs[i](x);
        for (--i; i >= 0; --i) {
          x = funs[i](x);
        }
        return x;
      }
    };
    
  });
});