function findTax(salary) {
    let tax;
    switch (true) {
        case (salary <= 0):
            return "Salary not valid";
        case (salary <= 500000):
            tax = 0;
            break;
        case (salary > 500000 && salary <= 1000000):
            tax = salary * 0.1;
            break;
        case (salary > 1000000 && salary <= 1500000):
            tax = salary * 0.2;
            break; // Added missing break statement
        case (salary > 1500000):
            tax = salary * 0.3;
            break;
        default:
            return "Salary not valid";
    }
    return tax;
}


function celsiusToFahrenheit(c) {
    if (c < -273.15 || c > 1000) {
        return "Temperature not valid";
    }
    let fahrenheit = Math.round(c * 9 / 5 + 32);
    console.log(fahrenheit);
}

// Example usage:
let c = 25; // Example Celsius value
celsiusToFahrenheit(c);
// for the given 'month' write the code.
let month = "january"; // Example month value
switch (month.toLowerCase()) {
    case "january":
        console.log("31 days");
        break;
    case "february":
        console.log("28 or 29 days (leap year)");
        break;
    case "march":
        console.log("31 days");
        break;
    case "april":
        console.log("30 days");
        break;
    case "may":
        console.log("31 days");
        break;
    case "june":
        console.log("30 days");
        break;
    case "july":
        console.log("31 days");
        break;
    case "august":
        console.log("31 days");
        break;
    case "september":
        console.log("30 days");
        break;
    case "october":
        console.log("31 days");
        break;
    case "november":
        console.log("30 days");
        break;
    case "december":
        console.log("31 days");
        break;
    default:
        console.log("Invalid month");
        break;
}

let n = 5; // Example size of the diamond

for (let i = 1; i <= n; i++) {
    for (let k = n; k > i; k--) {
        process.stdout.write(" ");
    }
    for (let j = 0; j < (2 * i - 1); j++) {
        process.stdout.write("* ");
    }
    process.stdout.write("\n");
}

for (let i = n - 1; i >= 1; i--) {
    for (let k = n; k > i; k--) {
        process.stdout.write(" ");
    }
    for (let j = 0; j < (2 * i - 1); j++) {
        process.stdout.write("* ");
    }
    process.stdout.write("\n");
}
for (let i = 0; i < n - 1; i++) {
    let line = "";
    for (let j = 0; j < i + 1; j++) {
        line += "  ";
    }
    for (let k = 0; k < n - i - 1; k++) {
        line += "* ";
    }
    console.log(line);
}



