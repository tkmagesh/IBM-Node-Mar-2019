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
})

module.exports = router;