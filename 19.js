// CHALLENGE
// Lost number in number sequence
// https://www.codewars.com/kata/595aa94353e43a8746000120

// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the array and no difference with it, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).

// Test.assertEquals(findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
// Test.assertEquals(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
// Test.assertEquals(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')

// Hint: someArr.indexOf(value) === -1 is a value that does not exist in someArr - throw that in a filter! 

// Solution

function findDeleteNum(arr, mixWDel) {
    let tot1 = arr.reduce((a,b) => a + b, 0)
    let tot2 = mixWDel.reduce((a,b) => a + b, 0)
    return tot1 - tot2
}

console.log(findDeleteNum([1,2,3,4,5,6,7,8,9], [3,2,4,6,7,8,1,9]), 5)

// Another Solution

function findDeleteNum(arr, mixWDel) {
    return arr.filter(v => mixWDel.indexOf(v) === -1)[0]||0
}