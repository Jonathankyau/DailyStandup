// Daily Standup Problem

// Day 25
// From: https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038

// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 

// Hint: loop through string adding current value to previous equals a reversed string

//Solution and PREP:

// 1 to num  no funny biz

function reverseString(str) {
  // str -> char
  // str -> str reverse
  // return split reverse join
  return str.split('').reverse().join('')
}

// no reverse method
function reverseString(str) {
  // create empty string -> loop and add each char to empty string
  let reverseStr = ''

  for(let char of str) {
    reverseStr = char + reverseStr // loop through each letter, add first letter to empty string, next letter will be added infront of previous letter
  }
  return reverseStr
}

console.log(reverseString('bob'), "bob")
console.log(reverseString('john'), "nhoj")
console.log(reverseString('sarah'), "haras")

