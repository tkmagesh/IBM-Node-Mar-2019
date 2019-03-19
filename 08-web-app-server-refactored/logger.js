module.exports = function(req, res, next){
	var logMessage  = req.method + '\t' + req.urlObj.pathname;
	var startTime = new Date();
	res.on('finish', function(){
		logMessage += '\t' + res.statusCode;
		var endTime = new Date(),
			delta = endTime - startTime;
		logMessage += '\t' + delta+'ms';
		console.log(logMessage);
	});
	next();
}