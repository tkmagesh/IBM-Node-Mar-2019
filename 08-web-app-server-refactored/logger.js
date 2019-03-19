var chalk = require('chalk');

module.exports = function(req, res, next){
	var logMessage  = chalk.red(req.method) + '\t' + chalk.blue(req.urlObj.pathname);
	var startTime = new Date();
	res.on('finish', function(){
		logMessage += '\t' + chalk.magenta(res.statusCode);
		var endTime = new Date(),
			delta = endTime - startTime;
		logMessage += '\t' + chalk.bgYellow(delta+'ms');
		console.log(logMessage);
	});
	next();
}