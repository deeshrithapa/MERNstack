// 1. Write a function that takes two parameters and returns their sum.
const add = (a, b) => a + b;
console.log(add(5, 3)); 

// 2. Create a function that calculates the average of an array of numbers
const calculateAverage = (numbers) => {
  if (numbers.length === 0) {
      return 0; 
  }  
  const sum = numbers.reduce((acc, num) => acc + num, 0); 
  return sum / numbers.length; 
}
const numbers = [5, 10, 15, 20];
console.log(calculateAverage(numbers)); 

// 3. Write a function that checks if a given number is even or odd.
const checkEvenOrOdd = (number) => {
  return number % 2 === 0 ? 'Even' : 'Odd';
}
console.log(checkEvenOrOdd(5)); 
console.log(checkEvenOrOdd(10)); 

//4. Create a function that reverses a string.
const reverseString = (str) => {
  return str.split('').reverse().join('');
}
console.log(reverseString("hello")); 
console.log(reverseString("JavaScript")); 

//5. Write a function that finds the maximum value in an array of numbers.
const findMax = (numberss) => {
  if (numberss.length === 0) {
      return undefined; 
  }
  let max = numberss[0];
  for (let i = 1; i < numberss.length; i++) {
      if (numberss[i] > max) {
          max = numberss[i]; // Update max if the current element is greater
      }
  }
  return max;
}
const numberss = [5, 10, 3, 8, 15];
console.log(findMax(numberss)); 

//6. Create a function that converts Celsius to Fahrenheit.
const celsiusToFahrenheit = (celsius) => {
  return (celsius * 9/5) + 32;
}
console.log(celsiusToFahrenheit(0)); 
console.log(celsiusToFahrenheit(100)); 
console.log(celsiusToFahrenheit(-40));


//7. Write a function that generates a random number between a given minimum and maximum.
const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(generateRandomNumber(1, 100)); 
console.log(generateRandomNumber(-10, 10)); 


//8. Create a function that checks if a string is a palindrome.
const isPalindrome = (str) => { 
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleanStr === cleanStr.split('').reverse().join('');
}
console.log(isPalindrome("radar")); 
console.log(isPalindrome("hello")); 

//9. Write a function that capitalizes the first letter of each word in a sentence.
const capitalizeWords = (sentence) => {
  return sentence.replace(/\b\w/g, (match) => match.toUpperCase());
}
console.log(capitalizeWords("hello world")); 
console.log(capitalizeWords("javascript is awesome")); 


//10. Create a function that returns the factorial of a given number.
const factorial = (n) => {
  if (n === 0 || n === 1) {
      return 1; 
  } else {
      return n * factorial(n - 1); 
  }
}
console.log(factorial(5)); 

//11. Write a function that counts the number of occurrences of a specific element in an array.
const countOccurrences = (arr, element) => {
  return arr.reduce((count, current) => {
      return current === element ? count + 1 : count;
  }, 0);
}
const numb = [1, 2, 3, 4, 2, 2, 5];
console.log(countOccurrences(numb, 2)); // Output: 3 (Number 2 occurs 3 times in the array)


//12. Create a function that checks if a given year is a leap year.
const isLeapYear = (year) => {  
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log(isLeapYear(2020));
console.log(isLeapYear(2021)); 

//13. Write a function that merges two arrays and returns the sorted result.
const mergeAndSortArrays = (arr1, arr2) => {
  const mergedArray = [...arr1, ...arr2]; 
  return mergedArray.sort((a, b) => a - b); 
}
const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];
console.log(mergeAndSortArrays(array1, array2)); 


//14. Create a function that converts a number to its Roman numeral representation.
const toRoman = (num) => {
  const romanNumerals = [
      { value: 1000, symbol: 'M' },
      { value: 900, symbol: 'CM' },
      { value: 500, symbol: 'D' },
      { value: 400, symbol: 'CD' },
      { value: 100, symbol: 'C' },
      { value: 90, symbol: 'XC' },
      { value: 50, symbol: 'L' },
      { value: 40, symbol: 'XL' },
      { value: 10, symbol: 'X' },
      { value: 9, symbol: 'IX' },
      { value: 5, symbol: 'V' },
      { value: 4, symbol: 'IV' },
      { value: 1, symbol: 'I' }
  ];
  let result = '';  
  for (let i = 0; i < romanNumerals.length; i++) {
      while (num >= romanNumerals[i].value) {
          result += romanNumerals[i].symbol;
          num -= romanNumerals[i].value;
      }
  }
  return result;
}
console.log(toRoman(9));  
console.log(toRoman(47)); 

//15. Write a function that finds the second smallest element in an array of numbers.
const findSecondSmallest = (arr) => {
  if (arr.length < 2) {
      return undefined; 
  }
  let smallest = Infinity;
  let secondSmallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
          secondSmallest = smallest;
          smallest = arr[i];
      } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
          secondSmallest = arr[i];
      }
  }
  if (secondSmallest === Infinity) {
      return undefined; 
  }
  return secondSmallest;
}
const numbers1 = [5, 2, 8, 1, 3, 7];
console.log(findSecondSmallest(numbers1)); 

//16. Create a function that calculates the area of a circle given its radius.
const calculateCircleArea = (radius) => {
  return Math.PI * Math.pow(radius, 2);
}
console.log(calculateCircleArea(5)); 

//17. Write a function that truncates a string if it exceeds a specified length and appends &quot;...&quot; to the end.
const truncateString = (str, maxLength) => {
  if (str.length <= maxLength) {
      return str; 
  } else {
      return str.slice(0, maxLength) + "..."; 
  }
}
console.log(truncateString("Hello, world!", 10)); 

//18. Create a function that checks if a given string contains only digits.
const containsOnlyDigits = (str) => {
  return /^\d+$/.test(str);
}
console.log(containsOnlyDigits("12345")); 
console.log(containsOnlyDigits("abc123")); 

//19. Write a function that removes all falsy values (false, null, 0, &quot;&quot;, undefined, and NaN) from an array.
const removeFalsyValues = (arr) => {
  return arr.filter(Boolean);
}
const mixedArray = [0, 1, false, 2, '', 3, null, undefined, NaN, 4];
console.log(removeFalsyValues(mixedArray)); 

//20. Create a function that generates a new array with unique values from a given array.
const getUniqueValues = (arr) => {
  return [...new Set(arr)];
}
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
console.log(getUniqueValues(arrayWithDuplicates)); 