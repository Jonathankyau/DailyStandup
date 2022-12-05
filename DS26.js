// Daily Standup Problem

// Day 26
// From: https://www.codewars.com/kata/52efefcbcdf57161d4000091

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects 
// Make sure you remember/review bracket notation for objects!  You can check if a property exists and increment a value tied to that property HINT HINT!

// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


// Hint: loop through the characters and use bracket notation to add one to the value for that letter in the object or add that letter as a property of the object with the value of 1

//Solution and PREP:


function count (string) {  
  // create the obj
  let countObj = {}
  // loop -> see if value exists ? val++ : val-1
  for(const c of str) {
    if(countObj[c]) {
      countObj[c]++
    } else {
      countObj[c] = 1
    }
  }
   return countObj;
}



console.log(count ("aba"), "{'a': 2, 'b': 1}")
console.log(count ("dog"), "{'d': 1, 'o': 1, 'g': 1}")
console.log(count ("abba"), "{'a': 2, 'b': 2}")

