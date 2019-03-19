var path = require('path'),
	fs = require('fs');

var staticExtns = ['.html', '.css', '.js', '.png', '.ico', '.xml', '.json', '.txt', '.jpg'];

function isStatic(resourceName){
	var resourceExtn = path.extname(resourceName);
	return staticExtns.indexOf(resourceExtn) >= 0;
}

module.exports = function(req, res){
	var resourceName = req.urlObj.pathname === '/' ? 'index.html' : req.urlObj.pathname;
	if (isStatic(resourceName)){
		var	resourceFullName = path.join(__dirname, resourceName);
	
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
	} 
}