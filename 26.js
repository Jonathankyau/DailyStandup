// CHALLENGE
// Algorithms in JavaScript
// https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038

// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//     it("Should return max character", () => {
//      assert.equal(max("Hello World!"), "l");
//     });
//    });
   
//    No String or Array Methods (well brute force it first, but then no methods)! 

// Hint: Use the "hash map" pattern from previous questions aka put each character in an object with its count and then find the highest by looping through

// Solution

function mostOften(str) {
    const characters = {}
    for(let char of str) {
        characters[char] = characters[char] + 1 || 1
    }

    let mostCount = 0
    let mostCharacter = null

    for(let char in characters) {
        if(characters[char] > mostCount) {
            mostCount = characters[char]
            mostCharacter = char
        }
    }
    return mostCharacter
}

// Another Solution
