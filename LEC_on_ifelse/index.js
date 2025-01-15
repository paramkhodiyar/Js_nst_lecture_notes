

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