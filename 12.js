// CHALLENGE
// Max-min arrays
// https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c

// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

// Test.assertEquals(switcher(['24', '12', '23', '22', '4', '26', '9', '8']), 'codewars');
// Test.assertEquals(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']), 'btswmdsbd kkw'); 
// Test.assertEquals(switcher(['4', '24']), 'wc'); 

// Hint: index of alphabet string or charCode?

// Solution

function switcher(strArr) {
    // make a string of the alphebet reversed + the extra characters
    const alpha = '_zyxwvutsrqponmlkjihgfedcba!? '
    // map strArr to the corresponding character based on the its index in my alphabet string
    return strArr.map(num[num]).join('')
}