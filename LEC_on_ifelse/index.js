

const iskycdone=true;

if(iskycdone){
    console.log("You can go to the next step");
} else{
    console.log("Please complete KYC")

}

// Note: null, undefined NaN, 0, false, "" are falsy values, all other values are truthy values
// Difference between & and && is that & is bitwise operator and && is logical operator meaning that if the first condition is false then it will not check the second condition in case of && but in case of & it will check the second condition as well.
// So in terms of functionality && is better than & as it will save time and resources.
// For any variable i we do i++ and i-- for increment and decrement respectively. i+=1 and i-=1 are also used for increment and decrement respectively.
// Switch statement is used when we have to check multiple conditions for a single variable. For example, if we have to check the day of the week then we can use switch statement.


const percentage = 80;

if (percentage >= 90){
    console.log("A+");
} else if (percentage < 90 && percentage>=80){
    console.log("A");
} else if (percentage < 80 && percentage>=70){
    console.log("B");
}  else if (percentage < 70 && percentage>=60){
    console.log("C");
} else{
    console.log("Fail");
}

//Using switch statement
const day = "Monday";

switch(day){
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
        console.log("Today is Saturday");
        break;
    case "Sunday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid Day");
}

// Ternary Operator is used to write if else in a single line. It is also called conditional operator.
// Syntax: condition ? expression1 : expression2
// If the condition is true then expression1 will be executed otherwise expression2 will be executed.

const age = 18;
let isholdinglicense = true;
const iseligibletodrive = (age >= 18 && isholdinglicense) ? "You can drive" : "You are not an adult yet!";
console.log(iseligibletodrive); // Output: You can drive


// Loops in javascript 
// For loop and while loop 
// Do while loop is also there but it is not used much. It is similar to while loop but the difference is that it will execute the code block at least once even if the condition is false.
// Syntex of for loop is for(initialization; condition; increment/decrement){}
// Syntex of while loop is while(condition){}

for (const i=0; i<5; i++){
    console.log(i);
} // Code wont run as i is constant and we cannot change the value of constant variable.

for (const i=0; i<5; i++){
    console.log("check",i);
    if (i===0){
        break;
    }
} // Code will run only once as we have used break statement. Wont give any error.
for (let i=0; i<5; i++){
    console.log(i);
} // Output: 0 1 2 3 4

for (let i=0;i++,i<5;){
    console.log(i);
} // Output: 1 2 3 4 5

// Note the difference between the above two codes, in the first code the value of i is printed first and then incremented but in the second code the value of i is incremented first and then printed.

// Arrays and objects in js
// Array is a collection of elements of same or different data types. It is a type of object. Similar to what we call list in python.
const arr = [1,2,3,4,5];
console.log(arr); // Output: [1,2,3,4,5]
console.log(arr[0]); // Output: 1
console.log(arr[5]); // Output: undefined, note its not an error, thats the speciality of js.
console.log(arr.length); // Output: 5

// Objects are similar to dictionaries in python. It is a collection of key value pairs. It is also a type of object.
const obj = {
    name: "John",
    age: 30,
    isAdult: true
}
console.log(obj); // Output: {name: "John", age: 30, isAdult: true}
console.log(obj.name); // Output: John
console.log(obj.age); // Output: 30
console.log(obj.isAdult); // Output: true
