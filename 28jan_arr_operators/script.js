// Iteration methods  in JavaScript : forEach, map, filter, reduce, some, every, find, findIndex
// 1. forEach
    // Syntax :
    // array.forEach(function(currentValue, index, arr), thisValue)

    // Example
    let arr = [1, 2, 3, 4, 5];
    arr.forEach((element, index, arr) => {
        console.log(element, index, arr);
    }); // 1 0 (5) [1, 2, 3, 4, 5] for each element

    // Example 2
    const arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    function printeven(ele,index){
        if(ele%2==0){
            console.log("Even number is : ",ele);
        } else {
            console.log("Odd number is : ",ele);
        }
    }
    arr1.forEach(printeven); //
    
    

    // Benifits of forEach method includes that it is easy to use and understand, it is a good choice when you want to perform an action on each element of an array. Looping over an array is a common task, and the forEach method is a good way to do this.

// 2. map
    // Useful when we need to modify each and every element of the array
    // Syntax
    // array.map(function(currentValue, index, arr), thisValue)

    // Example : To return the square of each element of the array
    let temp = [2,10,5,8,3];
    function square(ele,index){
        return ele*ele;
    }
    let result = temp.map(square);
    console.log("The original array is : ",temp);
    result.sort((a,b) => a-b);
    console.log("The sqaured and sorted arr is: ",result); 
    result.sort((a,b) => b-a);
    console.log(result);

    // If the function square was empty or any callback function was not passed then it will return the same array as the output
    
    // Example 2
    let arrp = [1, 2, 3, 4, 5];
    function sqeven(ele,index){
        
    }
    let result1 = arrp.map(sqeven);
    console.log(result1); 
    // Returns the array of undefined values because the callback function is empty and an empty function returns undefined, since the map function returns an array of same length of the arr it is passed for, thus, undefined get stores at each index of the array.

    // Example : Convert Celsius to Fahrenheit
    let celsiusTemps = [0, 10, 20, 30, 40, 50, 60];
    function celsiusToFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }
    let fahrenheitTemps = celsiusTemps.map(celsiusToFahrenheit);
    console.log("Temperatures in Fahrenheit: ", fahrenheitTemps);

// 3. filter
    // It is used to filter out the elements of the array based on the condition
    // Syntax
    // array.filter(function(currentValue, index, arr), thisValue)
    
    // Example : To filter out the numbers greater than 5 :
    let arrf = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    function greaterThanFive(ele,index){
        return ele>5;
    }
    let resultf = arrf.filter(greaterThanFive);
    console.log("The original array is : ",arrf);
    console.log("The filtered array is (greater than 5) : ",resultf);
    
// 4. reduce
    // It is used to reduce the array to a single value based on the condition provided in the callback function.
    // Rough example : To find the sum of all the elements of the array
    // Syntax
    // array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
    // The first argument is the callback function which is used to reduce the array to a single value
    // The second argument is the initial value of the accumulator
    const arrayparam = [1, 2, 3, 4, 5];
    function sum1(acc,ele,index){
        
            return acc+ele;
        }
    const data = arrayparam.reduce(sum1,0);
    console.log("The sum of the array is : ",data); // 15
    