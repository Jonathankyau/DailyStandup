// CHALLENGE
// Number of Good Pairs
// https://leetcode.com/problems/number-of-good-pairs/

// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0

// Hint: HASH MAP PATTERN! 

// Solution

function findPairs(nums){
  const hold = {}
  let count = 0

  for(const num of nums){
    if(hold[num]){
      count += hold[num]
      hold[num] += 1
    }else{
      hold[num] = 1
    }
  }
  return count
}

// Another Solution
    