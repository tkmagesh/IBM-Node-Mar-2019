var taskList = [
	{id : 1, name : 'Learn Node.js'},
	{id : 2, name : 'Explore JavaScript'},
	{id : 3, name : 'Make sure to cast your vote'},
];

var taskDb = require('../db/taskDB.js');

//callback based api
/*function getAll(callback){
	taskDb.getData(function(err, taskList){
		callback(err, taskList);
	});
}

function addNew(taskData, callback){
	taskDb.getData(function(err, taskList){
		if (err){
			return callback(err);
		}
		var newTaskId = taskList.reduce(function(result, task){
			return result > task.id ? result : task.id;
		}, 0) + 1,
		newTask = {
			id : newTaskId,
			name : taskData.name
		};
		taskList.push(newTask);
		taskDb.saveData(taskList, function(err){
			if (err){
				return callback(err)
			}
			callback(null, newTask);
		});
		
	});
	
}

function update(taskIdToUpdate, taskDataToUpate, callback){
	taskDb.getData(function(err, taskList){
		if (err){
			return callback(err);
		}
		var taskToReplace = taskList.find(function(task){
			return task.id === taskIdToUpdate;
		});
		if (!taskToReplace){
			return callback(new Error("Task not found"));
		}
		taskList = taskList.map(function(task){
			return task.id === taskIdToUpdate ? taskDataToUpate : task;
		});
		taskDb.saveData(taskList, function(err){
			if (err){
				return callback(err);
			}
			callback(null, taskDataToUpate);
		});
	});
	
	return taskDataToUpate;
}

function remove(taskIdToDelete, callback){
	taskDb.getData(function(err, taskList){
		if (err){
			return callback(err);
		}
		var taskToRemove = taskList.find(function(task){
			return task.id === taskIdToDelete;
		});
		if (!taskToRemove){
			return callback(new Error("Task not found"));
		}
		taskList = taskList.filter(function(task){
			return task.id !== taskIdToDelete;
		});
		taskDb.saveData(taskList, function(err){
			callback(err)
		});
	});
}*/


//Promise based api

function getAll(){
	return taskDb.getData();
}

function addNew(taskData){
	return taskDb
		.getData()
		.then(function(taskList){
			var newTaskId = taskList.reduce(function(result, task){
				return result > task.id ? result : task.id;
			}, 0) + 1,
			newTask = {
				id : newTaskId,
				name : taskData.name
			};
			taskList.push(newTask);
			return taskDb.saveData(taskList)
				.then(function(){
					return newTask;
				});
		});
}

function update(taskIdToUpdate, taskDataToUpate){
	return taskDb
		.getData()
		.then(function(taskList){
			var taskToReplace = taskList.find(function(task){
				return task.id === taskIdToUpdate;
			});
			if (!taskToReplace){
				return callback(new Error("Task not found"));
			}
			taskList = taskList.map(function(task){
				return task.id === taskIdToUpdate ? taskDataToUpate : task;
			});
			return taskDb.saveData(taskList)
				.then(function(){
					return taskDataToUpate;
				});
		});
	
}

function remove(taskIdToDelete){
	return taskDb
		.getData()
		.then(function(taskList){
			var taskToRemove = taskList.find(function(task){
				return task.id === taskIdToDelete;
			});
			if (!taskToRemove){
				return callback(new Error("Task not found"));
			}
			taskList = taskList.filter(function(task){
				return task.id !== taskIdToDelete;
			});
			return taskDb.saveData(taskList)
		});
}
var taskService = {
	getAll
	, addNew
	, update
	, remove

};

module.exports = taskService;