// Sum Mixed Array
// https://www.codewars.com/kata/57eaeb9578748ff92a000009


// Parameters
// An array of integers as strings and numbers (e.g.) [9, “9”]
// Positive, whole numbers only

// Returns
// The sum (as an integer) of the array values, as if all were integers.

// Examples / Tests
// console.log(sumMix([9, 3, '7', '3']), 22);
// console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
// console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 
// 
// Pseudocode
// 
// .map() to loop through each element in the array
// .reduce() takes in accumulator, current value
// Number(n) creates a new Number value, we want to change the current value to a Number
// 
// 
// 
// Solution
// 
function sumMix(arr) {
	return arr.reduce((a, c) => a + Number(c), 0)
  }
 // 
 // 
 // NOTES
 // .Why is the 0 important? because it catches a possible empty array and makes sure the answer is zero rather than undefined.