/* 
----------------------------- 
Removing & Replacing Elements
----------------------------- 
*/


//-----------------------------
// REPLACE ELEMENT
//-----------------------------
// REPLACE THE <H5> TASK ELEMENT WITH A <H2> TASK ELEMENT.

// STEP 1: CREATE A NEW ELEMENT (REFER TO SECTION 2.6 ON CREATING A NEW ELEMENT):
// Create element.
const newHeading = document.createElement("h2");
// Add id.
newHeading.id = "task-title";
// Append a new text node.
newHeading.appendChild(document.createTextNode("Task List"));

// STEP 2: LOCATE THE OLD HEADING YOU WISH TO REPLACE AND ADD IT TO A VARIABLE:
// Get the old heading.
const oldHeading = document.getElementById("task-title");
// Get the parent element (this is required for the .replaceChild() method on the parent object).
const cardAction = document.querySelector(".card-action");

// STEP 3: REPLACE THE OLD HEADING WITH THE NEW HEADING USING THE VARIABLES SETUP ABOVE:
// Replace Elements
cardAction.replaceChild(newHeading, oldHeading);


//-----------------------------
// REMOVE ELEMENT
//-----------------------------
// REMOVE SPECIFIC LIST ITEMS FROM THE UL LIST.

// STEP 1: CREATE A VARIABLE FOR THE PARENT AND CHILD ELEMENTS:
// Select all li elements and store it in a variable.
const lis = document.querySelectorAll("li");
// Select the ul parent element and store it in a variable.
const list = document.querySelector("ul");

// STEP 2A: REMOVING A SPECIFIC CHILD ELEMENT (.remove() METHOD):
// Remove specific list item
lis[0].remove();
// STEP 2B: REMOVING A SPECIFIC CHILD ELEMENT (.removeChild() METHOD):
// Remove specific child element
list.removeChild(lis[3]);




//-----------------------------
// CLASSES & ATTRIBUTES
//-----------------------------
// Get the first list items
const firstLi = document.querySelector("li:first-child");
// Get the first children of the li element i.e. the <a> link tag which is a child of the li element.
const link = firstLi.children[0];

let val;

// CLASSES:
val = link.className;
console.log(val);                // Returns the string of the class names.
val = link.classList;
console.log(val);                // Returns a DOMTokenList (not an array but setup as an array)
val = link.classList[0];
console.log(val);                // Returns a string of a specific class from the DOMTokenList
link.classList.add("test");      // Adds a class called 'test' to the selected li element.
link.classList.remove("test");   // Removes a class called 'test' from the selected li element.

val = link;                      // Allows you to see the above values in the console.log(val)
//Note you will need to comment out the below first in order to see the .classList.add/.classList.remove functions in the console.


// ATTRIBUTES
val = link.getAttribute("href");
console.log(val);                // Get a specific Attribute which returns the #.
val = link.setAttribute("href", "http://google.com");
console.log(val);                // Set a attribute i.e. href = http://google.com.
link.setAttribute("title", "Google");
console.log(val);                // Set "title = Google" attribute to the element.
val = link.hasAttribute("title");
console.log(val);                // Check to see if an element has an attribute. Returns True.
link.removeAttribute("title");
console.log(val);                // Removes title attribute from the element.

val = link;                      // To see what the element now looks like when we console.log(val).
console.log(val);