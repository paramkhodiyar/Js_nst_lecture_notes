function fetchdata(callback) {
  setTimeout(() => {
    console.log("Fetching data...");
    let data = "It is confirmend that peter parker is spiderman";
    callback(data);

  }, 4000);
}
function processdata(para){
    console.log("Data received:",para);

}
console.log("start");
setTimeout(() => {
    console.log("waiting for data");
}, 2000);
fetchdata(processdata);

// Setinterval : It is used to run a function at regular intervals
// Syntax : setInterval(function, milliseconds);
// Example :
setInterval(() => {
    console.log("setinterval");
}, 2000);
// It will print setinterval every 2 seconds
// clearInterval : It is used to stop the setInterval function
// Syntax : clearInterval(id_of_setinterval);
// Example :
let id = setInterval(() => {
    console.log("setinterval");
}, 2000);
clearInterval(id);

// async function makeWebsiteFun() {
//     console.log("Starting to make the website fun...");
//     await new Promise(resolve => setTimeout(resolve, 3000));
//     console.log("Adding fun elements to the website...");
//     // Add your fun elements here, for example:
//     document.body.style.backgroundColor = "black";
//     let funElement = document.createElement("div");
//     funElement.innerText = "🎉 Fun Element 🎉";
//     funElement.style.color = "yellow";
//     funElement.style.fontSize = "2em";
//     funElement.style.textAlign = "center";
//     document.body.appendChild(funElement);
//     console.log("Website is now fun!");
// }

// setTimeout(() => {
//     makeWebsiteFun();
// }, 11000);

// async function showCounter() {
//     let counter = 10;
//     let counterElement = document.createElement("div");
//     counterElement.style.fontSize = "3em";
//     counterElement.style.textAlign = "center";
//     document.body.appendChild(counterElement);

//     while (counter >= 0) {
//         counterElement.innerText = `Counter: ${counter}`;
//         await new Promise(resolve => setTimeout(resolve, 1000));
//         counter--;
//     }
//     counterElement.innerText = "Time's up!";
// }

// showCounter();
// async function showCounter() {
//     let counter = 10;
//     let counterElement = document.createElement("div");
//     counterElement.style.fontSize = "3em";
//     counterElement.style.textAlign = "center";
//     document.body.appendChild(counterElement);

//     let intervalId = setInterval(() => {
//         counterElement.innerText = `Counter: ${counter}`;
//         counter--;
//         if (counter < 0) {
//             clearInterval(intervalId);
//             counterElement.innerText = "Time's up!";
//         }
//     }, 1000);
// }

// showCounter();

// console.log("1")

// setTimeout (() => {
//     console.log("1n?")
// }, 1000)
// setTimeout (() => {
//     console.log("2n?")
// }, 0)
// console.log("end")

// console.log("Start");

// setTimeout(() => {
//   console.log("First timeout");

//   setTimeout(() => {
//     console.log("Nested timeout");

//     setTimeout(() => {
//       console.log("Deeply nested timeout");
//     }, 1000);

//   }, 1000);

// }, 2000);

// console.log("End");
 

let count = 0;

console.log("Start");

setInterval(() => {
  count++;
  console.log("Interval running:", count);
}, 1000);

console.log("End");


function repeatMessage(message, interval) {
  let intervalId = setInterval(() => {
    console.log(message);
  }, interval);

  return function stopRepeating() {
    clearInterval(intervalId);
    console.log("Interval cleared.");
  };
}

let stop = repeatMessage("Hello, World!", 2000);

// To stop the interval, you can call the stop function after some time
setTimeout(() => {
  stop();
}, 10000);

function executeWithCount(count) {
  let executionCount = 0;
  let intervalId = setInterval(() => {
    executionCount++;
    console.log("Interval has been executed " + executionCount + " time(s)");
    if (executionCount === count) {
      clearInterval(intervalId);
    }
  }, 1000);

  setTimeout(() => {
    console.log("Interval execution stopped");
  }, (count + 1) * 1000);
}

executeWithCount(5);

return function createThrottle(fn, delay) {
  let lastTime = 0;

  return (...args) => {
    let currentTime = Date.now();
    if (currentTime - lastTime > delay) {
      fn(...args);
      lastTime = currentTime;
    }
  };
};


function authenticateUser(username, password, users) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (users[username] && users[username] === password) {
        resolve(`Login successful for user: ${username}`);
      } else {
        reject("Authentication failed. Invalid username or password.");
      }
    }, 3000);
  });
}

const users = {
  "admin": "password",
  "user1": "password1",
  "user2": "password2",
  "user3": "password3",
  "user4": "password4",
};

// Example usage:
authenticateUser("user1", "password1", users)
  .then(message => console.log(message))
  .catch(error => console.log(error));



  Promise.myAllSettled = function(promises) {
    return new Promise((resolve) => {
      let results = [];
      let completed = 0;

      promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then(value => {
            results[index] = { status: "fulfilled", value: value };
          })
          .catch(reason => {
            results[index] = { status: "rejected", reason: reason };
          })
          .finally(() => {
            completed++;
            if (completed === promises.length) {
              resolve(results);
            }
          });
      });
    });
  };

  // Example usage:
  const promise1 = Promise.resolve(42);
  const promise2 = Promise.reject("Error occurred");
  const promise3 = new Promise((resolve) => setTimeout(resolve, 1000, "Hello"));

  Promise.myAllSettled([promise1, promise2, promise3])
    .then(results => console.log(results));



    Promise.myRace = function (arr) {
      return new Promise((resolve) => {
        for (let i = 0; i < arr.length; i++) {
          Promise.resolve(arr[i])
            .then((value) => {
              resolve(value);
            })
            .catch((error) => {
              resolve(error);
            });
        }
      });
    };