//Single line comments in JavaScript

/*
   mutli
   line
   comment
*/


//Log to Console
console.log('Hello World');   //string
console.log(123);             //number
console.log(true);            //boolean

var greeting = 'Hello';
console.log(greeting);        //variable

console.log([1,2,3,4]);       //arrays
console.log({a:1, b:2});      //objects
console.table({a:1, b:2});    //prints the object into a table

console.error('This is some error');   //error message
// console.clear();                       //clear the console (uncomment to see)
console.warn('This is a warning');     //warning message

//the time it takes to log to the console.
console.time('Hello');
   console.log('Hello World');
   console.log('Hello World');
   console.log('Hello World');
   console.log('Hello World');
   console.log('Hello World');
   console.log('Hello World');
console.timeEnd('Hello');

