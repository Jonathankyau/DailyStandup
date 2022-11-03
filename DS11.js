
// Daily Standup Problem

// Day 11
// From: https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0/train/javascript

// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.


// Hint: you have full control over a and b inside the sort method



//Solution:
// PREP notes
// taking in a string that will always be a string, can i assume normal letters, no numbers or special characters. we can have spaces
//
// str -> no funny biz
// str -> words are reversed, opposite cased

function last(x) {
    // split sort
    // sort -> 
    return x.split(' ').sort((a,b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
  }


//when you refactor comment out previous code and copy so you have original answer


console.log(last('man i need a taxi up to ubud'), "['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']")
console.log(last('what time are we climbing up the volcano'), "['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']")

