/* 
----------------------------- 
Iterators & Generators
----------------------------- 
*/



//-----------------------------
// ITERATORS EXAMPLE:
//-----------------------------
function nameIterator(names) {
   let nextIndex = 0;

   return {
      next: function() {
         return nextIndex < names.length ?
         { value: names[nextIndex++], done: false } :
         { done: true }
      }
   }
}

// Note: the array contain any data type and does not need to be a string.
// Create an array of names
const namesArr = ['Jack', 'Jill', 'John'];
// Init iterator and pass in the names array
const names = nameIterator(namesArr);

// Note: .next() will return object {value: "Jack", done: false}
// We can output the value using .value or the done value using .done
console.log(names.next().value);          // .value returns Jack .done returns false
console.log(names.next().value);          // .value returns Jill .done returns false
console.log(names.next().value);          // .value returns John .done returns false
console.log(names.next().value);          // .value return unidentified (nothing next in the array)
                                          // .done returns true.



//-----------------------------
// GENERATOR EXAMPLE:
//-----------------------------
// Note: the yield can contain any data type and does not need to be a string. 
function* sayNames() {
   yield 'Jack';
   yield 'Jill';
   yield 'John';
}

// Init  sayNames generator.
const name = sayNames();

// Note: .next() will return object {value: "Jack", done: false}
// We can output the value using .value or the done value using .done
console.log(name.next().value);           // .value returns Jack .done returns false
console.log(name.next().value);           // .value returns Jill .done returns false
console.log(name.next().value);           // .value returns John .done returns false
console.log(name.next().value);           // .value Return unidentified .done returns true
                                          // There are no more yields in the generator function.



//-----------------------------
// ID CREATOR FUNCTION:
//-----------------------------
function* createIds() {
   let index = 1;

   //while true will always return true. Yield will increment the index by 1.
   while(true) {
   yield index++;
   }
}

// Init createIds generator.
const gen = createIds();

console.log(gen.next().value);            // Returns 1
console.log(gen.next().value);            // Returns 2
console.log(gen.next().value);            // Returns 3
// We can continue to generate the next index number using console.log(gen.next().value); as the while(true) will always return true and the index number would be iterated by +1 to generate the next id number.