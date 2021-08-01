// CHALLENGE
// Find the capitals
// https://www.codewars.com/kata/539ee3b6757843632d00026b

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// Hint: loop and push index to array

// Solution

function capIndexes(word) {
    const caps = []
    word.split('').forEach((e,i)=> {
        if(e === e.toUpperCase()) {
            caps.push(i)
        }
    })
    return caps
}

console.log(capIndexes('CodEWaRs'), "[0,3,4,6]")

// Another Solution

function capIndexes(word) {
    const caps = []
    for(let i = 0; i < word.length; i++) {
        if(word[i] === word[i].toUpperCase()) {
            caps.push[i]
        }
    }
    return caps
}