var http = require('http');
var fs = require('fs');
var server = http.createServer();
server.on('request', function(request, response) {
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    if (request.method === 'GET' && request.url === '/loremipsum') {
        fs.readFile('./index.html', 'utf-8', function(err, data) {
            response.write(data);
            response.end();
        });
    } else {
        response.statusCode = 404;
        response.write('<img src="https://fastwhitecat.com/wp-content/uploads/2018/02/b%C5%82%C4%99dy-404-seo.jpg">');
        response.end();
    }
});
server.listen(8080);