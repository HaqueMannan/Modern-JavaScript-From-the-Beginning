/* 
----------------------------- 
ES6 Maps
----------------------------- 
*/



//-----------------------------
// ES6 MAPS
//-----------------------------
// MAPS = Key:Value pairs. Can use ANY data type as a key or value.

const map1 = new Map();

// Set Keys (a string, empty object and function):
const key1 = 'some string',
      key2 = {},
      key3 = function() {};

// Set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// Get values by key
console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// Count values in map.
console.log(map1.size);             // Returns 3 as there are 3 key:value pairs in the maps size.



//-----------------------------
// ITERATING MAPS
//-----------------------------
// Loop using for...of

// Iterate to get keys and values
for(let [key, value] of map1) {
   console.log(`${key} = ${value}`);
}
// This will return in the console:
// some string = Value of key1, [object Object] = Value of key2, function() {} = Value of key3


// Iterate to get keys only
for(let key of map1.keys()) {
   console.log(key);
}
// This will return in the console:
// some string, {}, f(){}


// Iterate to get values only
for(let value of map1.values()) {
   console.log(value);
}
// This will return in the console:
// Value of key1, Value of key2, Value of key3


// Loop using forEach 

// Iterate to get keys and values
map1.forEach(function(value, key){
   console.log(`${key} = ${value}`);
});
// This will return in the console:
// some string = Value of key1, [object Object] = Value of key2, function() {} = Value of key3


//-----------------------------
// CONVERT TO ARRAYS
//-----------------------------
// Create an array of the key value pairs
const keyValArr = Array.from(map1);
console.log(keyValArr);

// Create an array of the values
const valArr = Array.from(map1.values());
console.log(valArr);

// Create an array of the keys
const keyArr = Array.from(map1.keys());
console.log(keyArr);