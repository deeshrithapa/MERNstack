//**Q: Write a for loop that prints numbers from 1 to 5 in the console.**
for (i =1; i<=5; i++){
    console.log(i);
}

//**Q: Using a while loop, print even numbers from 2 to 10 (inclusive) in the console.**
let e=2;
while(e<=10){
    console.log(e);
    e+=2;
}

//**Q: Write a for loop to calculate the sum of numbers from 1 to 10.**
let sum=0;
for( j =1; j<=10; j++){
    sum+=j;
}
console.log("Sum of numbers from 1 to 10: "+ sum);

//**Q: Using a while loop, find the factorial of a given number (e.g., 5).**
let x = 5;
let facts=1;
while (x>=1 ){
    facts =facts*x;
    x--;
}
console.log(facts);

//**Q: Write a for loop that prints the square of numbers from 1 to 5.**
for ( a=1; a<=5;a++){
    sq=a*a;
    console.log(sq);
}


//**Q: Using a while loop, print the cube of numbers from 1 to 5.**
var b= 1;
while(b<=5){
    var cube = b*b*b;
    console.log(cube);
    b++;
}

//**Q: Write a for loop to iterate through an array of names and print each name in the console.**
var arrayName=["Ram", "Sara", "Riya"];
for (c=0; c< arrayName.length; c++){
    console.log(arrayName[c]);
}

//**Q: Using a while loop, find the sum of elements in an array of numbers.**
var arrayNum= [1,2,5];
var sumNum= 0;
var d=0;
while(d<arrayNum.length){
    sumNum+=arrayNum[d];
    d++
}
console.log("Sum is: "+ sumNum);

//**Q: Write a for loop that prints the elements of an array in reverse order.**
var arr = [1, 2, 3, 4, 5];
for (var f = arr.length - 1; f >= 0; f--) {
    console.log(arr[f]);
}

//**Q: Using a while loop, find the largest number in an array of numbers.**
var large=[12,22,32,44,1];
var g=0;
var max=0
while( g<large.length){
    if ( large[g]>max){
        max= large[g];
    }
    g++;
}
console.log("Highest number is "+ max);

//**Q: Write a for loop to calculate the sum of all even numbers from 1 to 20.**
var sumEven=0;
for( h=1; h<=20;h++ ){
    sumEven+=h;
}
console.log("Sum of even numbers: " +sumEven);

//**Q: Using a while loop, find the product of all odd numbers from 1 to 15.**
var j=1;
var pro=1;
while(j<=15){
    pro=pro*j;
    j++;
}
console.log("Product is: "+pro);

/*Q: Write a for loop to print the following pattern:**
*
**
***
****
*****
 */
let rows=5;
for(let k=1; k<=rows; k++){
    let line='';
    for(let l=1; l<=k; l++){
        line+="*"
    }
    console.log(line);
}


//**Q: Using a while loop, print the numbers from 10 to 1 in descending order.**
var nums= 10;
while( nums>=1){
    console.log(nums)
    nums--;
}

//**Q: Write a for loop to calculate the factorial of a given number (e.g., 6).**
let factorial=6;
for( m=1; m<=factorial; m++){
    factorial=factorial*m;
   }
console.log(factorial);

//**Q: Using a while loop, find the sum of digits of a given number (e.g., 123).**
var digits= 123;
var sums= 0;
while ( digits>0) {
    var dig= digits%10;
    sums+= dig;
    digits = Math.floor(digits/10);

}
console.log(sums);

/* Q: Write a for loop to print the following pattern:
55555
4444
333
22
1
 */
for (let o = 5; o >= 1; o--) {
    let line = '';
    for (let p = 0; p< o; p++) {
        line += o;
    }
    console.log(line);
}

//**Q: Using a while loop, print the first 10 Fibonacci numbers.**
let count = 0;
let fib1 = 0;
let fib2 = 1;

while (count < 10) {
    console.log(fib1);
    let nextFib = fib1 + fib2;
    fib1 = fib2;
    fib2 = nextFib;
    count++;
}


//**Q: Write a for loop to find and print the prime numbers between 1 and 20.**
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let r = 2; r <= Math.sqrt(num); r++) {
        if (num % r === 0) {
            return false;
        }
    }
    return true;
}

for (let num = 2; num <= 20; num++) {
    if (isPrime(num)) {
        console.log(num);
    }
}

//**Q: Using a while loop, reverse a given number (e.g., 12345).**
let numbr = 12345;
let reversedNumber = 0;

while (numbr > 0) {
    let digt = numbr % 10;       
    reversedNumber = (reversedNumber * 10) + digt; 
    numbr = Math.floor(numbr / 10); 

console.log(reversedNumber);  
}