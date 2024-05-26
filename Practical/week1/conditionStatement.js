//IF ELSE STATEMENT

let age = 18;
if (age >= 18){
    console.log("You are an adult");
} else if (age>= 13){
    console.log("You are a teenager.")
}
else{
    console.log("You are a baby.")
}

let num=2 ;
if (num==1){
    console.log("Sunday");
}
else if (num==2){
    console.log("Monday");
}
else if (num==3){
    console.log("Tuesday");
}
else if (num==4){
    console.log("Wednesday");
}
else if (num==5){
    console.log("Thursday");
}
else if (num==6){
    console.log("Friday");
}
else if (num==7){
    console.log("Saturday");
}
else{
    console.log("Invalid");
}

//SWITCHCASE
let day=0;
switch(day){
    case 1: // value check
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tueday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
            console.log("Friday");
            break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day");
        break;

}

let days="Sunday";
switch(days){
    case "Sunday": // value check
        console.log("Sunday");
        break;
    case "Monday":
        console.log("Monday");
        break;
    case "Tueday":
        console.log("Tueday");
        break;
    case "Wednesday":
        console.log("Wednesday");
        break;
    case "Thursday":
        console.log("Thursday");
        break;
    case "Friday":
            console.log("Friday");
            break;
    case "Saturday":
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day");
        break;

}

//question1 
let number = 2;
if(number>0){
    console.log("The number is positive")
}
else if (number<0) {
    console.log("The number is negative.")
}
else{
    console.log("Zero")
}

let num1= -9;
switch (true){
    case (num1>0):
        console.log("Positive");
        break;
    case(num1<0):
        console.log("Negative");
        break;
    default:
        console.log("Invalid");
    break;
}

//question2
let old= 12;
if (old>=18){
    console.log("You are eligible to vote.")
}
else{
    console.log("You are not eligible to vote.")
}

//question3
let dayss="Sunday";
switch(dayss){
    case "Sunday": // value check
        console.log("Sunday");
        break;
    case "Monday":
        console.log("Monday");
        break;
    case "Tueday":
        console.log("Tueday");
        break;
    case "Wednesday":
        console.log("Wednesday");
        break;
    case "Thursday":
        console.log("Thursday");
        break;
    case "Friday":
            console.log("Friday");
            break;
    case "Saturday":
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day");
        break;

}

//question4
let chars = "mango";
if (chars.length>10){
    console.log("It has more than 10 characters.");
} else if (chars.length<10){
    console.log("It has less than 10 characters.");
}
else {
    (console.log("It has 10 characters."));
}

//question5
let marks = 80;
if (marks>=90){
    console.log("A+");
}
else if (marks>=80){
    console.log("A");
}
else if (marks>=70){
    console.log("B+");
}
else if (marks>=60){
    console.log("B");
}
else if (marks>=50){
    console.log("C+");
}
else {
    console.log("Fail")
}

//question6
let month= "2";
switch(true){
    case month==1:
        console.log("31 days");
        break;
    case month==2:
        console.log("28 days");
        break;
    case month==3:
        console.log("31 days");
        break;
    case month==4:
        console.log("30 days");
        break;
    case month==5:
        console.log("31 days");
        break;
    case month==6:
        console.log("30 days");
        break;
    case month==7:
        console.log("31 days");
        break;
    case month==8:
        console.log("31 days");
        break;
    case month==9:
        console.log("30 days");
        break;
    case month==10:
        console.log("31 days");
        break;
    case month==11:
        console.log("30 days");
        break;
    case month==12:
        console.log("31 days");
        break;
    default:
        console.log("Invalid");
        break;

}

//question7
let year= 2024;
if (year%4 === 0 && year%100!==0) {
    console.log("Leap yaer");
}
else {
    console.log("Leap year");
}

//BMI
let height= 1.55;
let weight= 43;
let bmi = weight/((height)^2);

if (bmi<18.5){
    console.log("Under weight");
}
else if (bmi>18.5){
    console.log("Healthy weight");
}
else if (bmi>25.0){
    console.log("Overweight");
}
else{
    console.log("Obesity");
}

let height1= 1.55;
let weight1= 43;
let bmi1= weight/((height)^2);
switch (true){
    case (bmi1<18.5):
        console.log("Under weight");
        break;
    case (18.5<= bmi1 < 25.0):
        console.log("Normal weight");
        break;
    case (bmi1>25.0):
        console.log("Over weight");
        break;
    default:
        console.log("Obese");
        break;
}

//odd or eve 
let digit=1;
if (digit%2==0){
    console.log("Even");
}else{
    console.log("Odd");
}
