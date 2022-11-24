// Daily Standup Problem

// Day 19
// From: https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/

// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"


// Hint: filter values that don't equal the next value



//Solution and PREP:
function solution(number) {
  let sumList = []
  if (number < 0) return 0
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sumList.push(i)
    }

  }
  return sumList.reduce((a, b) => (a + b), 1)
}



console.log(removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"), 'alpha beta gamma delta alpha beta gamma delta')
console.log(removeConsecutiveDuplicates(), "")


// another solution
const removeConsecutiveDuplicates = s => s.split(" ").filter((x,i,arr) => x!=arr[i-1]).join(" ");
