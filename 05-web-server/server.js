var http = require('http');

var server = http.createServer(function(req /* IncomingMessage */, res /*ServerResponse */){

	/*
	(use req.url)
	if (req is for '/')
		serve index.html
	if (req is for any other resource){
		check if the resource exits  (use fs.existsSync)
		if exists
			serve the resource (use streams)
		else
			serve 404 (res.statusCode = 404 & res.end());	
	}
	
	*/
	res.write('<h1>Welcome to Node.js</h1>');
	res.end();
});

server.listen(8080);

server.on('listening', function(){
	console.log('server listening on 8080!');
});