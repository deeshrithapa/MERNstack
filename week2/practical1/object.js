/* const person = {
    firstName:'John',
    age : 55,
    hobbies : ['Reading', 'gardening'],
};
console.log(person.firstName);
console.log(person.age);
console.log(person.hobbies);
 */

//SPREAD OPERATOR (...)- 3 dots syntax 
/* const arr =[1,2,3]
const newArr= [5,6,arr[0], arr[1], arr[2]];
console.log(`new array before spread is ${newArr}`);
const newArr1 = [5,6,...arr];
console.log(`spread ${newArr1}`);

const copyArr = [...arr];
console.log(`The copied array is ${copyArr}`);

const obj1 = {a:1, b:2};
const obj2 = {c:3, d:4};
const mergeObj = {...obj1, ...obj2};
console.log(mergeObj);
 */
//REST OPERATOR - can be used as parameter too
const arr2 = [1,2,3,4,5];
const[a,b,...rest1]= arr2;  //destructuring 
console.log(a);
console.log(b);
console.log(rest1);
const first = arr2[0];
const rest = arr2.slice(1);
console.log(`The first element is ${first}`);
console.log(`The rest element is ${rest}`);

//Collecting function arguments




