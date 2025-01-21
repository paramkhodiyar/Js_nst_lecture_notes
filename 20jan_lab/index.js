function calculateTicketPrice(age, isWeekend, hasStudentCard) {
    let base = 12;

    if (age < 12) {
        base -= 5;
    }

    if (isWeekend) {
        base += 3;
    }

    if (hasStudentCard) {
        base -= 2;
    }

    return base;
}

function authenticateUser(username, callback, users) {
    let check = false;
    for (let i = 0; i < users.length; i++) {
        if (username === users[i]) {
            check = true;
            break;
        }
}
function calculateProduct(numbers) { 
    let product = 1; 
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] != 0) {
            product *= numbers[i];
        }
    }
    return product; 
}
}

var calculate = function(x, y, z = 8) {
    return x * y / z + z;
};

let ans = calculate(2, 6, 3);
console.log(ans); // Output: 7 as 2*6/3+3 = 7, step by step calculation: 2*6 = 12, 12/3 = 4, 4+3 = 7

// anonymous function
let sum = function(a, b) {
    return a + b;
};
console.log(sum(2, 3)); // Output: 5



// function() {
//     console.log("Hello World!");
// } // SyntaxError: Function statements require a function name


function greet(name = "Vishal Sir") {  
    return `Good Morning, ${name}!`;  
  }  
  console.log(greet(undefined)); 


  function isDivisible(dividend, divisor) {
    if (divisor!==0){
        return dividend/ divisor;
    } else {
        return 0
    }
}