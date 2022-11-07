// Daily Standup Problem

// Day 12
// From: https://www.codewars.com/kata/595aa94353e43a8746000120


// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the array and no difference with it, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).

// findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
// findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
// findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')


// Hint: someArr.indexOf(value) === -1 is a value that does not exist in someArr - throw that in a filter!  OR... think about the math...



//Solution and PREP:

// slow solution because loop inside of loop and run into time complexity
function findDeletedNumber(arr, mixArr) {
  return arr.filter( n => mixArr.indexOf(n) === -1 )[0] || 0
}

// better solution
// if the arrays are the same length that's way more easy to check then a simply reduce to figure out the difference which is much faster than looping
function findDeletedNumber(arr, mixArr) {
  if(arr.length === mixArr.length) {
    return 0
  } else {
    let arrSum = arr.reduce((a, c) => a + c, 0)
    let mixSum = mixArr.reduce((a, c) => a + c, 0)
    return arrSum - mixSum
  }
}

console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]), '2, Deletion' )
console.log(findDeletedNumber(arr, mixArr), )

