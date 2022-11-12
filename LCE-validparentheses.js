// LeetCode
// From: https://leetcode.com/problems/valid-parentheses/

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true

// Example 2:

// Input: s = "()[]{}"
// Output: true

// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.
 
// Solution


const isValid = (s) => {
  let bracket = {
   '(':')',
   '[':']',
   '{':'}'
  }
  let stack = []

  for(let char of s) {
      if(bracket[char]) {
          stack.push(bracket[char])
      } else if (stack.pop() !== char) return false
      }
  return (!stack.length)
}


//Solution and PREP:


console.log(isValid('()'), 'true' )
console.log(isValid('()[]{}'), 'true')





// This solutions is O(n) time complexity. See this video for more explanation: https://www.youtube.com/watch?v=WTzjTskDFMg

const isValid = function (s) {
  // Checking for string lengths that are odd which wouldn't be valid
  if (s.length % 2 !== 0) {
    return false;
  }

  const stack = [];
  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (const c of s) {
    if (brackets.hasOwnProperty(c)) {
      // add closing bracket to stack
      stack.push(brackets[c]);
    } else if (stack.pop() !== c) {
      // This will run if stack is empty and you try to add a closing bracket or closing brackets don't match
      return false;
    }
  }
  // If stack is empty returns true as all brackets matched up
  return stack.length === 0;
};