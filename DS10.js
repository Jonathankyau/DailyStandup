
// Daily Standup Problem

// Day 10
// From: https://www.codewars.com/kata/5878520d52628a092f0002d0/

// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.


// Hint: make an array, map through it making your changes to each letter, and join back into a string



//Solution:
// PREP notes
// taking in a string that will always be a string, can i assume normal letters, no numbers or special characters. we can have spaces
//
// str -> no funny biz
// str -> words are reversed, opposite cased

function stringTransformer(str) {
    // split str " " -> reverse -> join
    // split str "" -> map l ==== l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()

    // let reversedStr = str.split(' ').reverse().join(' ')
    // let transformedStr = reversedStr.split('').map(l => l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()).join('')
    // return transformedStr

    return str.split(' ').reverse().join(' ').split('').map(l => l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()).join('')
  }


//when you refactor comment out previous code and copy so you have original answer


console.log(stringTransformer("Example Input"), "iNPUT eXAMPLE")
console.log(stringTransformer("Jonathan Yau"), "yAU jONATHAN")

