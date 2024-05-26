//question1
let password= "Home";
if (password.length >=12){
    console.log("Strong Password");
}
else if (password.length>=8 ){
    console.log("Medium password");
}
else{
    console.log("Weak password")
}

//question2
let char = 'a';
let lowerChar = char.toLowerCase();
let vowels = ['a', 'e', 'i', 'o', 'u'];
if (vowels.includes(lowerChar)) {
    console.log(`${char} is a vowel.`);
} else if (lowerChar >= 'a' && lowerChar <= 'z') {
   
    console.log(`${char} is a consonant.`);
} else {
    
    console.log(`${char} is not a valid alphabet character.`);
}

//question3
let randomNum = Math.floor(Math.random() * 10) + 1;

let randomGuess = Math.floor(Math.random() * 1) + 1;

if(randomNum === randomGuess){
    console.log("Correct");
}
else if(randomNum>randomGuess){
    console.log("random number is greater than random guess");
}
else{
    console.log("random number is lower than random guess");
}

//ques 4
const readline = require('readline-sync');

function calculateFinalPrice(productPrice, taxRate) {
    if (isNaN(productPrice) || isNaN(taxRate)) {
        console.log("Please enter valid numbers for product price and tax rate.");
        return;
    }

    if (taxRate < 0 || taxRate > 100) {
        console.log("Tax rate must be between 0 and 100.");
        return;
    }

    var taxAmount = (productPrice * taxRate) / 100;

    var finalPrice = productPrice + taxAmount;

    console.log("Final price with tax:", finalPrice.toFixed(2));
}

var productPrice = parseFloat(readline.question("Enter the product price:"));
var taxRate = parseFloat(readline.question("Enter the tax rate (in percentage):"));

calculateFinalPrice(productPrice, taxRate);


//ques 5

function calculator() {
    var num1 = parseFloat(readline.question("Enter the first number: "));
    var operator = readline.question("Enter an operator (+, -, *, /): ");
    var num2 = parseFloat(readline.question("Enter the second number: "));

    if (operator === '+') {
        var result = num1 + num2;
    } else if (operator === '-') {
        var result = num1 - num2;
    } else if (operator === '*') {
        var result = num1 * num2;
    } else if (operator === '/') {
        if (num2 === 0) {
            console.log("Error! Division by zero.");
            return;
        } else {
            var result = num1 / num2;
        }
    } else {
        console.log("Invalid operator.");
        return;
    }

    console.log("Result:", result);
}

calculator();

//ques 6
function recommendMovieGenre(age) {
    var genre;

    switch (true) {
        case (age <= 12):
            genre = "Comedy";
            break;
        case (age <= 18):
            genre = "Fanatsy";
            break;
        case (age <= 35):
            genre = "Sci-fi";
            break;
        case (age <= 50):
            genre = "Documentary";
            break;
        default:
            genre = "Horror";
            break;
    }

    console.log(`Recommended movie  for age ${age} is ${genre}`);
}

var age = parseInt(readline.question("Enter your age:"));

recommendMovieGenre(age);

//ques 7
function isWeekend(date) {
    var dayOfWeek = date.getDay();

    if (dayOfWeek === 0 || dayOfWeek === 6) {
        return true; 
    } else {
        return false; 
    }
}

var userInput = readline.question("Enter a date (YYYY-MM-DD):");
var inputDate = new Date(userInput);

if (isNaN(inputDate.getTime())) {
    console.log("Invalid date format. Please enter date in YYYY-MM-DD format.");
} else {
    var result = isWeekend(inputDate);

    if (result) {
        console.log("The given date falls on a weekend.");
    } else {
        console.log("The given date does not fall on a weekend.");
    }
}

//ques 8
function checkNumber(number) {
    if (number > 0) {
        console.log(number + " is positive.");
    } else if (number === 0) {
        console.log(number + " is zero.");
    } else {
        console.log(number + " is negative.");
    }
}

var inputNumber = parseFloat(readline.question("Enter a number:"));

if (isNaN(inputNumber)) {
    console.log("Invalid input. Please enter a valid number.");
} else {
    checkNumber(inputNumber);
}

//ques 9
function checkDivisibility(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log(number + " is divisible by both 3 and 5.");
    } else if (number % 3 === 0) {
        console.log(number + " is divisible by 3.");
    } else if (number % 5 === 0) {
        console.log(number + " is divisible by 5.");
    } else {
        console.log(number + " is not divisible by 3 or 5.");
    }
}

var inputNumber = parseInt(readline.question("Enter a number:"));

if (isNaN(inputNumber)) {
    console.log("Invalid input. Please enter a valid number.");
} else {
    checkDivisibility(inputNumber);
}

//ques 10
function checkSum(number1, number2) {
    var sum = number1 + number2;

    if (sum % 2 === 0) {
        console.log("The sum of " + number1 + " and " + number2 + " is even.");
    } else {
        console.log("The sum of " + number1 + " and " + number2 + " is odd.");
    }
}

var inputNumber1 = parseFloat(readline.question("Enter the first number:"));
var inputNumber2 = parseFloat(readline.question("Enter the second number:"));

if (isNaN(inputNumber1) || isNaN(inputNumber2)) {
    console.log("Invalid.");
} else {
    checkSum(inputNumber1, inputNumber2);
}
