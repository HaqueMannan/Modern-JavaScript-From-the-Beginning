/* 
----------------------------- 
Arrays & Array Methods
----------------------------- 
*/

//----------------------------- 
// Create an Array:
//----------------------------- 
// Method 1 - using a Array Variable.
const numbers = [43,56,33,23,44,36,5];
console.log(numbers);

// Method 2 - using an Array Constructor.
const numbers2 = new Array(22,45,33,76,54);
console.log(numbers2);

// Additional Example Arrays:
const fruit = ["Apple", "Banana", "Orange", "Pear"];      //Array of string data types.
console.log(fruit);
const mixed = [22, "Hello", true, undefined, null, {a:1, b:1}, new Date()];   //Array of mixed data type.
console.log(mixed);

let val;    //init variable val.


//----------------------------- 
// Array Methods:
//----------------------------- 
// Get array length.
val = numbers.length;
console.log(numbers);
console.log(val);

// Check if something is an array using the Array object and passing in the variable we wish to test.
val = Array.isArray(numbers);
console.log(val);

// Get single value from an array using index number. 
val = numbers[3];
console.log(numbers);
console.log(val);
val = numbers[0];
console.log(val);

// Insert into array
console.log(numbers);
numbers[2] = 100;         //Change the number at index 2 with the new value.
console.log(numbers);
console.log(val);

// Find index of value
val = numbers.indexOf(36);    //returns index position of 36 within array.


//----------------------------- 
// MUTATING ARRAYS
//----------------------------- 
// Add data onto end of array
numbers.push(250);
console.log(numbers);

// Add data onto front of array
numbers.unshift(120);
console.log(numbers);

// Remove data from the end of array
numbers.pop();
console.log(numbers);

// Remove data from the front of array
numbers.shift();
console.log(numbers);

// Splice values out of an array
numbers.splice(1,3);
console.log(numbers);

// Reverse the order of an array
numbers.reverse();
console.log(numbers);

// Concatenate array
val = numbers.concat(numbers2);
console.log(numbers);
console.log(val);

// Sorting string arrays
val = fruit.sort();
console.log(val);         //Array sorted by alphabetical order A-Z.

// Sorting number arrays
val = numbers.sort();
console.log(val);         //Sorts number by the first digit in the number i.e. 100 will come before 5.
// Use the "compare function" to arrange by highest to lowest number.
val = numbers.sort(function(x, y){
  return x - y;
});
console.log(val);         //Sorts numbers from lowest to highest.

// Use the "compare function" to arrange by lowest to highest number (Reverse sort).
val = numbers.sort(function(x, y){
  return y - x;
});
console.log(val);         //Sorts numbers from highest to lowest.


//----------------------------- 
// Find Function & Arrays
//----------------------------- 
const numbers3 = [43,33,56,23,44,36,5];

function under50(num){
  return num < 50;
}

val = numbers3.find(under50);        //Finds the first number within the array that is below 50.
console.log(numbers3);
console.log(val);


function over50(num){
  return num > 50;
}

val = numbers3.find(over50);        //Finds the first number within the array that is above 50.
console.log(numbers3);
console.log(val);

//----------------------------- 