// Daily Standup Problem

// Day 15
// From: https://www.codewars.com/kata/545a4c5a61aa4c6916000755

// You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers.

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.


// Hint: spread array, sort it and grab the middle value. Throw that into indexOf the array itself - does time complexity matter for this problem?



//Solution and PREP:
// brute force totally acceptable with small numbers like 3


function gimme(triplet) {
  // arr
  // index -> el in the middle
  // becareful using sort because it mutates array but we need original index 
  // sort -> 1index
  // arr -> indexOf num ^
  return triplet.indexOf([...triplet].sort((a,b) => a - b)[1])
}




console.log(gimme([2, 3, 1]), '0')
console.log(gimme([2, 3, 1]), '1')

