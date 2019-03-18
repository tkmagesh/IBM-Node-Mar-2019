var http = require('http'),
	fs = require('fs'),
	path = require('path'),
	url = require('url')

var server = http.createServer(function(req /* IncomingMessage */, res /*ServerResponse */){
	
	console.log(req.url);

	var resource = req.url === '/' ? 'index.html' : req.url,
		urlObj = url.parse(resource),
	 	resourceName = urlObj.pathname,
		resourceFullName = path.join(__dirname, resourceName);
		
	if (!fs.existsSync(resourceFullName)){
		res.statusCode = 404;
		res.end();
		return;
	}
	var stream = fs.createReadStream(resourceFullName);
	//stream.pipe(res);
	stream.on('data', function(chunk){
		res.write(chunk);
	});

	stream.on('end', function(){
		res.end();
	});
});

server.listen(8080);

server.on('listening', function(){
	console.log('server listening on 8080!');
});