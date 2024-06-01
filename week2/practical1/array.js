/* let sum = function(num1, num2){
    return  num1+num2;
}
console.log(sum(9,0));

//FIND
const numbers = [10,20,30,40,50];
const foundNumber = numbers.find(
    (num)=> num>30
);
console.log(foundNumber);

//MAP
const number =[10,20,30,40,50];
const squaredNumber = number.map(
    num => num*num
);
console.log(squaredNumber);

//FILTER
const nums = [10,20,30,40,50];
const filterNumber = nums.filter(
    num => num>30
);
console.log(filterNumber)
 */

//REDUCE
function product(...numbers){
    return numbers.reduce((pro, num)=> pro*num, 1);
}
console.log(product(2,3,4));