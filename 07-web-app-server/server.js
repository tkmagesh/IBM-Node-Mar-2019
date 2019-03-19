var http = require('http'),
	fs = require('fs'),
	path = require('path'),
	url = require('url'),
	querystring = require('querystring'),
	calculator = require('./calculator');

var staticExtns = ['.html', '.css', '.js', '.png', '.ico', '.xml', '.json', '.txt', '.jpg'];

function isStatic(resourceName){
	var resourceExtn = path.extname(resourceName);
	return staticExtns.indexOf(resourceExtn) >= 0;
}

var server = http.createServer(function(req, res){
	
	console.log(req.url);

	var resource = req.url === '/' ? 'index.html' : req.url,
		urlObj = url.parse(resource),
	 	resourceName = urlObj.pathname;

	if (isStatic(resourceName)){
		var	resourceFullName = path.join(__dirname, resourceName);
	
		if (!fs.existsSync(resourceFullName)){
			res.statusCode = 404;
			res.end();
			return;
		}
		var stream = fs.createReadStream(resourceFullName);
		stream.pipe(res);
	} else if ( resourceName === '/calculator'){
		var queryData = querystring.parse(urlObj.query);
		var op = queryData.op,
			x = parseInt(queryData.x),
			y = parseInt(queryData.y),
			result = calculator[op](x,y);

		res.write(result.toString());
		res.end();
	} else {
		res.statusCode = 404;
		res.end();
	}
});

server.listen(8080);

server.on('listening', function(){
	console.log('server listening on 8080!');
});