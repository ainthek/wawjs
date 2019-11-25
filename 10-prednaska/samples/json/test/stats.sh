#!/bin/bash

current="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd -P )"
cd "$current"

# gtime -v node ../01-require.js < ../../data/large.json 2> ./01-require.txt
# gtime -v node ../02-on-data.js < ../../data/large.json 2> ./02-on-data.txt
# gtime -v node ../03-on-readable.js < ../../data/large.json 2> ./03-on-readable.txt
# gtime -v node ../04-todo.js < ../../data/large.json 2> ./04-todo.txt
gtime -v node ../04a-writable.js < ../../data/large.json 2> ./04a-writable.txt 

## ls -sk 2018-javascript/prednasky/07-streams/samples/data/large.json
## 185332 2018-javascript/prednasky/07-streams/samples/data/large.json

# 2018-javascript/prednasky/07-streams/samples/json/test/01-require.txt:	
# 	Maximum resident set size (kbytes): 795248 
# 2018-javascript/prednasky/07-streams/samples/json/test/02-on-data.txt:	
# 	Maximum resident set size (kbytes): 1176776
# 2018-javascript/prednasky/07-streams/samples/json/test/03-on-readable.txt:	
# 	Maximum resident set size (kbytes): 1176596

# 
# 03 - full					   1176596						
# 03 - bez JSOnParse - 			212564
# 03 - aj bez buff 	 -  		121984 

# 03 - stdinbuffre               65536
# 03 - moje buffre				 90580
# 03 - object					964032 
# file size                     185332

# TODO: nejako to nesedi

