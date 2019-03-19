var http = require('http'),
	path = require('path');

var dataParser = require('./dataParser'),
	serveStatic = require('./serveStatic'),
	serveCalculator = require('./serveCalculator'),
	serveNotFound = require('./serveNotFound'),
	logger = require('./logger'),
	app = require('./app');

app.use(dataParser);
app.use(logger);
app.use(serveStatic(path.join(__dirname, 'public')));
app.use(serveCalculator);
app.use(serveNotFound);

var server = http.createServer(app);

server.listen(8080);

server.on('listening', function(){
	console.log('server listening on 8080!');
});