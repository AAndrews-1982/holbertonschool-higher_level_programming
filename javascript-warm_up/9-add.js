#!/usr/bin/node

const add (a, b) => {
  return a + b;
}

const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);

if (isNaN(arg1) || isNaN(arg2)) {
  console.log('NaN');
} 	else {
	cont result = add(num1, num2);	
	console.log(result);
}
