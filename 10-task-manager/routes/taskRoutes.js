var express = require('express');

var router = express.Router();

var taskList = [
	{id : 1, name : 'Learn Node.js'},
	{id : 2, name : 'Explore JavaScript'},
	{id : 3, name : 'Make sure to cast your vote'},
];

router.get('/', function(req, res){
	//res.send('All the tasks will be displayed here');
	res.render('tasks/list', {tasks : taskList});
});


router.get('/new', function(req, res){
	res.render('tasks/addNew');
});

router.post('/new', function(req, res){
	var newTaskName = req.body.newTaskName;
	var newTaskId = taskList.reduce(function(result, task){
		return result > task.id ? result : task.id;
	}, 0) + 1;
	var newTask = {
		id : newTaskId,
		name : newTaskName
	};
	taskList.push(newTask);
	res.redirect('/tasks');
});

module.exports = router;