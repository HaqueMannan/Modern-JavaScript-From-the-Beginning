/* 
----------------------------- 
Built In Constructors
----------------------------- 
*/


//-----------------------------
// STRING
//-----------------------------
const name1 = 'Jeff';                   // Primitive value.
const name2 = new String('Jeff');       // Object value.
//console.log(name1)
//console.log(name2)

//name2.foo = 'bar';                    // With objects we can add properties. Example.
// console.log(name2);

//Where we would run into problems when comparing type - see If Statement:
console.log(typeof name1);              // Typeof String.
console.log(typeof name2);              // Typeof Object.

// If statement returns NO c.f. to name1 which returns YES.
if(name2 === 'Jeff'){
  console.log('YES');
} else {
  console.log('NO');
}


//-----------------------------
// NUMBER
//-----------------------------
const num1 = 5;                       // Normal way.
const num2 = new Number(5);           // Constructor way.

console.log(num1);
console.log(name2);
console.log(typeof num1);
console.log(typeof name2);


//-----------------------------
// BOOLEAN
//-----------------------------
const bool1 = true;
const bool2 = new Boolean(true);

console.log(bool1);
console.log(bool2);
console.log(typeof bool1);
console.log(typeof bool2);


//-----------------------------
// FUNCTION
//-----------------------------
const getSum1 = function(x, y){
  return x + y;
}

const getSum2 = new Function('x','y', 'return 1 + 1');
// This look really strange and confusing as a code for functions compared to the getSum1() function.


//-----------------------------
// OBJECT
//-----------------------------
const john1 = {name: "John"};
const john2 = new Object({name: "John"});
console.log(john1);
console.log(john2);
// This returns the same value & type as each other but the first example is easier/shorter to code.


//-----------------------------
// ARRAY
//-----------------------------
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);
console.log(arr1);
console.log(arr2);
// This returns the same value & type as each other but again the first examples is easier/shorter to code.


//-----------------------------
// REGULAR EXPRESSIONS
//-----------------------------
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re1);
console.log(re2);

// In re2 we are required to use the back slash (\) as a escape character to show other special characters - therefore in order to have the RegEx \w+ using re2 method we needed to write \\w+ 
// c.f. to re1 which has all the RegEx inbetween two forward slashes (/) which is easier to read.
// We have not explored Regular Expressions and so this will not make sense, but this is purely to demonstrate core JavaScript object constructors that are available in the language.