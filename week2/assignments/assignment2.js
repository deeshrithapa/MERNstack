//1. Write a JavaScript function add that takes two numbers as arguments and returns their sum. Provide an example of calling this function with two numbers.
function add(num1, num2){
    return num1+num2;
}
let result = add(9,9);
console.log(add);

//2.Write a JavaScript function getFirstElement that takes an array as an argument and returns the first element of the array. Provide an example with an array of your choice.
function getFirstElement(arr) {
    return arr[0];
}
let array = [1, 2, 3, 4, 5];
let firstElement = getFirstElement(array);
console.log(firstElement); 

// 3.Define a JavaScript object person with properties name, age, and city. Write a function getPersonInfo that takes this object and returns a string with the person's details 
let person = {
    name: "Dee",
    age: 22,
    city: "Ktm"
};
function getPersonInfo(person) {
    return `Name: ${person.name}, Age: ${person.age}, City: ${person.city}`;
}
console.log(getPersonInfo(person));

//4. Write a JavaScript function toUpperCase that takes a string as an argument and returns the string in all uppercase letters. Provide an example with a sample string.
function toUpperCase(str) {
    return str.toUpperCase();
}
let sampleString = "Hello, World!";
let uppercaseString = toUpperCase(sampleString);
console.log(uppercaseString); 

//5. Write a JavaScript function multiply that takes two numbers as arguments and returns their product. Provide an example of calling this function with two numbers.
function multiply(a, b) {
    return a * b;
}
let results = multiply(6, 4);
console.log(results); 

//6. Write a JavaScript function getLastElement that takes an array as an argument and returns the last element of the array. Provide an example with an array of your choice.
function getLastElement(arr) {
    return arr[arr.length - 1];
}
let arrays = ["apple", "banana", "orange", "grape"];
let lastElement = getLastElement(arrays);
console.log(lastElement); 

//7. Define a JavaScript object book with properties title, author, and year. Write a function getBookTitle that takes this object and returns the title of the book.
let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};
function getBookTitle(book) {
    return book.title;
}
console.log(getBookTitle(book)); 

//8. Write a JavaScript function reverseString that takes a string as an argument and returns the string reversed. Provide an example with a sample string.
function reverseString(str) {
    return str.split("").reverse().join("");
}
let sampleStrings = "Hello, World!";
let reversedString = reverseString(sampleStrings);
console.log(reversedString); 

//9. Write a JavaScript function isEven that takes a number as an argument and returns true if the number is even and false if it is odd. Provide an example with a sample number.
function isEven(number) {
    return number % 2 === 0;
}
let sampleNumber = 7;
console.log(isEven(sampleNumber)); 

//10. Write a JavaScript function sumArray that takes an array of numbers as an argument and returns the sum of all the numbers in the array. Provide an example with an array of numbers.
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
let numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // Output will be 15

//11. Define a JavaScript object car with properties make, model, and year. Write a function getCarModel that takes this object and returns the model of the car.
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2022
};
function getCarModel(car) {
    return car.model;
}
console.log(getCarModel(car)); 

//12.Write a JavaScript function concatenateStrings that takes two strings as arguments and returns a new string that is the concatenation of the two input strings. Provide an example with two sample strings.
function concatenateStrings(str1, str2) {
    return str1 + str2;
}
let string1 = "Hello, ";
let string2 = "World!";
let concatenatedString = concatenateStrings(string1, string2);
console.log(concatenatedString); 

//13. Write a JavaScript function square that takes a number as an argument and returns its square. Provide an example of calling this function with a sample number.
function square(number) {
    return number * number;
}
let sampleNumbers = 5;
console.log(square(sampleNumbers)); 

//14. Write a JavaScript function findMax that takes an array of numbers as an argument and returns the largest number in the array. Provide an example with an array of numbers.
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
let numberss = [3, 7, 2, 8, 5];
console.log(findMax(numberss)); 

//15. Define a JavaScript object student with properties firstName, lastName, and grade.Write a function getFullName that takes this object and returns the full name of the student in the format &quot;firstName lastName&quot;.
let student = {
    firstName: "Dee",
    lastName: "Thapa",
    grade: "A"
};

function getFullName(student) {
    return student.firstName + " " + student.lastName;
}

console.log(getFullName(student)); 

//16.Write a JavaScript function greet that takes a name as an argument and returns a greeting string in the format &quot;Hello, [name]!&quot;. Provide an example of calling this function with a sample name.
greet = (name) => {
      return `Hello, ${name}!`;
    };
    console.log(greet("John"))

