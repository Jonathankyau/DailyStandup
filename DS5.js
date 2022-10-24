
// Daily Standup Problem

// Day 05
// From: https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/solutions/javascript

// Filter(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
// Slice(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)


// DON'T WORRY ABOUT COMPLEXITY - we are using this one to practice our array methods!

// Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

// Hint: Filter the even numbers and slice the end using the -n syntax


//Solution:

function nEvenNums(arr, num){
    // filter out odd nums
    // n last nums from the filtered array = slice (-n)
    return arr.filter(n => n % 2 === 0).slice(-num)
}
const nEvenNums = (arr, num) => arr.filter(n => n % 2 === 0).slice(-num)

console.log(nEvenNums([1, 2, 3, 4, 5, 6, 7, 8, 9]), '[4, 6, 8]')
console.log(nEvenNums([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26]), '[-8, 26]')
