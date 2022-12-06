// Daily Standup Problem

// Day 27
// From: https://leetcode.com/problems/jewels-and-stones/

// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0
 

// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.


// Hint: HASH MAP PATTERN!

//Solution and PREP:


var numJewelsInStones = function(jewels, stones) {
  const map = {}
  let count = 0

  for(const jewel of jewels) {
    map[jewel] = true // first run sets 'a: true' and 'A: true' in map object
  }
  
  for(const stone of stones) {
    if (map[stone]) {
      count++
    }
  }
  return count
};



console.log(numJewelsInStones(jewels = "aA", stones = "aAAbbbb"), "3")
console.log(numJewelsInStones(jewels = "z", stones = "ZZ"), "0")
console.log(numJewelsInStones(jewels = "aA", stones = "aAAbbbb"), "{'a': 2, 'b': 2}")

