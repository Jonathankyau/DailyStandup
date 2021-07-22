  
// CHALLENGE
// Highest Scoring Word
// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.


// Solution

function high(str) {
	const alphabet = ' abcdefghijklmnopqrstuvwxyz'
	const wordScore = word => word.split('').reduce((a,c)=> a + alphabet.indexOf(c), 0)
	let highestWord = ''
	let highestCount = 0
	str.split(' ').forEach(w=>{
	  const scoreCheck = wordScore(w)
	  if (scoreCheck > highestCount) {
	  highestWord = w
	  highestCount = scoreCheck
	  }
  })
  return highestWord
  }

console.log(high('what time are we climbing up the volcano'));