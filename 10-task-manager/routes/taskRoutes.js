var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
	res.send('All the tasks will be displayed here');
});

module.exports = router;