/* 
----------------------------- 
Block Scope With Let & Const
----------------------------- 
*/

// -----------------------------
// GLOBAL SCOPE & FUNCTION SCOPE
// -----------------------------

// GLOBAL SCOPE VARIABLES
var a = 1;
let b = 2;
const c = 3;

console.log("Global Scope: ", a, b, c);

// FUNCTION SCOPE VARIABLES
function test() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log("Function Scope: ", a, b, c);
}

test();

// As you can see in the console Function Scope variable a, b and c are treated as different variables from the Global Scope variables.



// -----------------------------
// GLOBAL SCOPE & BLOCK SCOPE (IF)
// -----------------------------

// GLOBAL SCOPE VARIABLES
var d = 7;
let e = 8;
const f = 9;

console.log("Global Scope: ", d, e, f);

// BLOCK SCOPE VARIABLES
if(true) {
  // Block Scope
  var d = 10;
  let e = 11;
  const f = 12;
  console.log("(If) Block Scope: ", d, e, f);
}

console.log("Global Scope: ", d, e, f);

// The Var Global Scope value changed as a result of the Block Scope variable value change.
// Let and Const Global Scope value remained the same in the Global Scope and was not affected by the Block Scope variable value change.
// Let and Const work how most programming languages operates with variables. Var is unique to JavaScript and what many people did not like about JavaScript because it causes security risks and confusion in code where Block Scope variables with the same name as Global Scope variables are changing the Global Scope variable default values.


// -----------------------------
// GLOBAL SCOPES & BLOCK SCOPES (FOR LOOPS)
// -----------------------------
// GLOBAL SCOPE VARIABLES
var g = 1;
let h = 2;
const i = 3;

console.log("Global Scope: ", g, h, i);

//VAR BLOCK SCOPE
for(var g = 0; g < 10; g++) {
  console.log(`Var Loop: ${g}`);
}

console.log("Global Scope: ", g, h, i);

// The Global Scope var variable has changed value to the Block Scope i.e from 1 to 10.


// GLOBAL SCOPE VARIABLES
var j = 1;
let k = 2;
const l = 3;

console.log("Global Scope: ", j, k, l);

//LET BLOCK SCOPE
for(let k = 0; k < 10; k++) {
  console.log(`Let Loop: ${k}`);
}

console.log("Global Scope: ", j, k, l);

// The Global Scope let variable value remains the same regardless of the Block Scope change c.f to var.


// GLOBAL SCOPE VARIABLES
var m = 1;
let n = 2;
const o = 3;

console.log("Global Scope: ", m, n, o);

//CONST BLOCK SCOPE
for(const o = 0; o < 10; o++) {
  console.log(`Const Loop: ${o}`);
}

// Cannot loop a const variable, this will return TypeError; however, the Global Scope const variable value remains the same regardless of the Block Scope change c.f to var.