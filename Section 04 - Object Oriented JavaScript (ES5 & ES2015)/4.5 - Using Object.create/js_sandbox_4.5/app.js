/* 
----------------------------- 
Using Object.create
----------------------------- 
*/

//-----------------------------
// PERSON PROTOTYPE
//-----------------------------
// Create a variable and add object prototype methods/functions. This will act as the parent object for the Object.create() function below.
const personPrototypes = {
   greeting: function() {
      return `Hello there ${this.firstName} ${this.lastName}`;
   },
   getsMarried: function(newLastName) {
      this.lastName = newLastName;
   }
}


//-----------------------------
// OBJECT.CREATE
//-----------------------------
// Create a new object using the Object.create() method and pass in the parent function above.
// To add properties we would use the object name followed by the property and value.
// We can also call on prototype methods on the new object.
const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

mary.getsMarried('Thompson');
console.log(mary.greeting());


// Alternative Syntax using objects for the properties:
const elle = Object.create(personPrototypes, {
   firstName: {value: 'Elle'},
   lastName: {value: 'Mason'},
   age: {value: 32}
});

console.log(elle);
console.log(elle.greeting());