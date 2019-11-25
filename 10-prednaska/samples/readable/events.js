const debuglog = require('util').debuglog("stream.events");


var SequenceStream = require("./SequenceStream");
var stream = new SequenceStream();
debuglog("readableFlowing:",stream.readableFlowing);

[
    'close',
    'data',
    'end',
    'error',
    'readable'
].forEach((event) => stream.on(event, function() {
    console.log(event);
}))