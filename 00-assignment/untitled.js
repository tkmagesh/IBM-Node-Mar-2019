var http = require('http');

var server = http.createServer();

server.listen(8080);

server.on('listening', function(){
	console.log('server listening on 8080!');
});