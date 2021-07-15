
// Mega Summer Daily Standup Problem

// Day 02, Square(n) Sum

// Method Used:  Reduce, Map, Set
// Map (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
// Reduce (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
// Set (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)


// https://www.codewars.com/kata/59e66e48fc3c499ec5000103


// Solution:
const solve = arr =>
arr.map( x => [...new Set(x)].length ).reduce((a,c)=>a*c)

// Notes:
// 
// Trying to get unique items in the subarray
// 
// SET method
// 
// SET is almost like an array but you can’t have duplicates. Doesn’t allow duplicates, kinda gets rid of it
// 
// If you turn any of these subarrays into a set, you know they’ll be removed.
// 
// Last one will be 3467, no duplicates
// 
// Turn each subarray into a set, then
// 
// Get the total number of elements in that set.
// 
// How to get the total number of elements in the set?
// .length?
// 
// 
// Turn test cases into a set, then get how big the set is.
// 
// So if I take 123, that’s a set that’s good, turn 3467 into a set, that’s good.  But instead of having a subarray, what if we turn it into a length?
// 
// Length of first subarray is 3, next is 4, then 6.  So all we’ll have to do is multiply now.  3 x 4 x 6 = 72
// 
// 
// Going to use set, but two methods to help me along here.
// 
// Going to use .map, because I went through the entire array grabbing each of these elements.
// 
// Then going to create an array of these numbers, then reduce by multiplying them all together.
// 
// const arrCombinations = 
// 
// ^ I’m passing in an array, adn that array has subarrays.  So I’m going to do arr.map().  This is all about turning the array into sets, then …
// 
// The map should eventually give me an array that looks like that (3,4,6), then going to reduce that array.
// // Reduce has accumulator and a current value going to multiply them.
// 
// Now need to do what’s in the map.
// 
// Map is going to call in a function.  Going to create a new set using “x”.  
// 
// ALL I AM DOING, remember map is looping through each of these subarrays.  If I’m looking at line 9 test case, x is first the array with 1 and 2 in it.  Then x will be 3, 4.  Then X will be 5, 6.
// 
// Since I know X is the subarray, this little bit of code here is giving me a new set
// 
// What I’ll end up with is an array that does not have duplicates.
// 
// Let’s say we have [2, 3, 3, 3, 5, 7] - this becomes x.  IF I plug that array in for X, what would wind up happening is that this new set would return 2,3,5,7, and length would wind up being 4.  So now this map creating a new array, the first value would be 4.  Then again for the next subarray, would be 2.  
// 
// As we map through these sets, we just wind up with how many unique numbers were inside that subarray.  So once I have this map all done to completion, and we’ve gone through figuring out how many items are in each of those subarrays, we REDUCE it.  Going to do 3 x1, 3x4, 3x6.
// 
// Does map only return one array? // YES>. All it does is return one array. It has no idea what’s in it.  It just so happens that we’re mapping through an array of arrays.  The map is working on the outside array. IT just so happens that each element it’s mapping through happens to also be an array.  Would also work if we just did 
// 
// Reduce - lets say we’re reducing [ 3, 4, 6 ]
// What it’s going to do - the accumulator is the variable where you ‘storing stuff. And c is current value.  Lot of people write acc/current but it doesn’t matter what you call it.  
// 
// We have an array we’re reducing. Going to take the current value and times it by the accumulator.  We assume the accumulation is 1.  
// 
// 1x3 = 3, reduce will run again but this time the accumulation is already at 3… 
// 3 x 4 = 12, now accumulator is 12…
// 12 x 5 = 60
// 
// So that whole line (13) just reduces to 60. 
// 
// Important to know what the methods work on
// 
// Map is an array method that returns an array.
// 
// Reduce also works on arrays, so you can chain a map and a reduce because they’re both working on an array. Can’t chain something like…. “Bob” adn map because Bob is a string
// 
// As long as it’s returning a value that the next thing utilizes, you can chain to your heart’s content.
// 