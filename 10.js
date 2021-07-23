// CHALLENGE
// Duplicate Encoder
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes


//input: always a single word, no leading or trailing space
//output: a string of parentheses
//We need to ignore case when counting duplicates!!

// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// Hint: Remember our past problem that used the index of character. How can you use index to find duplicates?

// Solution


function encoder(str){
	const chars = str.toLowerCase().split('')
	// let result = ''
  
	// for (let i = 0; i < chars.length; i++){
	//   if (chars.indexOf(chars[i]) === chars.lastIndexOf(chars[i])) {
	//     result += '('
	//   } else {
	//     result += ')'
	//   }
	// }
  
	return chars.map((el) => (chars.indexOf(el) === chars.lastIndexOf(el)) ? '(' : ')').join('')
  }
  
  // const duplicateEncode = word => word
  //   .toLowerCase()
  //   .replace(/./g, (m,i,a) => a.indexOf(m) !== a.lastIndexOf(m) ? ')' : '(')
  
  console.log(encoder('din'), '(((')
  console.log(encoder('recede'), '()()()')
  console.log(encoder('(( @'), '))((')
  console.log(encoder('Bob'), ')()')