/* 
----------------------------- 
Constructors & the 'this' Keyword
----------------------------- 
*/

// Steps to Creating a Constructor:
// 1. Create function constructor
// 2. Add properties/arguments as parameters.
// 3. Create key:value pairs using this.key =  hardcoded value or property/argument.


//-----------------------------
// CREATING A CONSTRUCTOR
//-----------------------------
// Example 1 - People Constructor:
// Constructors should start with a capital letter:
function People(name, age){
   this.name = name;
   this.age = age;
   console.log(this)                   // 'this' keyword in the Function Scope returns all People objects.
}

console.log(this);                     // 'this' keyword in the Global Scope returns the windows object.

//Instantiating People Constructor to create multiple objects:
const john = new People('John', 25);
const alan = new People('Alan', 30);
console.log(alan.name);                // Returns value associated with name key i.e. Alan.


//-----------------------------


// Example 2 - Person Constructor:
function Person(name, dob){
   this.name = name;
   this.birthday = new Date(dob);
   this.calculateAge = function(){
      const diff =  Date.now() - this.birthday.getTime();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
   }
}

const brad = new Person('Brad', '9-10-1981');
console.log(brad);
console.log(brad.calculateAge());