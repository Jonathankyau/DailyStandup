// CHALLENGE
// Absent vowel
// https://www.codewars.com/kata/56414fdc6488ee99db00002c

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

// Solution

function missingVal(str) {
    const v = 'aeiou'
    for (let i in v){
        if( str.toLowerCase().indexOf(v[i]) === -1 ){
            return i
        }
    }
}

// Another Solution

const absentVowel = string =>
    [...'aeiou'].findIndex(letter => !string.includes(letter))





    
console.log(gimme([5, 10, 14]))