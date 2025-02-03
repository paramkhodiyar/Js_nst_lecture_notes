document.addEventListener("DOMContentLoaded", function() {
    const text = "Lecture on objects in js";
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

// Object in js
// Objects are used to store collections of data and more complex entities. Objects can be created using the object literal syntax, or with the new keyword.

// obj = {key1: value1, key2: value2, key3: value3} This is the basic syntax of an object in js.
// Mind that the keys are unique and obj values can have repititive values.

let obj = {}
console.log(typeof obj) // obj

let phone = {
  model:"iphone16_2024",
  color:"red",
  price:56999,
  offer:false,
  getdetails : function(){
    return "Khareed lo"
  }
}
// In JavaScript, object keys are always strings or symbols. 
// If you use a non-string value as a key, it will be converted to a string.

console.log(phone)


// Accessing values from key, dot notaion in js
console.log(phone.color) //red

// Bracket notation in js:
console.log(phone["price"]) //56999
console.log(phone["getdetails"]()) // khareed lo
console.log(phone.getdetails()) // khareed lo

// Rememeber to invoke function () has to be passed else it just stores the function. To check that
function namefunc (){
  return "this is a test to check calling"
}
const ans = namefunc
console.log(ans) // returns the whole code of the function

const testpass = namefunc()
console.log(testpass) // since the function was called, testpass now has the value which the function is supposed to return, hence "this is a test...." gets stored in the variable instead of the whole function code, the key thing to note here is that we need to call the function in order to access it with ().


// To add new keys and value to an already defined obj :
phone.earphonejack = false
console.log(phone)
console.log("does this phone have earphone jack: ",phone.earphonejack) //false

// It didnt have earphonejack key before.
// this method is also used to overwrite values of the already defined keys lets see :
console.log("Old price: ",phone.price)
phone.price = 60000
console.log("New price: ",phone.price)

const test = {
  a:{
    b:{
      c:{
        d:3
      }
    }
  }
}
console.log(test.a.b.c.d) //3 Nested objects lol

// when the key has space separated values then we need to use only bracket notation :

const check = {
  "name of the model" : "16series",
  "price":50000
}
// console.log(check."name of the model") will give error
console.log(check["name of the model"]) // 16series

// to remove a key value pair
delete phone.offer;
console.log(phone); // 'offer' key will be removed from the phone object