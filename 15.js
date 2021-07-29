// CHALLENGE
// Array.diff
// https://www.codewars.com/kata/523f5d21c841566fde000009

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions

// Examples

//  [7, 1] => [1, 7]

// [5, 8, 6, 3, 4] => [3, 8, 6, 5, 4]

// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] => [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// Solution

function sortNums(arr) {
    const oddNums = arr.filter(x => x % 2).sort((a,b) => a - b)
    return arr.map(n => n % 2 ? oddNums.shift() : n )
}