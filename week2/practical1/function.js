/*  let first= 'dee';
let last= 'thapa';
function greet(first,last){
    console.log(`hello, ${first} ${last}`);
}
greet("dee", "thapa")
greet(first, last);

function greets(firstName,lastName){
    return(`hello, ${firstName} ${lastName}`);
}
const greeting = greets('dee', 'thapa');
console.log(greeting);

//calculations
function sum(a, b){
    return ( a+b);
}
const sums = sum(1,3);
console.log(sums);   

//FUNCTION EXPRESSION
// Anonymous Function - no function name only function keyword 
 let greet = function(name){ // storing function in a variable   
    console.log(name);
};
greet("Dee");

let sub= function(num1, num2){
    return(num1-num2) ;
};
console.log(sub(2,1)); 

//ARROW FUNCTION (ES6) // no function keyword required 
let multiply = (a, b ) => a*b;
console.log(multiply(2,2));

const add =(c,d) => {
    return c+d ;
    };
console.log(add(9,9));

//Constructor Function 
function Person(name, age){ //constructor
    this.name =name;
    this.age = age;
}
let john = new Person("John", 22);  //object 
console.log(john);
 */

//Constructor Function
/* function Person(name, age){
    this.name = name;
    this.age = age;
}
let John = new Person("John", 22);
console.log(John); */

//local scope= block scope, can be accessed within function 
//closure= variable of outer function can be used in inner function , local scope=global scope 
//callback fail, hail?  

//Callback function: sync to async- passing another function from one function in arguments instead of parameters 
/* function add(a,b){
    return a+b;
}
function printResult(){
    console.log("The result is printed below:");
}
            //convert into callback function 
function add(a,b, printResult){
    printResult();
    console.log('\n'); //line break
    return a+b;
}
let result= add(2,3,printResult);
console.log(result);

function printResult(){
    console.log("The result is printed below:");
}
 */
/* function sum(num1, num2, sub){
    console.log(sub);
    return num1+num2;
}

let print= sum(1,2, sub(1,2));
console.log(print);

function sub(num3, num4){
    return num3-num4;
} */
//Synchronous Function : executes one operation one at a time follows the pattern, by default: JS 

//Asynchronous Function : tries to solve same as synchrounous but takes the fastest route, by default: nodejs

//PROMISE: fulfilled, reject and pending : first parameter-resolve, sec parameter-reject
let promise = new Promise((resolve, reject) =>  {
let num1 = 39;
let num2 =25;
    let sub = num1-num2;
    if(sub<=5){
        resolve(`The sub value is ${sub}`);
    } else {
        reject("promise rejected.");
    }
});
promise.then((data) => {
    console.log(data);
}).catch((error)=>{
    console.error(error);
});
