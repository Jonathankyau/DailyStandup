
// Daily Standup Problem

// Day 02
// From: https://www.codewars.com/kata/514a024011ea4fb54200004b

// Make sure you understand these before taking a look at the question:
// Replace (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
// Split (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) 

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet




// Hint: Use replace on the parts of the url you want gone. You can replace with an empty string ''. Then split the string using . as the seperator and take the first part [0]

//Solution:

function domainName(url){
    let sourceString = url.replace('http://','').replace('https://','').replace('www.','').split(/[/?#]/)[0];
     let domain = sourceString.split(".")[0];
     return domain;
}
