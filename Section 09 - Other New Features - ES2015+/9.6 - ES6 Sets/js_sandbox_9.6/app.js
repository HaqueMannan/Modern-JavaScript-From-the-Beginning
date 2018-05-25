/* 
----------------------------- 
ES6 Sets
----------------------------- 
*/



//-----------------------------
// ES6 SETS
//-----------------------------
// SETS - Store unique values of any type

// CREATE NEW SET
const set1 = new Set();

// ADD VALUES TO SET
set1.add(100);                   // Number
set1.add('A string');            // String
set1.add({name: 'John'});        // Object
set1.add(true);                  // Boolean
set1.add(100);

console.log(set1);               // Return the Set i.e. 4 values within set.
//EVALUATION: Event if we add the same value twice, the set will only show only the unique values within the set i.e. set1 has 4 unique values in the set. They have to be unique values.

// ALTERNATIVE METHOD OF ADDING VALUES TO THE SET
const set2 = new Set([1, true, 'string']);
console.log(set2);


//-----------------------------
// SETS METHODS
//-----------------------------
// GET COUNT OF VALUES WITHIN THE SET
console.log(set1.size);

// CHECK FOR VALUES - RETURNS TRUE & FALSE ANSWERS
console.log(set1.has(100));                     // Returns True
console.log(set1.has(50 + 50));                 // Returns True because expression equals 100
console.log(set1.has({name: 'John'}));          // Returns False
//EVALUATION: although we have an object within the set and we typed the exact same characters, it will still return false because this is a reference object and not a primitive value stored in the stack, objects are stored in the heap which makes it a reference value. Even if we were to say:
console.log({name: 'John'} === {name: 'John'});
// This will return false because it is pointing to a different location in memory. This is the reason for why we get false returned when we check for an object.

// DELETE FROM THE SET
set1.delete(100);
console.log(set1);


//-----------------------------
// ITERATING THROUGH SETS
//-----------------------------
// FOR...OF LOOP 
for(let item of set1) {
   console.log(item);
}

// FOREACH LOOP
set1.forEach((value) => {
   console.log(value);
});


//-----------------------------
// CONVERT SET TO ARRAY
//-----------------------------
const setArr = Array.from(set1);
console.log(setArr);