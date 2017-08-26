var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var ejs = require('ejs');

var contentTypes = require('./content-types');

var server = http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
    var extname = path.extname(pathname);

    if (pathname === '/') {
        pathname = '/index.html';   // default page, welcome page
        /*res.writeHead(302, {
            Location: '/index.html'
        });
        res.end();
        return;*/
    }

    var contentType = contentTypes[extname];
    var filePath = 'webRoot' + pathname;

    fs.readFile(filePath, 'utf-8', function(err, data) {
        if (err) {
            res.writeHead(404, {
                'Content-Type': 'text/html; charset=utf8'
            });
            res.end('<h1>Not Found</h1>');
            return;
        }

        res.writeHead(200, {
            'Content-Type': contentType
        });

        if (extname === '.ejs') {
            data = ejs.render(data, {
                name: '노드'
            });
        }

        res.end(data);
    });
});

server.listen(52273, function() {
    console.log('Server started..');
});