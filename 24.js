// CHALLENGE
// Algorithms in JavaScript
// https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038

// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

// Hint: Loop with conditionals that use modulus

// Solution

function fizzBuzz(num) {
    const output = [];
    for (let i = 1; i <= num; i++) {
      if (i % 6 === 0) {
        output.push('FizzBuzz');
      } else if (i % 2 === 0) {
        output.push('Fizz');
      } else if (i % 3 === 0) {
        output.push('Buzz');
      } else {
        output.push(i);
      }
    }
    return output;
  }

// Another Solution

