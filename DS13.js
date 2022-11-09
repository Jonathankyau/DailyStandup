// Daily Standup Problem

// Day 13
// From: https://www.codewars.com/kata/523f5d21c841566fde000009

// Implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// arrayDiff([], [4,5]), [], "a was [], b was [4,5]"

// arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]"

// arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []"


// Hint: filter can look for not values too !includes



//Solution and PREP:

function arrayDiff(a, b) {
  // if(a.length === || b.length === 0 { return a }
  // filter out values we don't see but it's loop in loop
  return a.filter(function(x) {return b.indexOf(x) == -1; })
}

// so better solution is:
// built in methods are always faster. Array happens in linear time but we can use Set instead which has has method for constant time
// Set is first thing to think of when you want to get rid of duplicates

function arrayDiff(a, b) {
  let newSet = new Set(b)
  //filter out what we don't have in the set
  return a.filter(n => !newSet.has(n))
}

console.log(arrayDiff([1,2,2,2,3],[2]), '[1,3]' )
console.log(arrayDiff([3, 4], [3]), '[4]')

