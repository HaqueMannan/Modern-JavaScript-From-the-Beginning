/* 
----------------------------- 
Prototypal Inheritance
----------------------------- 
*/

//-----------------------------
// PERSON CONSTRUCTOR & PROTOTYPE
//-----------------------------
// Constructor:
function Person(firstName, lastName) {
   this.firstName = firstName;
   this.lastName = lastName;
}

// Prototype:
Person.prototype.greeting = function(){
   return `Hello there ${this.firstName} ${this.lastName}`;
}


const person1 = new Person('John', 'Doe');
console.log(person1.greeting());


//-----------------------------
// CUSTOMER CONSTRUCTOR & PROTOTYPE
//-----------------------------
// Constructor:
function Customer(firstName, lastName, phone, membership) {
   Person.call(this, firstName, lastName);
   this.phone = phone;
   this.membership = membership;
}


//-----------------------------
// PROTOTYPAL INHERITANCE
//-----------------------------
// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);
// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');
console.log(customer1);
console.log(customer1.greeting());        // Person Greeting Prototype

//-----------------------------
// OVERRIDING INHERITANCE PROTOTYPE
//-----------------------------
// Customer greeting method:
Customer.prototype.greeting = function(){
   return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
}

console.log(customer1.greeting());        // Override Person Greeting with Customer Greeting Prototype.