var calculator = require('./calculator');

console.log('[@calculator-client] calculator = ', calculator);
var x = 100,
	y = 50;

console.log(calculator.add(x,y));

/*
console.log(calculator.subtract(x,y));
console.log(calculator.multiply(x,y));
console.log(calculator.divide(x,y));*/

try{
	var result = calculator.add(100, 'abc');
	console.log(result);
} catch (e){
	console.log('Something went wrong!');
	//console.log(e);
}


calculator.addAsync(100, 'abc', function(err,result){
	if (err){
		console.log('Something went wrong');
		return;
	}
	console.log(result);
})



