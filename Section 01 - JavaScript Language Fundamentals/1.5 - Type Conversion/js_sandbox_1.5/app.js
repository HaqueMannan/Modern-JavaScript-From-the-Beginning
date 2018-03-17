/* 
----------------------------- 
Type Conversion
----------------------------- 
*/

//Init Variable - creating a variable without assigning a value (init only var and let variables).
let val;


//-----------------------------
//Number to String Conversion.
//-----------------------------
val = 555
// Before Output
console.log(val);
console.log(typeof val);
console.log(val.length);      //This property will only work on strings (undefined if not a string)

val = String(555);            // Number to string
// After Output
console.log(val);
console.log(typeof val);
console.log(val.length);
//-----------------------------
val = 4+4
// Before Output
console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(4+4);            // Number to string
// After Output
console.log(val);
console.log(typeof val);
console.log(val.length);


//-----------------------------
//Boolean to String Conversion.
//-----------------------------
val = true;
// Before Output
console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(true);        // Bool to string
// After Output
console.log(val);
console.log(typeof val);
console.log(val.length);


//-----------------------------
//Date to String Conversion.
//-----------------------------
val = new Date();
// Before Output
console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(new Date());     // Date to string
// After Output
console.log(val);
console.log(typeof val);
console.log(val.length);


//-----------------------------
//Array to String Conversion.
//-----------------------------
val = [1,2,3,4];
// Before Output
console.log(val);
console.log(typeof val);
console.log(val.length);


val = String([1,2,3,4]);      // Array to string
// After Output
console.log(val);
console.log(typeof val);
console.log(val.length);


//-----------------------------
//toString() Method Conversion.
//-----------------------------
val = (5).toString();
// After Output
console.log(val);
console.log(typeof val);
console.log(val.length);

val = (true).toString();
// After Output
console.log(val);
console.log(typeof val);
console.log(val.length);

//-----------------------------



//-----------------------------
//String (number) to Number Conversion.
//-----------------------------
val = Number('5');
// After Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));           //2 decimal points.

//-----------------------------
//Boolean to Number Conversion.
//-----------------------------
val = Number(true);
// After Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed());            //1 = true.

val = Number(false);
// After Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed());            //0 = false.

//-----------------------------
//Null to Number Conversion.
//-----------------------------
val = Number(null);
// After Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed());            //no decimal points.

//-----------------------------
//String (non-number) to Number Conversion.
//-----------------------------
val = Number('hello');
// After Output
console.log(val);                      //returns NaN.
console.log(typeof val);
console.log(val.toFixed());            //returns NaN.

//-----------------------------
//Array to Number Conversion.
//-----------------------------
val = Number([1,2,3]);
// After Output
console.log(val);                      //returns NaN.
console.log(typeof val);
console.log(val.toFixed());            //returns NaN.


//-----------------------------
//parseInt() and parseFloat() Method Conversion.
//-----------------------------
val = parseInt('100.30');
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

val = parseFloat('100.30');
console.log(val);
console.log(typeof val);
console.log(val.toFixed(1));           //1 decimal point.

//-----------------------------


//-----------------------------
//Type Coercion
//-----------------------------
//Original
const val1 = 5
const val2 = 6
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);

//JavaScript Type Coercion
const val3 = String(5);
const val4 = 6;
const sum2 = val3 + val4;
const sum3 = Number(val3 + val4);

console.log(sum2);
console.log(typeof sum2);

console.log(sum3);
console.log(typeof sum3);

//-----------------------------