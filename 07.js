
// Mega Summer Daily Standup Problem

// Day 07, String tranformer

// Method Used:  

// https://www.codewars.com/kata/5878520d52628a092f0002d0/


//Solution:

function stringTransformer(str) {
	return str
	  .split(' ')
	  .reverse()
	  .join(' ')
	  .split('')
	  .map(l => l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase())
	  .join('')
  }