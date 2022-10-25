
// Daily Standup Problem

// Day 06
// From: https://www.codewars.com/kata/59e66e48fc3c499ec5000103

// Map (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
// Reduce (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
// Set (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)


// Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// solve([[1,2],[4],[5,6]]),4)
// solve([[1,2],[4,4],[5,6,6]]),4)
// solve([[1,2],[3,4],[5,6]]),8)
// solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)

// Hint:  You have an array full of arrays. Map through the parent array and make sure each sub array is a set aka no duplicate numbers. Once each sub array contains no duplicates you can just reduce multiplying the length of each sub array together to get the total combinations 


//Solution:

function solve(arr){
    //set -> uni values
    //in map [1,2],[4],[5,6] -> 2,1,2
    //reduce -> 2*1*2
    //sa for subarray. take subarray and pass it in and give me a new array without duplicates because sets cannot have duplicates
    // arr.map(sA => [...new Set(sA)].length) // returns 2, 1, 2 

    // or use this syntax below 

    return arr.map(sA => new Set(sA).size).reduce((a,c) => a * c,1)

}

const solve = arr => arr.reduce((a,c) => a * new Set(c).size, 1)


console.log(solve([[1,2],[4],[5,6]]), '4')
console.log(solve([[1,2],[4,4],[5,6,6]]), '4')
