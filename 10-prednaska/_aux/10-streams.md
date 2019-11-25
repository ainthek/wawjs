Streams come to us from the earliest days of unix and have proven themselves over the decades as a dependable way to compose large systems out of small components that do one thing well. In unix, streams are implemented by the shell with | pipes. In node, the built-in stream module is used by the core libraries and can also be used by user-space modules. Similar to unix, the node stream module's primary composition operator is called .pipe() and you get a backpressure mechanism for free to throttle writes for slow consumers.

## References (to review)

- Good (but some strange samples mixing pipe and on-data)
https://medium.freecodecamp.org/node-js-streams-everything-you-need-to-know-c9141306be93


- https://github.com/substack/stream-handbook
- https://community.risingstack.com/the-definitive-guide-to-object-streams-in-node-js/
- 

- Combining streams - https://www.transitions-now.com/2015/11/18/merging-time-series-data-streams-a-node-js-streams-case/

- Backpressuring in Streams 
	- https://www.transitions-now.com/2015/12/06/merging-time-series-data-streams-a-node-js-streams-case-part-2/
	- https://nodejs.org/en/docs/guides/backpressuring-in-streams/
	- https://nodejs.org/api/stream.html#stream_buffering

fs: 	 33 096
sync: 	118 156 
async:  150 972		
pipe:    35 748


Opening files in Node.js considered harmful, https://medium.com/@fun_cuddles/opening-files-in-node-js-considered-harmful-d7de566d499f
https://github.com/Raynos/leaked-handles