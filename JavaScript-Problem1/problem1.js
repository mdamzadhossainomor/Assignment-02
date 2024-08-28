// problem 1. Create a variable called carName, assign the value Volvo to it.



let carName = "Volvo";
console.log(carName);



// problem 2. On one single line, declare three variables with the following names and values: firstName = "John"
// lastName = "Doe"
// age = 35

let firstName = "John",lastName = "Doe",age = 35;



// problem 3. Use the correct assignment operator that will 
// result in x being 50 (same as x = x * y). 
// x = 10;
// y = 5;
// x = ...  what will be the value of x ? 


let x = 10;
let y = 5;
x *= y;
console.log(x); // *=  This multiplies x by y and assigns the result back to x. and Output x = 50;




//  Problem 4.  Use comments to describe the correct data type of the following variables:

// let length = 16;  data type ? 
// let lastName = "Johnson";   data type ? 

// const x = {
//   firstName: "John",  
//   lastName: "Doe"
// };     data type ? 



let length = 16;   // data type : Number
let lastNamee = "Johnson";  //  data type : string

 const Problem = {
  firstName: "John",  
  lastNamee: "Doe"
};   //  data type : object



// Problem 5. Execute the function named myFunction.
 
//  function myFunction() {
//   alert("Hello World!");
// }
// call the function and see the output



function myFunction() {
    alert("Hello World!");
    }
    myFunction();  // this will call the function and see the output 



// Problem 6. Create an object called person with name = John, age = 50, Then,
//    access the object to alert("John is 50").


let person = {
    personName : "Johan",
    age : 50
};
alert(person.personName + " is " + person.age); //this is right answer access the object to alert()



// Problem 7. The <button> element should do something when someone clicks on it. Try to fix it!
// <button>Click me.</button> 

function myFunctionn(){
    alert("Button was clicked!")}   // go to html file and check button 



// Problem 8. Array Related Question :

// 1. Alert the number of items in an array, using the correct Array property: 
// const cars = ["Volvo", "Jeep", "Mercedes"];


const cars = ["Volvo", "Jeep", "Mercedes"];
alert( cars.length);  // this is correct array property .and output (3) 


// 2. Change the first item of Brand to "Ford".
// 	const Brand = ["Volvo", "Jeep", "Mercedes"]; 


const Brand = ["Volvo", "Jeep", "Mercedes"]; 
Brand[0] = "Ford";  // this is update arry line
alert(Brand);


// Problem 9. Math Related Problems

// 1. Use the correct Math method to create a random number.

let randomNumber = Math.random();
alert(randomNumber);


// 2. Use the correct Math method to return the largest number of 10 and 20.

let largestNumber = Math.max(10, 20);
alert(largestNumber);


// 3. Use the correct Math method to get the square root of 9.

let squareRoot = Math.sqrt(9)
alert(squareRoot);  



// Problem 10. comparison operator related problems! 

// 1. Choose the correct comparison operator to alert true, when x is greater than y. 
// x = 10;
// y = 5;
// alert()  ? 


let xx = 10;
let yy = 5;
alert(xx > yy);  //this is output true because 10 is greater than 5.



// 2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".

let ag_e = 10;
alert(ag_e < 18 ? "Too young": "Old enough"); // this is correct conditional (ternary) operator.