//17. Write a JavaScript function doubleArray that takes an array of numbers as an argument and returns a new array with each number doubled. Provide an example with an array of numbers.
doubleArray = (numbers) => {
  const doubledArray = [];
  for (let i = 0; i < numbers.length; i++) {
    doubledArray.push(numbers[i] * 2);
  }
  return doubledArray;
};
console.log(doubleArray([1, 2, 3])); 

//18. Define a JavaScript object movie with properties title, director, and releaseYear. Write a function getMovieTitle that takes this object and returns the title of the movie.
const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  releaseYear: 2010,
};
getMovieTitle = (movie) => {
  return movie.title;
};
console.log(getMovieTitle(movie)); 

//19. Write a JavaScript function getLength that takes a string as an argument and returns the length of the string. Provide an example with a sample string.
getLength = (str) => {
  return str.length;
};
console.log(getLength("Hello")); 

//20. Write a JavaScript function subtract that takes two numbers as arguments and returns their difference. Provide an example of calling this function with two numbers.
subtract = (a, b) => {
  return a - b;
};
console.log(subtract(5, 2)); 

//21. Write a JavaScript function mergeArrays that takes two arrays as arguments and returns a new array containing all elements from both arrays. Provide an example with two arrays.
mergeArrays = (array1, array2) => {
  return array1.concat(array2);
};
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log(mergeArrays(array1, array2));

//22. Define a JavaScript object recipe with properties name, ingredients (an array), and servings. Write a function getIngredientList that takes this object and returns the ingredients array.
const recipe = {
  name: "Chocolate Cake",
  ingredients: [
    "flour",
    "sugar",
    "cocoa powder",
    "baking powder",
    "butter",
    "eggs",
    "milk",
  ],
  servings: 8,
};
getIngredientList = (recipe) => {
  return recipe.ingredients;
};
console.log(getIngredientList(recipe)); 

//23. Write a JavaScript function endsWith that takes a string and a character as arguments and returns true if the string ends with the given character, otherwise false. Provide an example with a sample string and character.
endsWith = (string, character) => {
      return string.charAt(string.length - 1) === character;
    };
    console.log(endsWith("hello", "o"));

    
//24.Write a JavaScript function divide that takes two numbers as arguments and returns their quotient. Provide an example of calling this function with two numbers.
divide = (a, b) => {
  return a / b;
};
console.log(divide(5, 2)); 

//25.Write a JavaScript function removeFirstElement that takes an array as an argument and returns a new array with the first element removed. Provide an example with an array.
removeFirstElement = (arr) => {
  return arr.slice(1);
};
console.log(removeFirstElement([1, 2, 3])); 

//26.Define a JavaScript object album with properties title, artist, and tracks (an array of track names). Write a function getTrackCount that takes this object and returns the number of tracks.
const album = {
  title: "Thriller",
  artist: "Michael Jackson",
  tracks: [
    "Wanna Be Startin' Somethin'",
    "Baby Be Mine",
    "The Girl Is Mine",
    "Thriller",
    "Beat It",
    "Billie Jean",
    "Human Nature",
    "P.Y.T. (Pretty Young Thing)",
    "The Lady in My Life",
  ],
};
getTrackCount = (album) => {
  return album.tracks.length;
};
console.log(getTrackCount(album)); 

//27. Write a JavaScript function startsWith that takes a string and a character as arguments and returns true if the string starts with the given character, otherwise false. Provide an example with a sample string and character.
startsWith = (string, character) => {
  return string.charAt(0) === character;
};
console.log(startsWith("hello", "h")); 

//28.Write a JavaScript function isPositive that takes a number as an argument and returns true if the number is positive and false if it is negative or zero. Provide an example with a sample number.
isPositive = (num) => {
  return num > 0;
};
console.log(isPositive(5)); 

//29.Write a JavaScript function countElements that takes an array as an argument and returns the number of elements in the array. Provide an example with an array.
countElements = (arr) => {
  return arr.length;
};
console.log(countElements([1, 2, 3, 4])); 

//30. Define a JavaScript object game with properties name, genre, and platforms (an array of strings). Write a function getPlatformList that takes this object and returns the platforms array.
const game = {
  name: "The Legend of Zelda: Breath of the Wild",
  genre: "Action-adventure",
  platforms: ["Nintendo Switch", "Wii U"],
};
getPlatformList = (game) => {
  return game.platforms;
};
console.log(getPlatformList(game)); 
