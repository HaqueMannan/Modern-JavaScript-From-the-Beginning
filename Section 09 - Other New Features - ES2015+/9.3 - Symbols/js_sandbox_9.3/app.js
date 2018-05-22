/* 
----------------------------- 
Symbols
----------------------------- 
*/



//-----------------------------
// SYMBOLS:
//-----------------------------
// Create a symbol
const sym1 = Symbol();
// Add identifier in our symbol e.g. sym2
const sym2 = Symbol('sym2');

console.log(sym1, sym2);                     // Returns Symbol() and Symbol(sym2).
console.log(typeof sym1, typeof sym2);       // Returns data type i.e. Symbol.

// The below will always return false because no symbols can be the same, even if you put in an identifier.
console.log(Symbol() === Symbol());
console.log(Symbol('123') === Symbol('123'));

// Adding Symbols to template literals.
// console.log(`Hello ${sym1}`);    This will return a TypeError cannot convert a symbol value to a string.
console.log(`Hello ${String(sym1)}`);        // However, we can convert it to a string.
console.log(`Hello ${sym2.toString()}`);     // Alternative method of converting to a string.



//-----------------------------
// UNIQUE OBJECT KEYS:
//-----------------------------
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

// To use the variable above we must use the square brackets [], otherwise if we were to write .KEY1 it will treat it as a property rather than using the variable as the property.
myObj[KEY1] = 'Prop1';                       // Uses Symbol Variable as property.
myObj[KEY2] = 'Prop2';                       // Uses Symbol Variable as property.
myObj.key3 = 'Prop3';                        // A simple property.
myObj.key4 = 'Prop4';                        // A simple property.

console.log(myObj[KEY1]);                    // Returns Prop1
console.log(myObj[KEY2]);                    // Returns Prop2



//-----------------------------
// FURTHER SYMBOL NOTES:
//-----------------------------
// Symbols are not enumerable in the for...in loops - the below will only return myObj.key3 and myObj.key4 when it loops through the myObj array objects i.e. only the two regular properties are showing up.
for(let i in myObj) {
   console.log(`${i}: ${myObj[i]}`);
}

// Symbols are ignored by JSON.stringify
console.log(JSON.stringify({key: 'prop'}));                 // Returns {"Key":"Prop"} as JSON string.
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));    // Returns {} as a JSON string.