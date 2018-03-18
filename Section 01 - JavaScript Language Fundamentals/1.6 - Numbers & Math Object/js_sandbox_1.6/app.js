/* 
----------------------------- 
Numbers & Math Object
----------------------------- 
*/

const num1 = 100;
const num2 = 50;
let val;                //init a val variable to use below.


// Basic Maths with Numbers:
val = num1 + num2;         //Addition
console.log(val);
val = num1 * num2;         //Multiplication
console.log(val);
val = num1 - num2;         //Subtraction
console.log(val);
val = num1 / num2;         //Division
console.log(val);
val = num1 % num2;         //Modulus
console.log(val);
//Remember the rule of BIDMAS in maths (Brackets, Indicies, Division, Multiplication, Addition & Subtraction)


// Math Object:
val = Math.PI;                         //PI = 3.141592653589793
console.log(val);
val = Math.E;                          //Euler's Numbers = 2.718281828459045
console.log(val);
val = Math.round(2.4);                 //Round number up/down
console.log(val);
val = Math.ceil(2.4);                  //Force Round up
console.log(val);
val = Math.floor(2.8);                 //Force Round down
console.log(val);
val = Math.sqrt(64);                   //Square root
console.log(val);
val = Math.abs(-3);                    //Absolute number i.e. returns a positive number
console.log(val);
val = Math.pow(8, 2);                  //Power
console.log(val);
val = Math.min(2,33,4,1,55,6,3,-2);    //Minimum (lowest number from range)
console.log(val);
val = Math.max(2,33,4,1,55,6,3,-2);    //Maximum (highest number from range)
console.log(val);
val = Math.random();                   //Random decimal/float number.
console.log(val);

//Random number between 1 to 20 (*20 + 1) - the floor method will round the number down - so now the random method will return a full interger number between 1 to 20:
val = Math.floor(Math.random() * 20 + 1);
console.log(val);