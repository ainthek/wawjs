ako napisat 

a) _read
b) on_readable
c) a on_readable -> read(size) tak aby to chodilo spavne zo vsetkymi streamami ?


_read_async1.js - incorrect (no while) but working (async readable)
_read_async2.js - corect (while) and working (async readable)
_read_sync1.js	- incorrect (no while) NOT working (sync readable)
_read_sync2.js	- correct (while) and working (sync writable)
_read_sync3.js	- ??? (read, read(0)) and working (sync writable)