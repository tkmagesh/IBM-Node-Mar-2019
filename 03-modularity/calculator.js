var calculator = {
	add : function(x,y){
		if (typeof x !== 'number' || typeof y !== 'number')
			throw new Error('Invalid arguments');
		return x + y;
	},
	subtract : function(x,y){
		return x - y;
	},
	multiply : function(x,y){
		return x * y;
	},
	divide : function(x,y){
		return x / y;
	},
	addAsync : function(x,y,callback){
		setTimeout(function(){
			if (typeof x !== 'number' || typeof y !== 'number'){
				var err = new Error('Invalid arguments');
				callback(err);
				return;
			}

			var result = x + y;
			callback(null, result);
		},3000);
	}
};

console.log('[@calculator.js] calculator = ', calculator);

module.exports = calculator;