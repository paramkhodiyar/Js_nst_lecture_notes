document.addEventListener("DOMContentLoaded", function() {
    const text = "Promises Lecture 2 ";
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

/* Second lecture on promises */

/* 

API - Application Programming Interface, it is a set of rules and protocols that allows one software application to communicate with another. 

*/

const data = fetch("https://jsonplaceholder.typicode.com/todos")


function successCallback(response){
    response.json().then(val => {
        console.log(val);
    }
    )
}

function errorCallback(error){
    console.log(error);
}

data.then(successCallback).catch(errorCallback);

