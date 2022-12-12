// Daily Standup Problem

import { array } from "prop-types";

// Day 29
// From: https://leetcode.com/problems/contains-duplicate/

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true

// Example 2:

// Input: nums = [1,2,3,4]
// Output: false

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true


// Hint: HASH MAP PATTERN!  As you loop, check to see if element is already in hash map

//Solution and PREP:

// if you are in interview, clarify if big or large sets
// Hashmaps great for large sets due to immediate termination at first found duplicate
var containsDuplicate = function(nums) {
  let numsMap = {} // loop through map
  for(let i = 0; i < nums.length; i++){
    let num = nums[i]
    if(numsMap[num]) {
      return true //if we see duplicate return true
    } else {
      numsMap[num] = true //if we don't see it, set it to true in numsMap
    }
  }
  return false
};

// O(n) complexity

console.log(containsDuplicate([1,2,3,1]), "true")
console.log(containsDuplicate([1,2,3,4]), "false")
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]), "true")

// Another solution

var containsDuplicate = function(nums) {
  let numbers = new Set()
  for (let num of nums) {
      if (!numbers.has(num)){
          numbers.add(num)
      } else {
          return true
      }
  }
  return false
};