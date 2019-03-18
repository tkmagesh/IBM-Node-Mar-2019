var fs = require('fs');

var stream = fs.createReadStream('./sample.txt', { encoding : 'utf8'});

/* events -> open, data, end, close, error */

/*stream.on('data', function(chunk){
	console.log(chunk);
});*/

stream.pipe(process.stdout);

stream.on('end', function(){
	console.log('Thats all folks');
});

stream.on('end', function(){
	console.log('Thats all it is folks');
});

stream.on('end', function(){
	console.log('Thats all it is folks, really!!');
});

stream.on('error', function(err){
	console.log('something went wrong');
});