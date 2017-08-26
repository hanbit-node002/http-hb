var express = require('express');
var morgan = require('morgan');

var server = express();

server.use(morgan(':method :url'));
server.use(express.static(__dirname + '/webRoot'));

server.get('/', function(req, res) {
    res.send('Index');
});

server.get('/hello', function(req, res) {
    res.send('Hello Node');
});

server.get('/user/:name', function(req, res) {
    var name = req.params.name;

    res.send('Hello ' + name);
});

server.listen(3000, function() {
    console.log('Express Server started..');
});