// LeetCode
// From: https://leetcode.com/problems/binary-search/

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1. You must write an algorithm with O(log n) runtime complexity.

// Constraints
// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.

// Example
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1
 
// Solution
// https://www.youtube.com/watch?v=s4DPM8ct1pI
// TC: logn
// SC: 1

const search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (nums[middle] > target) {
      right = middle - 1;
    } else if (nums[middle] < target) {
      left = middle + 1;
    } else {
      return middle;
    }
  }
  return -1; // why return -1?
};


console.log(invertTree([-1,0,3,5,9,12], 9), '4' )
console.log(invertTree([-1,0,3,5,9,12], 2), '-1')


