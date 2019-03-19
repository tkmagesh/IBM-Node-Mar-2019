var querystring = require('querystring'),
	calculator = require('./calculator');

module.exports = function(req, res, next){
	var resourceName = req.urlObj.pathname;
 	if ( resourceName === '/calculator'){
		var calcData = req.method === 'GET' ? req.queryData : req.bodyData;
		var op = calcData.op,
			x = parseInt(calcData.x),
			y = parseInt(calcData.y),
			result = calculator[op](x,y);

		res.write(result.toString());
		res.end();
		next();
	} else {
		next()
	}
}