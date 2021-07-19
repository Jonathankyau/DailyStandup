
// Mega Summer Daily Standup Problem

// Day 06, Square(n) Sum

// Method Used:  Replace 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

// https://www.codewars.com/kata/514a024011ea4fb54200004b



//Solution:

function domainName(str){
	return str.replace('http://', '').replace('http://', '').replace('www.', '').replace('https://', '').split('.')[0]
}
console.log(domainName("http://github.com/carbonfive/raygun") == "github" )
console.log(domainName("http://www.zombie-bites.com") == "zombie-bites")
console.log(domainName("https://www.cnet.com") == "cnet")