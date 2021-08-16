// CHALLENGE
// Algorithms in JavaScript
// https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038

// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)!

// Hint: loop through string adding current value to previous equals a reversed string

// Solution

function reverseWord(str) {
    let newStr = '';
    for (let char of str) {
      newStr = char + newStr;
    }
    return newStr;
  }

// Another Solution

