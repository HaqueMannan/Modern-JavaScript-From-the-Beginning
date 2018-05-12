/* 
----------------------------- 
Regular Expressions [Part 1] - Evaluation Functions
----------------------------- 
*/



//-----------------------------
// REGULAR EXPRESSIONS - INTRO
//-----------------------------
// init variable called re for regular expression.
let re;
// set a regular expression literal within the variable. The way we do this is enclosing it within two forward slashes. Each character is a literal character i.e. it is going to be taken at its face value.
re = /hello/;
console.log(re);                             // This will return /hello/ in the console.
console.log(re.source);                      // This will return hello in the console.

// i Flag - Case Insensitive:
re = /hello/i;                               // i =  case insensitive
console.log(re);                             // This will return /hello/i in the console.
console.log(re.source);                      // This will return hello in the console.

// g Flag - Global Search
// re = /hello/g;                               // g = global search
// console.log(re);                             // This will return /hello/i in the console.
// console.log(re.source);                      // This will return hello in the console.


//-----------------------------
// REGULAR EXPRESSIONS - EXEC() FUNCTION
//-----------------------------
/* The exec() function will return the result in an array or null if there is no match. 
Below we are checking if hello world is within the re variable and storing the value in the results variable. */
const resultExec = re.exec('Tom hello world');

console.log(resultExec);
/* Evaluation:
This will return an array of ["hello", index: 4, input: "Tom hello world", groups: undefined] in the console. In the array we have: 
   - hello which is the actual expression in re 
   - we have the index position of where the expression value starts i.e hello starts at index 4. It goes from left to right using 0 indexing rule.
   - Input/String which we are matching with the regular expression i.e. Tom hello world.


If there are no matches this will return null for example:
   const resultExec = re.exec('Hi world');
   console.log(resultExec);
This will return Null in the console.

It will also return null even if the word is close to the literal expression for example:
   const resultExec = re.exec('Hell world');
   console.log(resultExec);
This will return Null in the console.

However, if the word contains hello this will return the array for example:
   const resultExec = re.exec('hellonote23F world');
   console.log(resultExec);
This will return ["hello", index: 0, input: "hellonote23F world", groups: undefined] in the console. Note that there are special meta characters we can use if we only want to look for the word without anything attached to it. We will see this later. */

console.log(resultExec[0]);                  // Returns the first in the array = hello
console.log(resultExec.index);               // Returns the index value = 0
console.log(resultExec.input);               // Returns the search string = Tom hello world



//-----------------------------
// REGULAR EXPRESSIONS - TEST() FUNCTION
//-----------------------------
/* The test() function returns true or false if there is a match or no match. */
const resultTest = re.test('Hello');

console.log(resultTest);                     // Returns whether true or false = true
/* Evaluation:
If re was set to re = /hello/; and we did resultTest = re.test('Hello') this will return false due to the function being case sensitive. 

However, if we use the i flag after the expression literal, we can make the regular expression case insensitive and therefore when we use the test() function, it will return true regardless of the case of each character. 
   re = /hello/i;

The g flag is a Global flag and it will search the whole paragraph/string of text to find all the instances of the regular expression and not just the first instance it has found within a paragraph/string of text. */



//-----------------------------
// REGULAR EXPRESSIONS - MATCH() FUNCTION
//-----------------------------
/* The match() function returns array result or null if there is no match. */
const str = 'Hello There';
const resultMatch = str.match(re);

console.log(resultMatch);                    // Returns array or null = null
/* Evaluation:
This is very similar to the exec() function except it runs the opposite. Instead of running it off the regular expression we create a variable and set the string that we would want to match and then we would create another variable and set that to the first variable followed by the .match() function and then pass in the regular expression as the parameter.

This will return the same result as the exec() function above.
*/



//-----------------------------
// REGULAR EXPRESSIONS - SEARCH() FUNCTION
//-----------------------------
/* The search() function returns the index of the first match. If no matches found it would return -1. */
const strSearch = 'Sally Hello There';
const result = strSearch.search(re);

console.log(result);                         // Returns index number of -1 = 6
/* Evaluation:
Hello is at index 6. Because we have the i flag it is case insensitive. If there was no match, this would have returned -1 in the console. */



//-----------------------------
// REGULAR EXPRESSIONS - REPLACE() FUNCTION
//-----------------------------
/* The replace() function returns the new string with some or all matches of a pattern. */
const strReplace = 'Hello There';
const newStr = strReplace.replace(re, 'Hi');

console.log(newStr);                         // Returns the new string replacing RegEx = Hi There
/* Evaluation:
The replace() function will look for the regular expression (a.k.a RegEx) and replace it with the second paramter i.e. Hi in this instance. Therefore the newStr variable now says Hi There rather than Hello There because the Hello has been replaced by Hi.
*/