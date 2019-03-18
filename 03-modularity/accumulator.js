function accumulatorFactory(initialResult = 0){
	var result = initialResult;

	var accumulator = {
		add : function(x){
			result += x;
		},
		subtract : function(x){
			result -= x;
		},
		multiply : function(x){
			result *= x;
		},
		divide : function(x){
			result /= x;
		},
		getResult : function(){
			return result;
		}
	};
	return accumulator;
}

module.exports = accumulatorFactory;