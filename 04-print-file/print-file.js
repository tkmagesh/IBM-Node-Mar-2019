var fs = require('fs');

fs.readFile('./sample.txt', { encoding : 'utf8'}, function(err, fileContents){
	if (err){
		console.log('Something went wrong!');
		return;
	}
	console.log(fileContents);
	console.log('Thats all folks!');
});

