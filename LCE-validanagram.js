// LeetCode
// From: https://leetcode.com/problems/valid-palindrome/

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.
 
// Solution
// Use hashmap to count each char in string 1, decrement for string 2


const isPalindrome = function (s) {
  // Initial pointer values
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let leftCode = s.charCodeAt(left);
    let rightCode = s.charCodeAt(right);

    // Passing over non-AlphaNum characters
    if (!checkAlphaNum(leftCode)) {
      left++;
      continue;
    }
    if (!checkAlphaNum(rightCode)) {
      right--;
      continue;
    }

    // If both characters are alphanumeric check that they are the same as lowercase
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }
  return true;

  // Helper function for checking if a character is alphanumeric
  function checkAlphaNum(charCode) {
    if (97 <= charCode && charCode <= 122) {
      return true;
    } else if (65 <= charCode && charCode <= 90) {
      return true;
    } else if (48 <= charCode && charCode <= 57) {
      return true;
    } else {
      return false;
    }
  }
};


//Solution and PREP:


console.log(checkAlphaNum("A man, a plan, a canal: Panama"), 'true' )
console.log(checkAlphaNum("race a car"), 'false')


