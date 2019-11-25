var memwatch = require('node-memwatch');
memwatch.on('stats', function(stats) {
    console.error(stats);
});