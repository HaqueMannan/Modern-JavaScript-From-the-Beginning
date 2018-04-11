/* 
----------------------------- 
Prototypes Explained
----------------------------- 
*/

// Object.prototype - Object literals all have this prototype.
// Person.prototype - Constructors have their own prototypes e.g. Persons.prototype but also have Object.prototype. This is known as prototype chain.


//-----------------------------
// PERSON CONSTRUCTOR
//-----------------------------
function Person(firstName, lastName, dob) {
   this.firstName = firstName;
   this.lastName = lastName;
   this.birthday = new Date(dob);
   // this.calculateAge = function(){
   //   const diff =  Date.now() - this.birthday.getTime();
   //   const ageDate = new Date(diff);
   //   return Math.abs(ageDate.getUTCFullYear() - 1970);
   // }
}

// Note: the calculateAge should not appear in the Person constructor, rather it should appear in the Person.prototype because this function is the same in all objects created using the Person constructor. Therefore, we should only record actual properties in the constructor and all other methods should go in the prototype.


//-----------------------------
// CREATE PROTOTYPE METHODS
//-----------------------------
// Calculate age:
Person.prototype.calculateAge = function(){
   const diff =  Date.now() - this.birthday.getTime();
   const ageDate = new Date(diff);
   return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name:
Person.prototype.getFullName = function(){
   return `${this.firstName} ${this.lastName}`;
}

// Gets married last name:
Person.prototype.getsMarried = function(newLastName){
   this.lastName = newLastName;
}


//-----------------------------
// CREATE OBJECT USING THE CONSTRUCTOR
//-----------------------------
const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(mary);
// The properties firstname, lastname & dob appear for mary as properties. If we look at the __Proto__ object we can now see the different functions created above in the Person.prototype avaibale to use as seen below.


//-----------------------------
// CONSOLE LOG PROTOTYPE METHODS
//-----------------------------
// Person.prototype:
console.log(john.calculateAge());         // Returns 27.
console.log(mary.getFullName());          // Returns Mary Johnson.
mary.getsMarried('Smith');                // Manipulate the object property to change the last name.
console.log(mary.getFullName());          // Returns Mary Smith.

// Object.prototype:
console.log(mary.hasOwnProperty('firstName'));     // Returns True.
console.log(mary.hasOwnProperty('getFullName'));   // Returns False. This is in the prototype and not a property of its own.