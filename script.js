// alert("S.M. Kamrul Hasan");

// 01. Question: Create a variable called carName, assign the value Volvo to it.

// 01. Ans:
let carName = "Volvo";
// =======================================================================

// 02. Question: On one single line, declare three variables with the following names and values:
/*
firstName = "John";
lastName = "Doe";
age = 35;
*/

// 02 Ans:
/*
let firstName = "John"; // write variable name
let lastName = "Doe"; //write variable values
let age = 35; // write variable name and values both
*/
//=======================================================================

// 03. Question: Use the correct assignment operator that will result in x being 50              (same as x = x * y).

// 03 Ans:
/*
x = 10;
y = 5;
x = x * y; // the value of x 50.

// console.log(x);
*/
//=======================================================================

// 04. Question: Use comments to describe the correct data type of the following variables:

// 04 Ans:
/*
let length = 16; // data type is Number
let lastName = "Johnson"; // data type is String

const x = {
  firstName: "John",
  lastName: "Doe",
}; // data type is Object
*/
//=======================================================================

// 05. Question: Execute the function named myFunction.

function myFunction() {
  // alert("Hello World! Script");
}
// 05. Ans:
myFunction();

//=======================================================================
// 06. Question: Create an object called person with name = John, age = 50, Then, access the object to alert("John is 50").

// 06. Ans:
/*
let person = {
  name: "John",
  age: 50,
};
// alert(person.name + " is " + person.age);
*/

//=======================================================================

// 07. Question: The <button> element should do something when someone clicks on it. Try to fix it!
// 07. Ans:
// see html file 07. ans: section
//=======================================================================

// 08.1. Question: Alert the number of items in an array, using the correct Array property: const cars = ["Volvo", "Jeep", "Mercedes"];

// 08.1. Ans:
const cars = ["Volvo", "Jeep", "Mercedes"];
// alert(cars.length + " is Cars length");

// 08.2. Question: Change the first item of Brand to "Ford". const Brand = ["Volvo", "Jeep", "Mercedes"];

// 08.2. Ans:
const Brand = ["Volvo", "Jeep", "Mercedes"];
Brand[0] = "Ford";
// console.log(Brand);
//=======================================================================

// 09.1. Question: Use the correct Math method to create a random number.

// 09.1. Ans:
const randomNumber = Math.random();
console.log(randomNumber);

// 09.2. Question: Use the correct Math method to return the largest number of 10 and 20.

// 09.2. Ans:
const maxNumber = Math.max(10, 20);
console.log(maxNumber);

// 09.3. Question: Use the correct Math method to get the square root of 9.

// 09.3. Ans:
const squareRoot = Math.sqrt(9);
console.log(squareRoot);
//=======================================================================

// 10.1. Question: Choose the correct comparison operator to alert true, when x is greater than y.

// 10.1. Ans:
const x = 10;
const y = 5; // comment
alert(x > y);

// 10.2. Question: Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough"

// 10.2. Ans:
const age = 19;
const message = age < 18 ? "Too young" : "Old enough";
alert(message);
//=======================================================================
