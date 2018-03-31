/* 
----------------------------- 
Creating Elements
----------------------------- 
*/

// Note: Comment out each code and step through incrementally by uncomment the code to see the new element being created in the DOM and values such as classes, id, attributes added to the new element. We only need the console.log(li) at the bottom to view the incremental changes.

// We are creating a new li element with the text 'Hello World' to add to the existing list of items along with adding the x icon to the new list element.
// Step 1-5: Create the new List Item & Append to UL list
// Step 6-9: Create the new Link Item (x icon) & Append to the new List Item created in the above steps.



//-----------------------------
// STEP 1 - CREATE ELEMENT
//-----------------------------
// This will create a new element from scratch.
// We are creating a 'li' element as indicated within the properties parameter.
const li  = document.createElement("li");


//-----------------------------
// STEP 2 - ADD CLASS & ID
//-----------------------------
// Add a class name of 'collection-items' to the new li element.
li.className = "collection-item";
// Add a id name of 'new-item' to the new li element
li.id = "new-item";


//-----------------------------
// STEP 3 - ADD ATTRIBUTE
//-----------------------------
// Add attribute to the new li element.
li.setAttribute("title", "New Item");


//-----------------------------
// STEP 4 - CREATE TEXT NODE AND APPEND
//-----------------------------
// Create text node and append (add) the text to the new li element innerHTML.
// .appendChild means you want to put something inside of something i.e. inside the li tags - example:
// <li>(appendChild)</li>
// document.createTextNode will create the node in order to append the text. Note: you could put this into a variable and then append the variable within the .appendChild property method.
li.appendChild(document.createTextNode("Hello World"));


//-----------------------------
// STEP 5 - APPEND LI AS CHILD TO UL
//-----------------------------
// This will add the new li element as a child element to the existing li list. This new element will now appear in the list visually on the browser.
// This will not create the x icon link for the new list item. We will need to create that link element and append it to the new li element item.
document.querySelector("ul.collection").appendChild(li);


//-----------------------------
// STEP 6 - CREATING NEW LINK ELEMENTS
//-----------------------------
// This will create a new link element - i.e. we are creating the x icon link.
// Creating an <a> tag for the link by passing it as a property method parameter.
const link = document.createElement("a");


//-----------------------------
// STEP 7 - ADD CLASSES
//-----------------------------
// We can add more than 1 class. Looking at the HTML the x icon link requires multiple classes.
link.className = "delete-item secondary-content";


//-----------------------------
// STEP 8 - ADD ICON HTML
//-----------------------------
// Looking at the HTML, there is no text node to add within the <a> tags but we require to add the <i> tags. 
// We will add the <i> tags using the .innerHTML property method.
link.innerHTML = "<i class='fa fa-remove'></i>";


//-----------------------------
// STEP 9 - APPEND LINK INTO LI
//-----------------------------
// Appending the link element into the li element
li.appendChild(link);

//-----------------------------

console.log(li);     //View console log changes of the newly created element to understand the process.