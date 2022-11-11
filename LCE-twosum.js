// LeetCode
// From: https://leetcode.com/problems/two-sum/

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
 

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

var twoSum = function(nums, target) {
  let map = new Map(); //creates a new array populated with results of calling a provided function on every element in the calling array
  for(let i = 0; i < nums.length; i++) {
    let num1 = nums[i];
    let num2 = target - num1;
    if (map.has(num2)) { //if map has key num2, then return [i, value of num 2 which is the index]
        return [i, map.get(num2)];
    }
    map.set(num1, i); //if not, push the key/value pair to map
  }
 };


//Solution and PREP:


console.log(twoSum([2, 7,  11, 15],[9]), '[0, 1]' )
console.log(twoSum([3, 2, 4], [6]), '[1, 2]')

