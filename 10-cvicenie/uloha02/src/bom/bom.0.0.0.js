// version 0.0.0
// noop Transform

const { Transform } = require("stream");

module.exports = {
  // 1. hide stream creation details 
  // behind creational function
  add: function() {
    return new AddBom();
  }

}
// 2. implement noop operation
class AddBom extends Transform {

  _transform(chunk, enc, cb) {

    this.push(chunk);
    cb();
  
  }
}



