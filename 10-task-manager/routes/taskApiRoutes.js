var express = require('express');
var router = express.Router();

var taskList = [
	{id : 1, name : 'Learn Node.js'},
	{id : 2, name : 'Explore JavaScript'},
	{id : 3, name : 'Make sure to cast your vote'},
];

router.get('/', function(req, res){
	res.json(taskList);
});

router.post('/', function(req, res,){
	var newTaskData = req.body,
		newTaskId = taskList.reduce(function(result, task){
			return result > task.id ? result : task.id;
		}, 0) + 1,
		newTask = {
			id : newTaskId,
			name : newTaskData.name
		};
		taskList.push(newTask);
		res.status(201).json(newTask);
});

router.put('/:id', function(req, res){
	var taskIdToUpdate = parseInt(req.params.id),
		taskDataToUpate = req.body;
	var taskToReplace = taskList.find(function(task){
		return task.id === taskIdToUpdate;
	});
	if (!taskToReplace){
		res.status(404).end();
		return;
	}
	taskList = taskList.map(function(task){
		return task.id === taskIdToUpdate ? taskDataToUpate : task;
	});
	res.status(200).json(taskDataToUpate);
});

router.delete('/:id', function(req, res){
	var taskIdToDelete = parseInt(req.params.id);
	var taskToRemove = taskList.find(function(task){
		return task.id === taskIdToDelete;
	});
	if (!taskToRemove){
		res.status(404).end();
		return;
	}
	taskList = taskList.filter(function(task){
		return task.id !== taskIdToDelete;
	});
	res.status(200).json({});
});

module.exports = router;