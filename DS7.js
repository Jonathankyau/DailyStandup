
// Daily Standup Problem

// Day 07
// From: https://www.codewars.com/kata/5a512f6a80eba857280000fc/javascript

// Sort (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)


// Given an array of integers , Find the Nth smallest element in this array of integers.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers could be a mixture of positives , negatives and zeros .

// Repetition in array/list's numbers could occur , so don't Remove Duplications .

// nthSmallest({3,1,2} ,2) ==> return (2) 
// nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
// nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
// nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92) 

// Hint: sort the array and then grab the nth value. !remember how arrays are indexed :)


//Solution:

function nthSmallest(arr, pos){
    // sort arr
    // find nth num -> n - 1       pos is nth
    return arr.sort((a,b) => a-b)[pos-1]
  }




console.log(nthSmallest([3,1,2] ,2), '2')
console.log(nthSmallest([177,225,243,-169,-12,-5,2,92] ,5), '92')
