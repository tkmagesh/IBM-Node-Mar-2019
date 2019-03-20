var fs = require('fs');

var dataFile = require('path').join(__dirname, 'tasks.json');

//Callback based api
/*function getData(callback){
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
}*/

//Promise based api
function getData(){
	var p = new Promise(function(resolve, reject){
		fs.readFile(dataFile, { enconding : 'utf8'}, function(err, fileContents){
			if (err)
				return reject(err);
			var taskList = JSON.parse(fileContents);
			return resolve(taskList);
		});
	});
	return p;

}

function saveData(taskList){
	return new Promise(function(resolve, reject){
		fs.writeFile(dataFile, JSON.stringify(taskList), function(err){
			if (err){
				return reject(err);
			}
			resolve({});
		});	
	});
}

module.exports = {
	getData, saveData
};