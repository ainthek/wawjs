var SequenceStream = require("./SequenceStream");
var source = new SequenceStream();
var dest = process.stdout;


var loggingProxy = require("../lib/loggingProxy");
var logingSource = loggingProxy("R", source);
var loginDestination = loggingProxy("W", dest);

logingSource.pipe(loginDestination);