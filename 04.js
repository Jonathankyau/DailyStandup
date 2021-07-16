
// Sum of Array Singles
// https://www.codewars.com/kata/59f11118a5e129e591000134


// Parameters
// An array of integers, two of the integers occur once, and the rest occur only twice.
// Positive, whole numbers only

// Returns
// The sum (as an integer) of the integers that occur only once.

// Examples / Tests
// Repeats ([4,5,7,5,4,8]) = 15, because only the numbers 7 and 8 occur once, and their sum is 15.  
// console.log(onlyOnce([9,10,19,13,19,13]), 19); 
// console.log(onlyOnce([16,0,11,4,8,16,0,11]), 12); 
// console.log(onlyOnce([5,10,19,13,10,13]), 24); 
// 
// Pseudocode
// Need to .filter() through the array with a condition - only if the element appears only once, add it to the accumulator. 
// Need to .reduce(a, c) accumulate, current value

// 

// 
// Solution

function repeats(arr){
	return arr.filter(x => arr.indexOf(x) === arr.lastIndexOf(x)).reduce((a, b) => a + b);
  };