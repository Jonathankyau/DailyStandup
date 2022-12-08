// Daily Standup Problem

// Day 28
// From: https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038

// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//   it("Should return max character", () => {
//    assert.equal(max("Hello World!"), "l");
//   });
//  });
 
//  No String or Array Methods (well brute force it first, but then no methods)! 


// Hint: Use the "hash map" pattern from previous questions aka put each character in an object with its count and then find the highest by looping through

//Solution and PREP:


function maxCharacters(str) {
  let charMap = {},
      count = 0,
      maxChar = null

  for (const char of str) {
    charMap[char] = charMap[char] + 1 || 1
  }

  for (const char in charMap) {
    if (charMap[char] > count) {
      count = charMap[char]
      maxChar = char
    }
  }
  return maxChar
};

// O(n) complexity

console.log(maxCharacters('Hello World!'), "l")
console.log(maxCharacters('Nala'), "a")
console.log(maxCharacters('Bob Loblaw'), "b")

