const add = function(x,y) {
  return x+y;	
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(numArr) {
	return numArr.reduce((prevVal, currVal) => prevVal + currVal, 0);
};

const multiply = function(numArr) {
  return numArr.reduce((prevVal, currVal) => prevVal * currVal, 1);
};

const power = function(num, exponent) {
  let exp = 	[...Array(exponent).keys()].map(i => num);  
  // let finalProd = exp.reduce((prevVal, currVal) => prevVal * currVal, 1);
  return multiply(exp);
};

const factorial = function(val) {
  let fracArr = [...Array(val).keys()].map(i =>i+1);
  return multiply(fracArr);
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
