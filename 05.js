
// CHALLENGE
// Remove Consecutive Duplicate Words
// https://www.codewars.com/kata/5b39e91ee7a2c103300018b3
// Your task is to remove all consecutive duplicate words from a string, leaving only first word entries.

// PREP

// Parameters
// A string of various repeating words.  No punctuation, no gotchas.

// Returns
// The original string, containing only the first instance of each word that repeats. So like, “aaa bbb ccc dd aaaa ccc ddd” -> “a b c d a c d” (just the first of each repeat).

// Examples / Tests
// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta" --> "alpha beta gamma delta alpha beta gamma delta"  

// Pseudocode
// Need to split the string into an array
// Need to .filter() through the array with a condition - if the string repeats, do not add the repeat to the accumulator.

// Solution

const removeConsecutiveDuplicates = s => s.split(" ").filter((e, i, arr) => e != arr[i - 1]).join(" ");