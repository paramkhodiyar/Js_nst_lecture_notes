let a = [1,2,3,4,5,6,7,8,9];
console.log(...a);

let arr = [10,20,30,40,50]
let max = 0;
for (i=0;i<arr.length;i++){
    if (arr[i]>max){
        max = arr[i];
    }
}
console.log(max);

// or

console.log(Math.max(...arr))


function add(a,b,...res){
    return res
}
console.log(add(2,3)) // res when no number is passed after the arguments then it becomes a empty arr
console.log(add(2,3,4,5,6,7,8,9)) // now res has 4 to 9 space separated


function sum1(x,y,...res){
    let ans = x+y
    for (let i = 0; i<res.length;i++){
        ans+=res[i]
    }
    return ans
}
console.log(sum1(2,3,4,5,6,7,8,9)) //44


// Rest Operator (... in function parameters): Collects multiple arguments into an array.
// Spread Operator (... in function calls, array literals, or object literals): Expands an array or object into individual elements.

let array = [1,2,3,4,5,6,7,8,9]
let n = array.length
console.log(sum1(0,0,...array)) // output : 45

// passing an array in the rest operator can yeild us the sum of the given array with the same function which uses rest and spread operator.


const p = ["a","b","c","d","e","f","g","h","i","j"]
p.sort()
console.log("sorted array: ",p) // output: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' ]

const arr3 = ["A","a","B","b","C","c","D","d","E","e"]
arr3.sort()
console.log("sorted array3: ",arr3) // output: [ 'A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e' ] as you can see the capital letters come before the small letters.

// to actually sort arr3 :
arr3.sort((a,b)=>a.localeCompare(b))
console.log("sorted array3: ",arr3) //


const numbers = [23,400,1000,500,26]
numbers.sort()
console.log("sorted numbers: ",numbers) // output: [ 1000, 23, 26, 400, 500 ] as you can see the numbers are not sorted in the correct order.
// to solve the issue:
const comparefunc = (a,b)=>a-b;
numbers.sort(comparefunc)
console.log("sorted numbers: ",numbers) // output: [ 23, 26, 400, 500, 1000 ] now the numbers are sorted in the correct order.


// the logic of comparefunc is that if a-b is negative then a comes before b in the sorted array and if a-b is positive then b comes before a in the sorted array.

let ch = [1,2,3,4,100,200]
// find 100 in the array
ch.find((element)=>element===100) // output: 100    

const ages = [10,20,30,40,50,60,70,80,90]
function checkage(age){
    return age>=18
}
const validage = ages.find(checkage) // output: 20

const numbers1 = [40, 10, 100, 25, 50];
numbers1.sort((a, b) => a - b);
console.log(numbers1); //
