// CHALLENGE
// Algorithms in JavaScript
// https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038

// Given a string of words or phrases, count the number of vowels.

// No Regex! Unless that is your brute force...

// Hint: create a vowels array and check if each letter in the string is "included" in that vowels array. If a match is found increment a count

// Solution

function countVowels(str){
    let count = 0
    const vowels = "aeiou"

    for(let char of str.toLowerCase()){
        if(vowels.includes(char)){
            count++
        }
    }
    return count
}


console.log(countVowels("hello"))

// Another Solution
