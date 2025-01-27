function parent(callback){
    return callback
}
function callback(){
    return "Hello from parent"
}
console.log(parent(callback()))
function parent() {
    return function() {
        return "Hello from parent";
    }
}

const childFunction1 = parent();
console.log(childFunction1());

// Higher order functions are functions that operate on other functions, either by taking them as arguments or by returning them. In simpler terms, a higher order function is a function that can do one of the following things:
// 1. Take one or more functions as arguments
// 2. Return a function as its result
// For example : 
function parent(callback){
    return callback
}
function callback(){
    return "Hello from parent"*2
}
console.log(parent(callback())) // NaN
// The above code will throw an error because the callback function is not returning a number, it is returning a string.
// To fix this issue, we can return a number from the callback function.
function parent(callback){
    return callback
}
function callback(){
    return 2
}
console.log(parent(callback())) // 2

// To multiply the string by 2, we can use the following code:
function parent(callback){
    return callback
}
function callback(){
    return "Hello from parent".repeat(2)
}


function parent(callback){
    return function callback() {
        return 10 + 20
    }
}
const childFunction = parent();
console.log(childFunction());

function parent(callback) {
    return callback();
}

function callback() {
    return "Callback executed";
}


console.log(parent(callback)); // Output: "Callback executed"



function parent(callback) {
    return callback(5);
}

function callback(num) {
    return num * 2;
}

console.log(parent(callback)); // Output: 10
function myFind(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return arr[i];
        }
    }
    return undefined;
}
function union(arr1, arr2) {
    let res = [...new Set([...arr1, ...arr2])];
    return res;
}

console.log(union([1, 2, 3], [3, 4, 5])); // Output: [1, 2, 3, 4, 5]
console.log(union([1, 2, 3, 4], [3, 4, 5, 6])); // Output: [1, 2, 3, 4, 5, 6]

function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}

console.log(sortArray([5, 3, 8, 1, 2])); // Output: [1, 2, 3, 5, 8]
console.log(sortArray([10, 4, 6, 3, 7])); // Output: [3, 4, 6, 7, 10]

function unionAndSort(arr1, arr2) {
    let unionArray = [...new Set([...arr1, ...arr2])];
    return unionArray.sort((a, b) => a - b);
}

console.log(unionAndSort([1, 2, 3], [3, 4, 5])); // Output: [1, 2, 3, 4, 5]
console.log(unionAndSort([5, 3, 8, 1, 2], [10, 4, 6, 3, 7])); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 10]