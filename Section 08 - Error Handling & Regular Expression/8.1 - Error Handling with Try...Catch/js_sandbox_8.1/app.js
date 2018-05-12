/* 
----------------------------- 
Error Handling with Try...Catch
----------------------------- 
*/



//-----------------------------
// BASIC ERROR HANDLING EXAMPLE
//-----------------------------
/* Produce a ReferenceError
Error Reason: This throws an error because there is no declared function. 

Result: The catch block will handle the error i.e. log the err object. The finally block will run the code block regardless of he result in the try...catch block. Anything outside the try...catch...finally blocks will continue to run i.e. 'program continues...' will appear in the console.

This is an elegant way of handling errors. */
try {
   myFunction();
} catch(err) {
   console.log(err);                               // Output the whole error object.
   console.log(err.name);                          // Output only the error name.
   console.log(err.message);                       // Output only the error message.
   console.log(err instanceof ReferenceError);     // Returns True because error is a ReferenceError.
   console.log(err instanceof TypeError);          // Returns False because error is not a TypeError.
} finally {
   console.log('Finally runs reguardless of result...');
}
console.log('Program continues...');


//-----------------------------
// FURTHER ERROR HANDLING EXAMPLE
//-----------------------------
/* Produce a TypeError
Error Reason: This throws an error because you cannot call a function/method from null. */
try{
   null.myFunction();
} catch(e) {
   console.log(e);                                 // Output the whole error object.
   console.log("It's null stupid!");               // You can format the output however you want.
}

/* Produce a SyntaxError
Error Reason: This throws an error because the function cannot evaluation the JavaScript as it sees the Hello as a variable. 

Further Notes: eval is used to evaluate a JavaScript for example we can write console.log(eval('2+2') which will return 4. If we wrote eval('"Hello World"') this will not cause a Syntax error because it no longer views Hello as a variable. */
try{
   console.log(eval('Hello World'));
} catch(e) {
   console.log(e);                                 // Output the whole error object.
} finally{
   console.log(eval('"Hello World"'));             // Output Hello World.
   console.log(eval('2+2'));                       // Output 4.
}


/* Produce a URIError
Error Reason: This throws an error because it does not make sense to pass in a % in this function. */
try{
   decodeURIComponent('%');
} catch(error) {
   console.log(error);                                 // Output the whole error object.
}


/* Produce our own Error
Error Reason: throw a user has no name error when we check to see if a user name exists.
Result: throw will output the string as a error string in the console.
*/
const user = {email: 'jdoe@gmail.com'};

try{
   if(!user.name) {
      throw ('User has no name');                     // Use throw to create our own error message.
   }
} catch(e) {
   console.log(e);
}


/* Format as a SyntaxError 
Result: this will format the error message in the format of a core error as we have seen in the above core error examples e.g. URIError, SyntaxError, TypeError, ReferenceError etc. */
try{
   if(!user.name) {
      throw new SyntaxError('User has no name');      // Format as a new SyntaxError object.
   }
} catch(e) {
   console.log(e);
}


/* Format as a SyntaxError 
Result: log your error as your own type of error type within the catch. */
try{
   if(!user.name) {
      throw new SyntaxError('User has no name');      // Format as a new SyntaxError object.
   }
} catch(e) {
   console.log(`UserError: ${e.message}`);
}