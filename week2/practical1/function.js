 let first= 'dee';
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
