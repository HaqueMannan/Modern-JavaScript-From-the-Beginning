/* 
----------------------------- 
8.3 - Regular Expressions [Part 2] - Metacharacter Symbols
----------------------------- 
*/


/* HOW TO TEST REGULAR EXPRESSION WITH STRING FOR MATCHES:
STEP 1) Change the Regular Expression on line 46 with your own expression.

STEP 2) Change the const str variable value at line 51 to whatever string you wish to test, for example: const str = 'Hello'

STEP 3) With Live Server running save this file and look at the JavaScript console to view the results to see if the String matches the Regular Expression. You will have 2 results one from the exec(str) function and the other from the reTest(re, str) function.

STEP 4) Return to Default setup, save and close file once completed testing:
Line 46 Default: re = /Change Me/i;
Line 51 Default: const Str = 'Grey?';
*/



//-----------------------------
// INIT VARIABLE FOR REGULAR EXPRESSION
//-----------------------------
let re;


//-----------------------------
// REGULAR EXPRESSION LITERAL CHARACTERS AND METACHARACTER SYMBOLS
//-----------------------------
// Literal Characters
re = /hello/;           // Case Sensitive
re = /hello/i;          // Case Insensitive

// Metacharacter Symbols
re = /^h/i;             // Must start with
re = / world$/i;        // Must ends with
re = /^hello$/i;        // Must begin and end with
re = /h.llo/i;          // Matches any ONE character (single character wild card)
re = /h*llo/i;          // Matches any character 0 or more times (complete multi-character wild card)
re = /gre?a?y/i;        // Optional character
re = /gre?a?y\?/i;      // Escape character 

// Test your own expressions using meta-character symbols:
re = /Change Me/i;

//-----------------------------
// TEST REGULAR EXPRESSION
//-----------------------------
//String to Match - change this to whatever string you want to test to see if it matches with the regular expression above:
const str = 'Gray?';


// Log Results:
const result = re.exec(str);
console.log(result);


// Test Regular Expression with String.
function reTest(re, str) {
   if(re.test(str)) {
      console.log(`${str} matches ${re.source}`);
   } else {
      console.log(`${str} does NOT match ${re.source}`);
   }
}

// Log Results from function:
reTest(re, str);