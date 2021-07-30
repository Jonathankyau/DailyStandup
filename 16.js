// CHALLENGE
// Two Oldest Ages
// https://www.codewars.com/kata/511f11d355fe575d2c000001

// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

// For example:

// twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]

// Hint: sort and slice

// Solution

function oldestAges(arr) {
    return arr.sort((a,b)=>a-b).slice(-2)
}