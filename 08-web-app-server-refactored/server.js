var http = require('http');

var dataParser = require('./dataParser'),
	serveStatic = require('./serveStatic'),
	serveCalculator = require('./serveCalculator'),
	serveNotFound = require('./serveNotFound'),
	app = require('./app');

app.use(dataParser);
app.use(serveStatic);
app.use(serveCalculator);
app.use(serveNotFound);

var server = http.createServer(app);

server.listen(8080);

server.on('listening', function(){
	console.log('server listening on 8080!');
});