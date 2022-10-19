
// Daily Standup Problem

// Day 03
// From: 

// Return the average of the given array rounded down to its nearest integer
// Array will never be empty

// getAverage([2, 2, 2, 2]), 2)
// getAverage([1, 2, 3, 4, 5]), 3)
// getAverage([1, 1, 1, 1, 1, 1, 1, 2]), 1)

//Solution:

function getAverage(arr) {
    // loop through the array to get sum
    return Math.floor( arr.reduce((a, c) => a + c) / arr.length)
    // avg -> sum / arr.length
    // return value
}

const getAverage = arr => Math.floor( arr.reduce((a, c) => a + c) / arr.length)


console.log(getAverage([2, 2, 2, 2]), 2)
console.log(getAverage([1, 2, 3, 4, 5]), 3)
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]), 1)
