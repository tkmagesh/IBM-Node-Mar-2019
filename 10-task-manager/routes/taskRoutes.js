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

module.exports = router;