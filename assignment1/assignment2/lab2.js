// task1
var fullname= "Deeshri Thapa";
var age = "21";
console.log(`My name is ${fullname}. I am ${age} years old.`)

//task2
var num = 10;
var  result= num * num;
console.log(result); 

//task3
let char = "D";
if (char >='A' && char<='Z')
{
    console.log("The given character is Uppercase.")
}    
else{
    console.log("The given character is lowercase.")
}

//task4
let firstnum= 5;
let secondnum= 12;

let sum = firstnum+ secondnum;
console.log("The sum of two numbers is ", sum);
let difference;
if (firstnum>=secondnum){
    difference= firstnum - secondnum
} else{
    difference = secondnum- firstnum
}
console.log("The difference is ",difference);

//task5
let price= 500;
let discount = 0.1;
let discountedPrice= price- (price*discount);
console.log("The price after the discount is  ", discountedPrice);