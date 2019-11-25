const { LineStream } = require('byline');
const toJson = require("./toJson.js");

/*

# node CLI in middle of bash

	du -a |
	node samples/02-node-js-streams/process.js |
	grep 'node_modules'

# produces streaming json so can be piped to other tools

	du -a | node 2019-javascript/10-prednaska/samples/02-node-js-streams/process.js |\
	grep 'node_modules' |\
	jsontool -ga size
*/

process.stdin
    .pipe(new LineStream({ encoding: "utf8" }))
    .pipe(toJson)
    .pipe(process.stdout);
    