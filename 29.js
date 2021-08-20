// CHALLENGE
// Algorithms in JavaScript
// https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038

// Given a phrase, reverse the order of the characters of each word.

// describe("Reverse Words", () => {
//     it("Should reverse words", () => {
//      assert.equal(reverseWords("I love JavaScript!"), "I evol !tpircSavaJ");
//     });
//    });
   
//    No Reverse Method! Unless that is your brute force...

// Hint: Split words and loop through each. Reverse each word by using our logic from Friday's question and push to an array. Join and return the array of reversed words

// Solution

function reverseWords(str){
    const revWords = []
    str.split(" ").forEach(w => {
        let currentWordRev = ""
        for(let i = w.length - 1; i >= 0; i--) {
            currentWordRev += w[i]
        }
        revWords.push(currentWordRev)
    })
    return revWords.join(" ")
}


console.log(reverseWords("I love dogs"))

// Another Solution
