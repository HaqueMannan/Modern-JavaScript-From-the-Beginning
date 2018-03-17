/* 
----------------------------- 
Data Types in JavaScript
----------------------------- 
*/

//Typof operator verifies the Type of Data.

// PRIMITIVE DATA TYPES:
const name = "John Doe";      //String
console.log(typeof name);
const strNumber  = "45"
console.log(typeof strNumber);

const age = 45;               // Number
console.log(typeof age);
// numbers do not have quotes around them otherwise this will become a string.

const hasKids = true;         // Boolean
console.log(typeof hasKids);
// booleans do not have quotes around them otherwise this will become a string.

const car = null;             // Null
console.log(typeof car);
// Null appearing as a object is a bug. First implementation of JavaScript, values were represented as a type tag and a value. Type tag for objects being 0. Null was represented as Null pointer(0x00). As a result null had 0 as a type tag, hence the bogus typof return value. Null is actually a primitive value and not a object.


let test;                     // Undefined
console.log(typeof test);

const sym = Symbol();         // Symbol
console.log(typeof sym);


// REFERENCE DATA TYPES - OBJECTS
const hobbies = ["movies", "music"];      // Array
console.log(typeof hobbies);

// Object literal
const address = {
   city: "London",
   country: "England"
}
console.log(typeof address);

//Date
const today = new Date();
console.log(today);
console.log(typeof today);