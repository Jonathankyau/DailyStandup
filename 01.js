
// Mega Summer Daily Standup Problem

// Day 01, Square(n) Sum

// Method Used:  Reduce

// https://www.codewars.com/kata/515e271a311df0350d00000f/solutions/javascript



//Solution:

function sumSquares(arr){
	return arr.reduce((a, c) =>a + c*c, 0)
}
console.log(sumSquares([1,2,2,]), 9)
console.log(sumSquares([1,2,2,1]), 10)
console.log(sumSquares([1,2,3]), 14)