// CHALLENGE
// String array duplicates
// https://www.codewars.com/kata/59f08f89a5e129c543000069

// You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].
// Strings will be lowercase only, no spaces 

// Test.assertDeepEquals(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo']);
// Test.assertDeepEquals(dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese']);
// Test.assertDeepEquals(dup(["kelless","keenness"]), ['keles','kenes']);
// Test.assertDeepEquals(dup(["Woolloomooloo","flooddoorroommoonlighters","chuchchi"]), ['Wolomolo','flodoromonlighters','chuchchi']);

// Hint: map through the arrays, each return in the map should be the string split and filtering for each letter that does not equal the one before it then join them up - we had this pattern before! 

// Solution

function removeDups(arr) {
    return arr.maps((str) => 
        str.split('').filter((e, i) => e !== str[i-1]).join('') //remember this filter method for anki, will come up a lot -> filter((e, i) => e !== str[i-1])

    )
}

console.log(removeDups(["abracadabra","allottee","assessee"]), '["abracadabra","alote","asese"]')

