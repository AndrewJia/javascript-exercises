const fibonacci = function(input) {
	//convert string to number
	if(typeof input != 'number') {
		input = parseInt(input);
	}
	//negative invalid input
	if(input < 0) return "OOPS";
	if(input < 3) return 1;
	let small = 1;
	let large = 1;
	for(let i = 3; i <= input; i++) {
		//console.log("small, large at start: "+small+", "+large);
		small = small + large;
		let temp = small;
		small = large;
		large = temp;
	}
	return large;
};

// Do not edit below this line
module.exports = fibonacci;
