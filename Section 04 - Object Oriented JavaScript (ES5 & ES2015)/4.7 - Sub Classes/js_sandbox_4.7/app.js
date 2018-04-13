/* 
----------------------------- 
Sub Classes
----------------------------- 
*/

//-----------------------------
// PERSON CLASS
//-----------------------------
class Person {
   constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
   }

   greeting() {
      return `Hello there ${this.firstName} ${this.lastName}`;
   }
}


//-----------------------------
// CUSTOMER SUB CLASS
//-----------------------------
class Customer extends Person {
   constructor(firstName, lastName, phone, membership) {
      super(firstName, lastName);

      this.phone = phone;
      this.membership = membership;
   }

   static getMembershipCost() {
      return 500;
   }
}


//-----------------------------
// CREATE OBJECT USING A SUB CLASS & LOGGING CLASS OBJECT
//-----------------------------
const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');
console.log(john.greeting());
console.log(Customer.getMembershipCost());