var fs = require('fs');

var stream = fs.createReadStream('./sample1.txt', { encoding : 'utf8'});

/* events -> open, data, end, close, error */

stream.on('data', function(chunk){
	console.log(chunk);
});

stream.on('end', function(){
	console.log('Thats all folks');
});

stream.on('error', function(err){
	console.log('something went wrong');
});