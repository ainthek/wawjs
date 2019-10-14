var assert = require("assert");


class P {
    constructor(y) {
        this.y = y;
    }
    get a() {}
    get b() { return 'b'; }
}
class CH extends P {

}




var o1 = new P('y1');
var o2 = new P('y2');
var o3 = new CH('y3');













assert('y' in o3);
assert(o3.hasOwnProperty('y'));