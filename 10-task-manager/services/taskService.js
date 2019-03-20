var taskList = [
	{id : 1, name : 'Learn Node.js'},
	{id : 2, name : 'Explore JavaScript'},
	{id : 3, name : 'Make sure to cast your vote'},
];

function getAll(){
	return taskList;
}

function addNew(taskData){
	var newTaskId = taskList.reduce(function(result, task){
		return result > task.id ? result : task.id;
	}, 0) + 1,
	newTask = {
		id : newTaskId,
		name : taskData.name
	};
	taskList.push(newTask);
	return newTask;
}

function update(taskIdToUpdate, taskDataToUpate){
	var taskToReplace = taskList.find(function(task){
		return task.id === taskIdToUpdate;
	});
	if (!taskToReplace){
		throw new Error("Task not found");
	}
	taskList = taskList.map(function(task){
		return task.id === taskIdToUpdate ? taskDataToUpate : task;
	});
	return taskDataToUpate;
}

function remove(taskIdToDelete){
	var taskToRemove = taskList.find(function(task){
		return task.id === taskIdToDelete;
	});
	if (!taskToRemove){
		throw new Error("Task not found")
	}
	taskList = taskList.filter(function(task){
		return task.id !== taskIdToDelete;
	});
}

var taskService = {
	getAll
	, addNew
	, update
	, remove

};

module.exports = taskService;