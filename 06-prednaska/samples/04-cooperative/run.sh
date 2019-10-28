#!/bin/bash



cd "${0%/*}"
node bad/server.js &
open http://localhost:8080 &

node good/server.js &
open http://localhost:8081 &