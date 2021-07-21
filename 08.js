
// Mega Summer Daily Standup Problem

// Day 08, Count characters in your string

// Method Used:  Object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

// https://www.codewars.com/kata/52efefcbcdf57161d4000091

// Make sure you remember/review bracket notation for objects!  You can check if a property exists and increment a value tied to that property HINT HINT!

// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

//Solution:

function count(str) {
	let charCount = {}
	str.split('').forEach(x=> charCount[x] ? charCount[x]++ : charCount[x]=1)
	return charCount
}

console.log(count('aba'),'{a: 2, b: 1}' )