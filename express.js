var express = require('express');

var server = express();

server.get('/', function(req, res) {
    res.send('Index');
});

server.get('/hello', function(req, res) {
    res.send('Hello Node');
});

server.listen(3000, function() {
    console.log('Express Server started..');
});