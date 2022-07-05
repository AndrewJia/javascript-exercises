const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let sum = 0;
  for(a of arr) {
    sum += a;
  }
  return sum;
};

const multiply = function(arr) {
  let res = 1;
  for(a of arr) {
    res *= a;
  }
  return res;
};

const power = function(base, pow) {
	if(pow === 0) return 1;
  let res = 1;
  for(let i = 0; i < pow; i++) {
    res *= base;
  }
  return res;
};

const factorial = function(a) {
	let res = 1;
  for(let i = 1; i <= a; i++) {
    res *= i;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
