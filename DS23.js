// Daily Standup Problem

// Day 23
// From: https://www.codewars.com/kata/56414fdc6488ee99db00002c

// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowles but one. Also, you won't need to worry about capitals.

// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

// Hint: loop through array of vowels and check for the indexOf in the original string. If -1 you found the missing one!  

//Solution and PREP:

function missingVowel(str) {
  //list all vowels -> loop through each vowel and see if it exists in string
  let vowels = 'aeiou'
  for (let i = 0; i < vowels.length; i++) {
    if(str.indexOf(vowels[i]) === -1){ //if it doesn't exist it returns -1 meaning we found the vowel
      return i
    }
  }
}

console.log(missingVowel("John Doe hs seven red pples under his bsket"), '0')
console.log(missingVowel("Bb Smith sent us six neatly arranged range bicycles"), '3')

// Another solution


