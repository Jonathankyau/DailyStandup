// CHALLENGE
// Fibonacci
// https://www.youtube.com/watch?v=hISXxjX6Ino
// https://www.youtube.com/watch?v=vYquumk4nWw

// Solution

const memo = {}
var fib = function(n) {
    if(n <= 1){
        return n
    }else if( memo[n] ){
        return memo[n]
    }else{
        let result = fib(n - 1) + fib(n - 2)
        memo[n] = result
        return result
    }
};

console.log(fib(5))


// Another Solution
    