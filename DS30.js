// Daily Standup Problem

import { arrayBuffer } from "stream/consumers"


// Day 30
// From: https://leetcode.com/problems/majority-element/

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3

// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2


// Hint: HASH MAP PATTERN! and possibly sorting for nlogn 

//Solution and PREP:

function majorityElement(nums) {
  let elem = {},
      count = 0,
      majElem = nums[0]

  for (const num of nums) { // for...of for arrays
    elem[num] = elem[num] + 1 || 1
  }

  for (const n in elem) { // for...in for objects
    // Ex1. Input: nums = [3,2,3]
    if (elem[n] > count) { // is value 2 of key 3 greater than 0?
      count = elem[n] // then set count to value of 2
      majElem = n
    }
  }
  return majElem
}

// this solution works but we don't necessarily need count - it is redundant so we can:

function majorityElement(nums) {
  let elem = {},
      count = 0,
      majElem = nums[0]

  for (const num of nums) { 
    elem[num] = elem[num] + 1 || 1
    elem[num] > nums.length / 2 // is 2 > 1.5 meaning value takes up more than half the array
  }

  return majElem
}

// to go even further we can sort the array and we know the middle number takes up majority of the array
// this brings the complexity to nlogn for a linear solution to the previous multiple for loops

function majorityElement(nums) {
  nums.sort()
  return nums[Math.floor(arr.length/2)]
}



console.log(majorityElement([3,2,3]), "3")
console.log(majorityElement([2,2,1,1,1,2,2]), "2")
console.log(majorityElement([1,1,1,3,3,3,3,2,4,2]), "3")

// Another solution

var majorityElement = function (nums) {
  const ht = {} // keep track of our element counts
  for(const num of nums) {
    ht[num] = ht[num] + 1 || 1
  }
  
  for(const key in ht) {
    if(ht[key] > Math.floor(nums.length / 2)) {
      return key
    }
  }
  };