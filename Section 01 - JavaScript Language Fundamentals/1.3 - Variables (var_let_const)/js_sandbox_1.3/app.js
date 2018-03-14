/* 
----------------------------- 
Variables - VAR, LET & CONST
----------------------------- 
*/

// VAR Keyword
var name = "John Doe";        //Create a variable.
console.log(name);
name = "Steve Smith";         //Reassigning variable value.
console.log(name);


// Initialising a Variable
var greeting;                 //Initialising a variable without assigning a value.
console.log(greeting);        //Greetings has no value and so will return undefined.
greeting = "Hello";           //Assigning a value to greetings variable.
console.log(greeting);        //Log variable value in the console.


/* Variables rules:
variables can contain: letters, numbers, _, $
variables cannot start with a number.

Multi Word Variable Names:
   var firstName = "John";       Camel case
   var first_name = "Sara";      Underscore
   var FirstName = "Tom";        Pascal case
   var firstname;
*/


// LET Keyword
let name2;                     //Init variable.
name2 = "John Doe";            //Assign value to variable.
console.log(name2);
name2 = "Steve Smith";         //Reassign value to the variable.
console.log(name2);


// CONST Keyword
const name3 = "John";         //Create and assign value to const variable.
console.log(name3);
// name3 = "Sara";            //Cannot reassign new value to const variable.
// const greeting;            //Cannot init a const variable i.e. you have to assign a value.


//Creating an Object - Properties = Key:Value pairs (can have more than 1).
const person = {
   name: "John",
   age: 30
}

console.log(person);          //Log out our object literal.

//We can change the values for the Person Object properties but we cannot reassign the Person object.
person.name = "Sara";         //Taking the object property and mutating/changing the value.
person.age = 32;              //Taking the object property and mutating/changing the value.

console.log(person);          //Log out the new object literal values.

//Same with Arrays - we can change the values but cannot reassign the values.
const numbers = [1,2,3,4,5];  //Create an Array.

console.log(numbers);         //Log the 5 items within the array

//const numbers = [1,2,3,4,5,6]; //Cannot reassign/re-declare the const array (same with objects).
numbers.push(6);              //Adding 6 to the array using the push method.

console.log(numbers);         //We now have 6 items within the array.

