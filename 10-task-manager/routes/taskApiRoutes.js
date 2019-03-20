var express = require('express');
var router = express.Router();

var taskService = require('../services/taskService');

router.get('/', function(req, res){
	var taskList = taskService.getAll();
	res.json(taskList);
});

router.post('/', function(req, res,){
	var newTaskData = req.body,
		newTask = taskService.addNew(newTaskData);
	res.status(201).json(newTask);
});

router.put('/:id', function(req, res){
	var taskIdToUpdate = parseInt(req.params.id),
		taskDataToUpate = req.body;
	try{
		var updatedTask = taskService.update(taskIdToUpdate, taskDataToUpate);
		res.status(200).json(taskDataToUpate);
	} catch (err){
		res.status(404).end();
	}
});

router.delete('/:id', function(req, res){
	var taskIdToDelete = parseInt(req.params.id);
	try{
		taskService.remove(taskIdToDelete);
		res.status(200).json({});
	} catch (err){
		res.status(404).end();
	}	
});

module.exports = router;