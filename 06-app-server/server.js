var http = require('http'),
	url = require('url'),
	querystring = require('querystring'),
	calculator = require('./calculator');

var server = http.createServer(function(req, res,){
	var urlObj = url.parse(req.url);
	if (urlObj.pathname !== '/calculator'){
		res.statusCode = 404;
		res.end();
		return;
	}
	var queryData = querystring.parse(urlObj.query);
	var op = queryData.op,
		x = parseInt(queryData.x),
		y = parseInt(queryData.y),
		result = calculator[op](x,y);

	res.write(result.toString());
	res.end();
});

server.listen(8085);

server.on('listening', function(){
	console.log('server listening on 8085');
});

