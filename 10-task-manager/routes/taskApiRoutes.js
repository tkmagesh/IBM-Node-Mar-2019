var express = require('express');
var router = express.Router();

var taskService = require('../services/taskService');

/*router.get('/', function(req, res){
	taskService.getAll(function(err, taskList){
		console.log(arguments);
		res.json(taskList);	
	});
});

router.post('/', function(req, res,){
	var newTaskData = req.body;
	taskService.addNew(newTaskData, function(err, newTask){
		if (err){
			return res.status(500).end()
		};
		res.status(201).json(newTask);
	});
});

router.put('/:id', function(req, res){
	var taskIdToUpdate = parseInt(req.params.id),
		taskDataToUpate = req.body;
	
	taskService.update(taskIdToUpdate, taskDataToUpate, function(err, updatedTask){
		if (err){
			return res.status(404).end();	
		}
		return res.status(200).json(taskDataToUpate);
	});
});

router.delete('/:id', function(req, res){
	var taskIdToDelete = parseInt(req.params.id);
	
	taskService.remove(taskIdToDelete, function(err){
		if (err){
			res.status(404).end();	
		}
		res.status(200).json({});
	});
});
*/

router.get('/', function(req, res){
	taskService.getAll()
		.then(function(taskList){
			res.json(taskList);	
		});
});

router.post('/', function(req, res,){
	var newTaskData = req.body;
	taskService
		.addNew(newTaskData)
		.then(function(newTask){
			res.status(201).json(newTask);	
		})
		.catch(function(err){
			return res.status(500).end()
		});		
});

router.put('/:id', function(req, res){
	var taskIdToUpdate = parseInt(req.params.id),
		taskDataToUpate = req.body;
	
	taskService.update(taskIdToUpdate, taskDataToUpate)
		.then(function(updatedTask){
			return res.status(200).json(taskDataToUpate);
		})
		.catch(function(err){
			return res.status(404).end();	
		})
});

router.delete('/:id', function(req, res){
	var taskIdToDelete = parseInt(req.params.id);
	
	taskService.remove(taskIdToDelete)
		.then(function(){
			res.status(200).json({});
		})
		.catch(function(err){
			res.status(404).end();	
		});
});

module.exports = router;