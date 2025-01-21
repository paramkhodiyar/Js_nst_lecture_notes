// Arrow functions in javascript 
// Arrow functions are a new way to write functions in javascript
// Arrow functions have a shorted syntax for writing functions in javascript, they are easy to read and debug.
// Arrow functions are anonymous functions, they do not have a name.
// If we keep the tradiotional function nameless, it will throw an error.

// Syntax for arrow functions: 
let arrowFunction = () => {
    console.log("This is an arrow function");
}
arrowFunction(); // This is an arrow function
// 'arrowFunction' is a variable that holds the function.

// Arrow functions with parameters

let arrowFunctionWithParameters = (a, b) => {
    console.log(a + b);
}
arrowFunctionWithParameters(10, 20); // 30

// This allows to assign function in a variable.
// 

() => {
    // body
}
// This is an arrow function too, which is not assigned to any variable.

let mul = (a,b)=>{
    return a*b;
}
console.log(mul); // undefined will be printed on the console.
let result = mul(2,3); // To store the result of the function in a variable.
console.log(result); // 6

// Very important point to note is that the
// mul variable doesnt hold the returning value of the function, it holds the function itself, so we need to store the returning value of the function in another variable.

let sum = 5;
sum = [];
sum = "hello"
console.log(typeof sum); // string
sum = ()=>{};
console.log(typeof sum); // function


const add = (a,b) => a+b; // This is a short hand syntax for writing arrow functions.


// All the methods of creating functions in javascript : 


// 1. Traditional functions
function add(a,b){
    return a+b;
}
console.log(add(2,3)); // 5

// 2. arrow functions(short hand syntax)
const add = (a,b) => a+b;
let res = add(2,3);
console.log(res); // 5

// 3. arrow functions(long hand syntax)
let add = (a,b) => {
    return a+b;
}
let ans = add(2,3);
console.log(ans); // 5



// Higher order functions and callback functions in javascript

// Higher order functions are functions that take other functions as arguments or return functions as output.
// Callback functions are functions that are passed as arguments to other functions.
// Callback functions are executed inside the higher order functions.


const order = (callback) => {
    callback();
} // callback now has the value of print function. because we are passing the print function as an argument to the order function.

const print = () => {
    console.log("This is a callback function");
}
order(print); 
// Very important to note :
// here the print function is passed as an argument to the order function. which initially had callback function, so now the callback function has the value of print function. and hence the order function has the value of callback ie print function. so when we call the order function, it will execute the print function.


const operations = (type,a,b,addcallback,subcallback,mulcallback) => {
    if(type === "add"){
        addcallback(a,b);
    }else if(type === "sub"){
        subcallback(a,b);
    }else if(type === "mul"){
        mulcallback(a,b);
    }
}
const add = (a,b) => a+b;
const sub = (a,b) => a-b;
const mult = (a,b) => a*b;

operations("add",2,3,add,sub,mult); // Output : 5
operations("sub",2,3,add,sub,mult); // Output : -1
operations("mul",2,3,add,sub,mult); // Output : 6

function modify() {
    let arr1 = [10, 20, 30];
    const arr2 = [40, 50, 60];

    arr1.push(arr2);
    arr1.pop();
    arr2[0] = 99;

    console.log("Array 1:", arr1);
    console.log("Array 2:", arr2);
} 
modify();
//output :

const callme = () =>{
    console.log("This is a callback function");
}
const data = callme();
console.log(data); // undefined


const modifyArray = function() {
    const modifiedArr = [...arr1];

    if (modifiedArr[3] === 40) {
        modifiedArr[3] = 99;
    } else if (modifiedArr[3] === 50) {
        modifiedArr[3] = 10;
    } else {
        modifiedArr[3] = 20;
    }

    console.log("arr", arr1);
    console.log("modifiedArr", modifiedArr);
};

const arr1 = [10, 20, 30, 40, 50];
modifyArray(arr1);


const check = (param)=>{
    if (param%2===0){
        return Even;
    } else {
        return Odd;
    }
}
const iseven = check(10);
console.log(iseven) 

const add = (a,b) => {
    let ans = a+b;
    if (ans>100){
        return "Great"; 
    } else {
        return "Small"
    }
}
const resu = add(10,20);
console.log(resu)


const greet = (message,callback)=>{
    const b = "hello"+ message;
    callback(b); // this is important to note that the callback function is called here. which is passed as an argument to the greet function. 

}
const printa = (a)=>{
    console.log(a);
}
greet("world",printa); // hello world
