var { decycle, retrocycle } = require("json-decycle");

var jsondiffpatch = require("jsondiffpatch");
module.exports = function(prefix, target, methods) {
    var last = {};
    return new Proxy(target, {
        get: function(target, prop, receiver) {
            var orig = Reflect.get(...arguments);
            if (typeof orig === "function" && (methods == null || methods.includes(prop))) {
                return new Proxy(target[prop], { //TODO: optimize, do not create proxy on each call
                    apply: function(fn, thisArg, argumentsList) {
                        let r;
                        try {
                            var current = debugData(target);
                            var delta = jsondiffpatch.diff(last, current);
                            last = current;
                            console.error("---------------------------------------------")
                            console.error(jsondiffpatch.formatters.console.format(delta));
                            console.error(prefix, "-->", prop, printArgs(argumentsList));
                            return r = fn.apply(thisArg, argumentsList);
                        } finally {
                            var current = debugData(target);
                            var delta = jsondiffpatch.diff(last, current);
                            last = current;
                            console.error(jsondiffpatch.formatters.console.format(delta));
                            console.error(prefix, "<--", prop, printResult(r));
                            console.error("---------------------------------------------")
                        }

                    }
                })
            } else {
                return orig;
            }
        }
    });
}

function debugData(stream) {
    var simplified = JSON.stringify(stream, decycle(), 2);
    simplified = JSON.parse(simplified);
    simplified._readableState && delete simplified._readableState.buffer;
    simplified._readableState && delete simplified._readableState.pipes;
    return simplified;
}

function printArgs(args) {
    try {
        return JSON.stringify(Array.prototype.slice.call(args, 0));
    } catch (ex) {
        return "[...]";
    }
}

function printResult(r) {
    try {
        return JSON.stringify(r);
    } catch (ex) {
        return "...";
    }
}