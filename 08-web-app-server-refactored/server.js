var http = require('http');

var dataParser = require('./dataParser'),
	serveStatic = require('./serveStatic'),
	serveCalculator = require('./serveCalculator'),
	serveNotFound = require('./serveNotFound');

var server = http.createServer(function(req, res){
	dataParser(req);
	console.log(req.method + '\t' + req.url);
	serveStatic(req, res);
	serveCalculator(req, res);
	serveNotFound(res);
});

server.listen(8080);

server.on('listening', function(){
	console.log('server listening on 8080!');
});