// CHALLENGE
// Double sort
// https://www.codewars.com/kata/57cc79ec484cf991c900018d

// You will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.

// Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.

// Note that numbers written as strings are strings and must be sorted with the other strings.

// dbSort([6, 2, 3, 4, 5]), [2, 3, 4, 5, 6]
// dbSort([14, 32, 3, 5, 5]), [3, 5, 5, 14, 32]
// dbSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]
// dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]), [0,2,2,"Apple","Banana","Mango","Orange"]
// dbSort(["C", "W", "W", "W", 1, 2, 0]), [0,1,2,"C","W","W","W"]
// dbSort(["Apple",46,"287",574,"Peach","3","69",78,"Grape","423"]), [46, 78, 574, '287', '3', '423', '69', 'Apple', 'Grape', 'Peach'] 

// Hint: filter and sort the numbers into one var and then filter and sort the strings into another var then concat

// Solution

function numeAndStrSort(arr) {
    let nums = arr.filter(e => typeof e === 'number').sort((a,b) => a-b)
    let str = arr.filter(l => typeof l === 'string').sort((a,b) => a-b) // can also use just .sort() but current answer is more specific
    return nums.concat(str)
}