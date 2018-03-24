/* 
----------------------------- 
If Statements & Comparison Operators
----------------------------- 
*/


//-----------------------------
//If Else Statement Syntax:
//-----------------------------

// if(something){
//    do something
// } else {
//    do something else
// }


//-----------------------------
// Logical Comparison Operators:
//-----------------------------
let id = 100;
console.log("id = " + id);

// EQUAL TO (==)
// id = 101          //test me for a different answer.
if(id == 100){
   console.log("Q1. Is id Equal To 100? CORRECT - Equal to 100");
} else {
   console.log("Q1. Is id Equal To 100? INCORRECT - Not Equal to 100");
}

// NOT EQUAL TO (!=)
// id = 101          //test me for a different answer.
if(id != 101){
   console.log("Q2. Is id Not Equal To 100? CORRECT - Not Equal to 101");
} else {
   console.log("Q2. Is id Not Equal To 100? INCORRECT - Equal to 101");
}

// EQUAL TO VALUE & TYPE (===)
// id = "100"          //test me for a different answer.
if(id === 100){
   console.log("Q3. Is id Equal To 100 (Value and Data Type)? CORRECT - Equal to 100 (Value & Type)");
} else {
   console.log("Q3. Is id Equal To 100 (Value and Data Type)? INCORRECT - Not Equal to 100 (Value & Type)");
}

// NOT EQUAL TO VALUE & TYPE (!==)
// id = "100"          //test me for a different answer.
if(id !== 100){
   console.log("Q4. Is id Not Equal To 100 (Value and Data Type)? CORRECT - Not Equal to 100 (Value & Type)");
} else {
   console.log("Q4. Is id Equal To 100 (Value and Data Type)? INCORRECT - Equal to 100 (Value & Type)");
}

// Test if undefined (test to see if does not exist or is not defined)
// id = null;         //test me for a different answer.
if(typeof id !== "undefined"){
   console.log(`Q5. Is id value undefined? INCORRECT - The ID is ${id}`);
} else {
   console.log("Q5. Is id value undefined? CORRECT - id does not exist or has NULL/UNDEFINED value");
}

// GREATER THAN OR EQUAL TO (>=) / LESS THAN OR EQUAL TO (<=)
// id = 101          //test me for a different answer.
if(id <= 100){
   console.log("Q6. Is id Smaller Than or Equal To 100? CORRECT - id is smaller than or equal to 100");
} else {
   console.log("Q6. Is id Smaller Than or Equal To 100? INCORRECT - id is greater than 100");
}


//-----------------------------
//Else If Statement Syntax:
//-----------------------------

// if(something){
//    do something
// } else if (something){
//    do something else
// } else {
//    do something else
// };

//Example:
const colour = "yellow";

if(colour === "red"){
   console.log("Colour is red");
} else if(colour === "blue"){
   console.log("Colour is blue");
} else if (colour === "green"){
   console.log("Colour is green");
} else {
   console.log(`Colour is not red, blue or green. Color is ${colour}`);
}


//-----------------------------
// Combining Logical Comparison Operators:
//-----------------------------
const name = "Steve";
const age = 70;

// AND (&&) 
if(age > 0 && age < 12){
   console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
   console.log(`${name} is a teenager`);
} else {
   console.log(`${name} is an adult`);
}

// OR (||)
if(age < 16 || age > 65){
   console.log(`${name} can not run in race`);
} else {
   console.log(`${name} is registered for the race`);
}


//-----------------------------
// Ternary Operator
//-----------------------------
console.log(id === 100 ? "CORRECT" : "INCORRECT");


//-----------------------------
// Syntax Without Braces ({ })
//-----------------------------
if(id === 100)
   console.log("ID is 100");
else
   console.log("ID is not 100");