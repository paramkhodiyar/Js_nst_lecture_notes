document.addEventListener("DOMContentLoaded", function() {
    const text = "Object methods in JS";
    let i = 0;
    const speed = 100; // typing speed in milliseconds
    const h1 = document.getElementById("typing-text");

    function typeWriter() {
        if (i < text.length) {
            h1.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            h1.classList.add("typing");
        }
    }

    typeWriter();
});

// Object keys in js :
// Object.keys(obj_name) : This method returns an array of a given object's own property names, in the same order as we get with a normal loop.
// Syntax : Object.keys(obj)
// Example :
let obj = {
    name: "John",
    age: 30,
    city: "New York"
};
let ans = Object.keys(obj); 
console.log(ans); // ["name", "age", "city"]
ans = Object.values(obj);
console.log(ans); // ["John", 30, "New York"]

function modifyobject(obj){
    obj.name = "paramk"
    obj.age = 19
}
modifyobject(obj);
console.log(obj); // {name: "paramk", age: 30, city: "New York"}

// Object.values(obj_name) : This method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.

const copy = {...obj};
console.log(copy); // creates a shallow copy of the object any change to the copy object will not affect the original object
copy.name = "new name";
console.log("shallow copy:",copy);
console.log("original obj:",obj);


const a = {"a":1,b:{c:2,nested:{d:3}}};
const b = {...a}; // when a is a nested object even then it creates a shallow copy
b.b.c = 3;
console.log(a);
console.log(b); // original obj also gets affected

// Deep copy of the object ways to create: 

// 1. Structoredcloning : It is a process of copying an object and all of its properties, including nested objects, without changing the original object. It is a deep copy of the object.

//2. json stringify and parse method can be used to create a deep copy of the object

//3. custom deep copy function

const testobj = {a:1,b:{c:2,nested:{d:3}}};
const copytobj = structuredClone(testobj);
const anotherone = JSON.stringify(testobj);
let answer = JSON.parse(anotherone);
answer.b.c = "gatorade";
copytobj.b.c = "naya";
console.log("original:",testobj);
console.log("deep copy created using structured clone : ",copytobj);
console.log("deep copy created using json stringify and parse : ",answer);

const objt = { a: 1, b: 2, c: 3 }; 
const sum = Object.values(objt).reduce((acc, value) => acc + value); 
console.log(sum)





