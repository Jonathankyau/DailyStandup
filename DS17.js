// Daily Standup Problem

// Day 17
// From: https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
// sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])


// Hint: figure out the odd numbers and then map to replace in place



//Solution and PREP:
// we realize from info we need filter sort map

function sortArray(array) {
  // filter -> sort
  // grab odd numbers first then sort them
  const oddNums = array.filter(n => n % 2 !== 0).sort((a,b) => a - b)
  // console.log(oddNums)
  // map
  return array.map(n => n % 2 === 0 ? n : oddNums.shift())
}

// improved solution below
// we change sort to descending order
// then use pop() instead of shift()
// this is more efficient because shift removes first object and every object after has to shift forward which is linear. Sorting backwards and using pop to pop off the end gives us constant time
function sortArray(array) {
  // filter -> sort
  // grab odd numbers first then sort them
  const oddNums = array.filter(n => n % 2 !== 0).sort((a,b) => b - a)
  // console.log(oddNums)
  // map
  return array.map(n => n % 2 === 0 ? n : oddNums.pop())
}




console.log(sortArray([7, 1]), '[1, 7]')
console.log(sortArray([5, 8, 6, 3, 4]), '[3, 8, 6, 5, 4]')

