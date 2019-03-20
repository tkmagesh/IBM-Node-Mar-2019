var fs = require('fs');

var dataFile = require('path').join(__dirname, 'tasks.json');
function getData(callback){
	fs.readFile(dataFile, { enconding : 'utf8'}, function(err, fileContents){
		if (err)
			return callback(err);
		var taskList = JSON.parse(fileContents);
		return callback(null, taskList);
	});

}

function saveData(taskList, callback){
	fs.writeFile(dataFile, JSON.stringify(taskList), function(err){
		return callback(err);
	});
}

module.exports = {
	getData, saveData
};