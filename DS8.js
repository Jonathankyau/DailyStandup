
// Daily Standup Problem

// Day 08
// From: https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/javascript

// Map (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
// indexOf(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
// lastIndexOf(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)


// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

// Hint: map through array checking if indexof == lastindexof and return the appropriate character


//Solution:

function duplicateEncode(word){
  // taking in a string word
  // toLowerCase 
  // map is array method so take string and turn into array
  // so split -> map -> indexOf === lastIndexOf ? '(' : ')'
  // join

  return word.toLowerCase()
             .split('')
             .map( (l,i,a) => a.indexOf(l) === a.lastIndexOf(l) ? '(' : ')')
             .join('')
}




console.log(duplicateEncode('din'), '(((')
console.log(duplicateEncode('recede'), '()()()')
