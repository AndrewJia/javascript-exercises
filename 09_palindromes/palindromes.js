const palindromes = function (str) {
	//remove spaces and punc, then lower case
	trim = str.replace( /\s|\.|\!|\?|\,/g, '').toLowerCase();
	console.log(trim);

	//compare leftmost and rightmost chars, then move to middle by 1
	let len = trim.length;
	let left = 0;
	let right = len - 1;
	while(left < right) {
		if(trim.charAt(left) != trim.charAt(right)) {
			return false;
		}
		left++;
		right--;
	}
	return true;
};

// Do not edit below this line
module.exports = palindromes;
