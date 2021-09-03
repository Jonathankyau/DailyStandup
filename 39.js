// CHALLENGE
// Greatest Common Divisor (keep in bag of tricks)
// https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd/

// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

// Test.assertEquals(mygcd(30,12),6)
// Test.assertEquals(mygcd(8,9),1)
// Test.assertEquals(mygcd(1,1),1)

// Hint: return y == 0 ? x : mygcd(y, x % y)

// Solution

function great(x,y){
    return y === 0 ? x : great(y, x % y)
}


// Another Solution
    