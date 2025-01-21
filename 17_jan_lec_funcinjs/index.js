// Revision
marks_stud = 85;
let grade = (marks_stud >= 90) ? "Outstanding" : 
        (marks_stud >= 80) ? "Good" : 
        (marks_stud >= 70) ? "Avg" : 
        (marks_stud >= 60) ? "Bad" : 
        "Failed";
// console.log(grade);

/* 
Functions : 

1.Function Declaration

    function func_name() {
        // code
    }

Note :  if function doesnt return anything then it returns undefined by default. similary to draw comparisions with python we can say that if a function doesnt return anything then it returns None by default.

2. Higher Order Functions : Functions that take another function as an argument or return a function are called Higher Order Functions.
    syntax :
        function func_name(func) {
            // code
        }
*/

function greet() {
    console.log("Hello World!");
}
greet();



function multi(a,b,c,d){
    console.log(a*b*c*d);
}
multi(2,3,4); // NaN
// To avoid NaN, we can provide default values to the parameters
function multi(a=1,b=1,c=1,d=1){
    console.log(a*b*c*d);
}
multi(2,3,4); // 24



console.log(typeof NaN); // number

