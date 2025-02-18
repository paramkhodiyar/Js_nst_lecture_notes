document.addEventListener("DOMContentLoaded", function() {
    const text = "Promises concept in JS";
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

// Promises in JS :
// A promise is an object representing the eventual completion or failure of an asynchronous operation. It is a returned object to which you attach callbacks, instead of passing callbacks into a function. It is a placeholder for future work, a guarantee that something will happen in future but not an immediate action.

// A promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation completed successfully. Promise consumption happens when the promise is fulfilled. It means what we will do after the promise is fulfilled.
// rejected: meaning that the operation failed.


//example basic:

/* 


function cb(resolve, reject){
   
}
const prom = new promise(cb);


// console.log(promise) // promoise resolver undefined if no callback function is passed in it
// after passing an empty function it gives promise pending in the console of the browser.


*/

// example medium - resolve :

/*

function promisecb(resolve, reject){
    resolve("Promise is resolved");
}
const promise = new Promise(promisecb);
console.log(promise); // Promise {<fulfilled>: "Promise is resolved"}

*/

//reject example --->

/*

function promisecb1(resolve, reject){
    reject("Promise1 is rejected");
    resolve("Resolved"); // doesnt work after reject
}
const promise1 = new Promise(promisecb1);
console.log(promise); // Promise {<rejected>: "Promise1 is rejected"}

*/
// promise and reject both in one promise :

/*

function checking(resolve, reject) {
    const age = 20; // You can change this value to test different scenarios
    if (age >= 18) {
        resolve("You are eligible to vote");
    } else {
        reject("You are not eligible to vote");
    }
}

const promise2 = new Promise(checking);
promise2.then(
    function(value) { console.log(value); }, // "You are eligible to vote"
    function(error) { console.log(error); }
);

*/
// Concept of then and catch in promises : used when promise is resolved or rejected, the aftermatch of the promise is handled using then and catch.

for (i = 0; i < 10; i++) {
    const promise4 = new Promise((resolve, reject) => {
        const val = Math.ceil(Math.random() * 10);
        if (val % 2 === 0) {
            setTimeout(() => {
                resolve(val);
            }, 1000);
        } else {
            setTimeout(() => {
                reject(val);
            }, 1000);
        }
    });
    console.log(promise4);
    function success(value) {
        console.log("Promise resolved with value:", value);
    }
    function failure(error) {
        console.log("Promise rejected with error:", error);
    }
    promise4.then(success).catch(failure);
    
}
// promise here is in pending state as it is not resolved or rejected yet. due to the reason that async functions are executed after the synchronous code is executed.

let age = 18;
let time = 1000;

function checkCanIVote(time, age) {
    const prom = new Promise((res, rej) => {
        if (age >= 18) {
            setTimeout(() => {
                res("You can vote");
            }, time);
        } else {
            setTimeout(() => {
                rej("You cannot vote");
            }, time);
        }
    });
    return prom.then(res => console.log(res)).catch(rej => console.log(rej));
}

checkCanIVote(time, age);

const myPromise = (value) =>
    new Promise((resolve, reject) => {
      if (value % 2 === 0) {
        resolve(`Resolved with even value: ${value}`);
      } else {
        reject(`Rejected with odd value: ${value}`);
      }
    });
  
  const promiseHandler = (value) =>
    myPromise(value)
      .then((result) => {
        console.log(`Success: ${result}`);
        return myPromise(value + 1);
      })
      .then((nextResult) => {
        console.log(`Next success: ${nextResult}`);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  
console.log(promiseHandler(3))

Promise.reject("Junk Food")
  .then(function(response){
    console.log(response);
    return Promise.reject("Inconsistency");
  })
  .catch(function(error) {
    console.log(error);
    return Promise.reject("Procrastination");
  })
  .catch(function(error){
    console.log(error);
    return Promise.reject("Fear of failure");
  })
  .catch(function(error) {
    console.log(error);
    return Promise.resolve("You made it champ :)");
  })
  .finally(function() {
    console.log("MileStone Achieved");
  })
  .then(function(error){
    console.log(error);
  });
