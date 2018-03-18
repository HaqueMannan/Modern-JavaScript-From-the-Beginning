/* 
----------------------------- 
String Methods & Concatenation
----------------------------- 
*/

//Creating String Variables:
const firstName = "Barry";
const lastName = "McDonald";
const age = 30;   //This is a number data type.
const str = "Hello there my name is Lenny";
const tags = "web design,web development,programming";

let val;    //init val to work with.

//-----------------------------
val = firstName + lastName;
console.log(val);                //Returns: BarryMcDonald

// Concatenation:
val = firstName + ' ' + lastName;
console.log(val);                //Returns: Barry McDonald

// Append - to add onto a variable:
val = "Alice ";
val += "Brady";
console.log(val);                //Returns: Alice Brady

//Concatenating a sentence using strings and variables:
val = "Hello, my name is " + firstName + " and I am " + age;
console.log(val);                //Returns: Hello, my name is Barry McDonald and i am 30

// Escaping:
val =  'That\'s awesome, I can\'t wait';
console.log(val);                //Returns: That's awesome, I can't wait
// val =  "That's awesome, I can't wait"     //If you use double quotes escaping not required.



//-----------------------------
//String Methods & Properties
//-----------------------------

// .Length:
val = firstName.length;
console.log(val);                //Returns: 7

// concat():
val = firstName.concat(' ', lastName);
console.log(val);                //Returns: Barry McDonald

// Change case:
val = firstName.toUpperCase();
console.log(val);                //Returns: BARRY
val = firstName.toLowerCase();
console.log(val);                //Returns: barry

//Treating strings as read only arrays (not very useful but possible to do):
//It takes the index of the string and returns the character i.e. 0 = B, 1= a, 2 = r, ...
val = firstName[2];
console.log(val);                //Returns: r

// indexOf():
val = firstName.indexOf('r');
console.log(val);                //Returns: 2 (finds the first r within the string and returns index number i.e. looks at the string from left to right)
val = firstName.lastIndexOf('r');
console.log(val);                //Returns: 3 (finds the last r within the string and returns index number i.e. looks at the string from right to left)
//If the character does not exists it will return -1 to indicate this.

// charAt():
val = firstName.charAt('2');
console.log(val);                //Returns: r (opposite of indexOf())
// Get last char
val = firstName.charAt(firstName.length - 1);
console.log(val);                //Returns: y
//If the variable string changes, the formula above will always find the last character of the string.

// substring():
val = firstName.substring(0, 4);
console.log(val);                //Returns: Barr
//returns a substring within a string based on the index values provided as the arguements within the mehtod.

// slice():
// slice is mostly used with arrays but also can be used with strings. This is very similar to the substring() method.
val = firstName.slice(0,4);
console.log(val);                //Returns: Barr
//slice from left to right.
val = firstName.slice(-3);
console.log(val);                //Returns: rry
//slice from right to left (negative number = return last x letters from the string).

// split():
val = str.split(' ');
console.log(val);                //Returns: (6) ["Hello", "there", "my", "name", "is", "Lenny"]
val = tags.split(',');
console.log(val);                //Returns: (3) ["web design", "web development", "programming"]
//split a string into an array using a delimiter/separator (e.g. using space or comma as a delimeter as demonstrated above).

// replace():
val = str.replace('Lenny', 'Jack');
console.log(val);                //Returns: Hello there my name is Jack
//This replaces the word Lenny with Jack based on our method arguments/parameters.

// includes():
val = str.includes('Hello');
console.log(val);                //Returns: true
val = str.includes('food');
console.log(val);                //Returns: false
//check to see if a string includes the word within the method argument/parameter and return true or false.