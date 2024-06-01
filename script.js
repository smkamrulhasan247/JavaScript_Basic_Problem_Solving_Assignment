// alert("S.M. Kamrul Hasan");

// 01. Question: Write a function to convert Celsius to Fahrenheit. The function should take a single argument, which is the temperature in Celsius.

// 01. Ans:
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// console.log(celsiusToFahrenheit(0)); // 32
// console.log(celsiusToFahrenheit(25)); // 77

// =======================================================================

// 02. Question: Write a function to check if a number is even. The function should take a single argument, which is the number to check.

// 02 Ans:
function isEven(num) {
  return num % 2 === 0;
}

// console.log(isEven(4)); // true
// console.log(isEven(7)); // false
//=======================================================================

// 03. Question: Write a function to sum two numbers. The function should take two arguments, which are the numbers to sum.

// 03 Ans:
function sum(a, b) {
  return a + b;
}

// console.log(sum(3, 4)); // 7
// console.log(sum(10, 20)); // 30
//=======================================================================

// 04. Question: Write a function to find the smallest number in an array. The function should take a single argument, which is the array to search.

// 04 Ans:
/*
function findSmallestNum(arr) {
  return ...;  // পারি না ভাই, পরবর্তীতে দেখাইয়া দিলে ভালো হতো।
}

console.log(findSmallestNum([3, 5, 1, 9])); // 1
console.log(findSmallestNum([-1, -5, 0, 10])); // -5
*/
//=======================================================================

// 05. Question: Write a function to count the number of vowels in a string. The function should take a single argument, which is the string to search.

// 05. Ans:
/*
function countVowels(str) {
  let vowels = 'aeiouAEIOU';
  return ...; // মাথার উপর দিয়া জাইতেছে ভাই।
}

console.log(countVowels("hello world")); // 3
console.log(countVowels("Javascript")); // 3

*/
//=======================================================================
// 06. Question: Write a function to get the first element of an array. The function should take a single argument, which is the array.

// 06. Ans:
function getFirstElement(arr) {
  return arr[0];
}

// console.log(getFirstElement([1, 2, 3])); // 1
// console.log(getFirstElement(["a", "b", "c"])); // "a"
//=======================================================================

// 07. Question: Write a function to check if an array is empty. The function should take a single argument, which is the array.

// 07. Ans:
function isArrayEmpty(arr) {
  return arr.length === 0;
}

// console.log(isArrayEmpty([])); // true
// console.log(isArrayEmpty([1, 2, 3])); // false

//=======================================================================

// 08. Question: Write a function to return the factorial of a number. The function should take a single argument, which is the number.

// 08. Ans:
/*
function factorialize(num) {
  if (num === 0 || num === 1) return 1;
  
  return ...; // বুঝিনাই ভাই কিভাবে কি করতে হবে, পরবর্তীতে দেখাইয়া দিলে ভালো হতো।
}

console.log(factorialize(5)); // 120
console.log(factorialize(7)); // 5040
*/
//=======================================================================

// 09. Question: Write a function to reverse a string. The function should take a single argument, which is the string to reverse.

// 09. Ans:
/*
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world")); // "dlrow"
*/
//=======================================================================

// 10. Question: Write a function to convert a string to lowercase. The function should take a single argument, which is the string to convert.

// 10. Ans:
/*
function toLowerCase(str) {
  return str.toLowerCase();
}

console.log(toLowerCase("HELLO WORLD")); // "hello world"
console.log(toLowerCase("JavaScript")); // "javascript"
*/
//=======================================================================

// 11. Question: Write a function to find the length of a string. The function should take a single argument, which is the string.

// 11. Ans:
/*
function stringLength(str) {
  return str.length;
}

console.log(stringLength("hello")); // 5
console.log(stringLength("world")); // 5
*/
//=======================================================================

// 12. Question: Write a function to merge two arrays. The function should take two arguments, which are the arrays to merge.

// 12. Ans:
/*
function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]
*/
//=======================================================================

// 13. Question:Write a function to get the last element of an array. The function should take a single argument, which is the array.

// 13. Ans:
/*
function getLastElement(arr) {
  return arr[arr.length - 1]; // or return arr[2];
}

console.log(getLastElement([1, 2, 3])); // 3
console.log(getLastElement(["a", "b", "c"])); // "c"
*/
//=======================================================================

// 14. Question:  Write a function to get the first character of a string. The function should take a single argument, which is the string.

// 14. Ans:
/*
function getFirstCharacter(str) {
  return str[0];
}

console.log(getFirstCharacter("hello")); // "h"
console.log(getFirstCharacter("world")); // "w"
*/
//=======================================================================

// 15. Question:Write a function to find the sum of all elements in an array. The function should take a single argument, which is the array.

// 15. Ans:
/*
function sumArray(arr) {
  return ...; // করতে পারি নাই ভাই কিভাবে কি করতে হবে, পরবর্তীতে দেখাইয়া দিলে ভালো হতো।
}

console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([-1, -2, -3, -4])); // -10
console.log(sumArray([1.5, 2.5, 3.5])); // 7.5
*/
//=======================================================================

// The End 01-06-2024
