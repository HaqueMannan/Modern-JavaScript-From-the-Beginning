/* 
----------------------------- 
ES6 Classes
----------------------------- 
*/

//-----------------------------
// PERSON CLASS
//-----------------------------
// Our Class can take in constructors and methods. ES6 makes it easier to syntactically write objects.
class Person {
   constructor(firstName, lastName, dob) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthday = new Date(dob);
   }

   greeting() {
      return `Hello there ${this.firstName} ${this.lastName}`;
   }

   calculateAge() {
      const diff = Date.now() - this.birthday.getTime();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
   }

   getsMarried(newLastName) {
      this.lastName = newLastName;
   }

   static addNumbers(x, y) {
      return x + y;
   }
}


//-----------------------------
// CREATE OBJECT USING A CLASS & LOGGING CLASS OBJECT
//-----------------------------
const mary = new Person('Mary', 'Williams', '11-13-1980');
console.log(mary);
mary.getsMarried('Thompson');
console.log(mary.greeting());

//Static Method
console.log(Person.addNumbers(1,2));