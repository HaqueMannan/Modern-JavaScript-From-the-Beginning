/* 
----------------------------- 
8.5 - Regular Expressions [Part 4] - Shorthand Character Classes
----------------------------- 
*/


/* HOW TO TEST REGULAR EXPRESSION WITH STRING FOR MATCHES:
STEP 1) Change the Regular Expression on line 78 with your own expression.

STEP 2) Change the const str variable value at line 84 to whatever string you wish to test, for example: const str = 'Hello'

STEP 3) With Live Server running save this file and look at the JavaScript console to view the results to see if the String matches the Regular Expression. You will have 2 results one from the exec(str) function and the other from the reTest(re, str) function.

STEP 4) Return to Default setup, save and close file once completed testing:
Line 78 Default: re = /Change Me/i;
Line 84 Default: const Str = 'dkjekdxydjekdj';
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

// Brackets [] - Character Sets
re = /gr[ae]y/i;        // Must be an a or e
re = /[GF]ray/i;        // Must be a G or F
re = /[^GF]ray/i;       // Match anything except a G or F
re = /[A-Z]ray/;        // Match any uppercase letter
re = /[a-z]ray/;        // Match any lowercase letter
re = /[A-Za-z]ray/;     // Match any letter
re = /[0-9]ray/;        // Match any digit between 0-9
re = /[0-9][0-9]ray/;   // Match any digit between 0-9 and another between 0-9 e.g. 10.

// Braces {} - Quantifiers
re = /Hel{2}o/i;        // Must occur exactly {x} amount of times
re = /Hel{2,4}o/i;      // Must occur exactly {x} amount of times
re = /Hel{2,}o/i;       // Must occur at least {x} times

// Parentheses () - Grouping
re = /^([0-9]x){3}$/;   // Grouping expressions together so to have 3x3x3x.

// Shorthand Character Classes
re = /\w/;              // Word character - alphanumeric or _
re = /\w+/;             // + = one or more
re = /\W/;              // Non-Word character
re = /\d/;              // Match any digit
re = /\d+/;             // Match any digit 0 or more times
re = /\D/;              // Match any Non-digit
re = /\s/;              // Match whitespace char
re = /\S/;              // Match non-whitespace char
re = /Hell\b/i;         // Word boundary

// Assertions
re = /x(?=y)/;          // Match x only if followed by y
re = /x(?!y)/;          // Match x only if NOT followed by y

// Test your own expressions using meta-character symbols:
re = /Change Me/i;

//-----------------------------
// TEST REGULAR EXPRESSION
//-----------------------------
//String to Match - change this to whatever string you want to test to see if it matches with the regular expression above:
const str = 'dkjekdxydjekdj';


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