/* 
----------------------------- 
Arrow Functions
----------------------------- 
*/


//-----------------------------
// ARROW FUNCTIONS
//-----------------------------
// Regular Function
const sayHello = function() {
   console.log('Hello');
}
sayHello();

// Arrow Function
const sayHelloSpanish = () => {
   console.log('Hola');
}
sayHelloSpanish();


// Arrow Functions without braces (one line functions)
const sayHelloFrench = () => console.log('Bonjour');
sayHelloFrench();

//-----------------------------
// ARROW RETURNS
//-----------------------------
// Regular Function Return
const sayHelloItalian = function() {
   return 'Ciao';
}
console.log(sayHelloItalian());

// Arrow One Line Returns
const sayHelloGerman = () => 'Hallo';
console.log(sayHelloGerman());

//-----------------------------
// ARROW RETURN OBJECT
//-----------------------------
// Return object
const sayWelcome = () => ({ msg: 'Hello' });
console.log(sayWelcome());


//-----------------------------
// ARROW RETURN OBJECT LITERALS WITH PARAMETERS
//-----------------------------
// Single parameter does not need parentheses ()
const sayGreeting = name => console.log(`Hello ${name}`);
sayGreeting("Tom");

// Multiple parameters require parentheses ()
const sayGreeting2 = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);
sayGreeting2('Tom', 'Hardy');


//-----------------------------
// ARROW FUNCTIONS AS CALLBACKS
//-----------------------------
// Array of Users
const users = ['Sasha', 'Joanne', 'William'];

// Regular map() Function As Callbacks
const nameLengths = users.map(function(name) {
   return name.length;
});
console.log(nameLengths);

// Array As Callback (Shorter Syntax)
const nameLengths1 = users.map((name) => {
   return name.length;
});
console.log(nameLengths1);

// Array As Callback (Shortest Syntax)
const nameLengths2 = users.map(name => name.length);
console.log(nameLengths2);