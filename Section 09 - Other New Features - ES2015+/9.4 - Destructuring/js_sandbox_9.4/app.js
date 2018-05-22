/* 
----------------------------- 
Destructuring
----------------------------- 
*/



//-----------------------------
// DESTRUCTURING ASSIGNMENTS & REST PATTERN:
//-----------------------------
// Array destructuring:
let a, b;
[a, b] = [100, 200];

console.log(a);         // Returns 100.
console.log(b);         // Returns 200.


// Rest Pattern
// The ...rest Spread Operator will assign whatever is left over in the array to the rest variable.
[a, b, c, ...rest] = [100, 200, 300, 400, 500];
console.log(rest);      // Returns array object of 400 & 500.

// Rest Pattern also applies to Objects.
({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
console.log(a, b);      // Returns 100 200.
({ a, b, ...rest} = { a: 100, b: 200, c: 300, d: 400, e: 500 });
console.log(rest);      // Returns object {c: 300, d: 400, e: 500}



//-----------------------------
// ARRAY DESTRUCTURING EXAMPLE:
//-----------------------------
// Put John into person1, Beth into person2 and Mike into person3.
const people = ['John', 'Beth', 'Mike'];
const [person1, person2, person3] = people;

console.log(person1, person2, person3);         // Returns John Beth Mike.

// Parse array returned from a function:
function getPeople() {
   return ['Alvin', 'Simon', 'Theodore'];
}

// Init variables.
let person4, person5, person6;
// Set array to the getPeople() function.
[person4, person5, person6] = getPeople();

console.log(person4, person5, person6);         // Returns Alvin Simon Theodore.



//-----------------------------
// OBJECT DESTRUCTURING PATTERN:
//-----------------------------
// Object called Person.
const person = {
   name: 'John Doe',
   age: 32,
   city: 'Miami',
   gender: 'Male',
   sayHello: function(){
      console.log('Hello');
   }
}

// The old ES5 way of parsing object properties to variables.
const nameES5 = person.name,
      ageES5 = person.age,
      cityES5 = person.city;
console.log(nameES5, ageES5, cityES5);             // Returns John Doe 34 Miami.

// c.f. New ES6 Destructuring
const { name, age, city, sayHello } = person;
console.log(name, age, city);                      // Returns John Doe 34 Miami.
sayHello();                                        // also applies with functions i.e. returns Hello.