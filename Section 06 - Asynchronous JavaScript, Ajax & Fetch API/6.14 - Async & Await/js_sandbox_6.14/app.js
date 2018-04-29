/* 
----------------------------- 
Async & Await
----------------------------- 
*/


//-----------------------------
// STANDARD FUNCTION VS ASYNC
//-----------------------------
// Standard function that returns Hello.
function myFunc() {
   return 'Hello';
}
console.log(myFunc());                 // Returns Hello.

// Async Await:
// By adding async keyword in front of the myFunct1() function will now return a promise.
async function myFunc1() {
   return 'Hello';
}

myFunc1()
   .then(res => console.log(res));     // Returns Hello in the console.



//-----------------------------
// ASYNC & AWAIT EXAMPLE 1
//-----------------------------
// Setting a new promise with a timeout of 1 second before it resolves.
async function myFunc2() {
   const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve('Hello'), 1000);
   });

   // Variable for fabricating an error - change this to true to test the error response.
   const error = false;

   if(!error){
      const res = await promise; // Wait until promise is resolved after 1 second.
      return res;
   } else {
      await Promise.reject(new Error('Something went wrong'));
   }
}

myFunc2()
.then(res => console.log(res))            // Returns Hello.
.catch(err => console.log(err));          // Returns error message 'Something went wrong'.



//-----------------------------
// ASYNC & AWAIT EXAMPLE 2
//-----------------------------
// ASYNC & AWAIT Keywords work best with the Fetch API

async function getUsers() {
   // We Await response of the fetch call:
   const response = await fetch('https://jsonplaceholder.typicode.com/users');

   // Only proceed once the await fetch is resolved:
   const data = await response.json();

   // Only proceed once the second promise (await response.json()) is resolved:
   return data;
}

// we do not need to pass in a url as we have hardcoded it into our function above.
getUsers().then(users => console.log(users));      // Returns the API users.