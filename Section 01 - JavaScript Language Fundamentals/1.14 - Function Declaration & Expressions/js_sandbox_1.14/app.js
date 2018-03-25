/* 
----------------------------- 
Function Declaration & Expressions
----------------------------- 
*/


// -----------------------------
// FUNCTION DECLARATIONS
// -----------------------------
// Function Declaration Example 1:
function greet(){
   return "Hello"
}
console.log(greet());


// Function Declaration Example 2:
function greet2(firstName, lastName){
   return "Hello " + firstName + " " + lastName;
}
console.log(greet2("John", "Doe"));


//ES5 Example 2 Default Parameter Values:
function greetES5(firstName, lastName){
   if(typeof firstName === "undefined"){firstName = "Rodger"}
   if(typeof lastName === "undefined"){lastName = "Red"}
   return "Hello " + firstName + " " + lastName;
}
console.log(greetES5());


//ES6 Example 2 Default Parameter Values:
function greetES6(firstName = "Sue", lastName = "Griffith"){
   return "Hello " + firstName + " " + lastName;
}
console.log(greetES6());



// -----------------------------
// FUNCTION EXPRESSIONS
// -----------------------------
// Function Expression Example 1:
const square = function(x){
   return x*x;
};
console.log(square(8));

// Function Expression Example 1 Default Parameter Value:
const square2 = function(x = 3){
   return x*x;
};
console.log(square2());



// -----------------------------
// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
// -----------------------------
// IFFE Example 1:
(function(){
   console.log("IIFE Ran..");
})();

// IIFE Example 2:
(function(name){
   console.log("Hello "+ name);
})("Marco");



// -----------------------------
// PROPERTY METHODS
// -----------------------------
// Property Method Example 1:
const todo = {
   add: function(){
      console.log("Add todo..");
   },
   edit: function(id){
      console.log(`Edit todo ${id}`);
   }
}
// Property Method Example 2 - defining methods outside of the object:
todo.delete = function(){
   console.log("Delete todo...");
}

todo.add();
todo.edit(22);
todo.delete();