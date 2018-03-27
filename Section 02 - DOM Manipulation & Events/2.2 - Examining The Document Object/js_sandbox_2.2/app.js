/* 
----------------------------- 
DOM Object Properties
----------------------------- 
*/

//-----------------------------
// DOM PROPERTIES
//-----------------------------

let val;

//Document Object - returns the HTML structure.
val = document;
console.log(val);

//All of HTML document tags as arrays.
val = document.all;
console.log(val);
//Uses zero indexing to call back specific tag from the document array.
val = document.all[2];
console.log(val);
//Find the length (properties) of the document array (i.e. number of elements in the DOM).
val = document.all.length;
console.log(val);

//Access the Document Head tags alone.
val = document.head;
console.log(val);
//Access the Document Body tags alone.
val = document.body;
console.log(val);

//Access the doctype - should return HTML.
val = document.doctype;
console.log(val);

//Access the loopback address i.e. domain name.
val = document.domain;
console.log(val);

//Access to the whole loopback address including the protocol, port and the page.
val = document.URL;
console.log(val);

//Access to the character set.
val = document.characterSet;
console.log(val);

//Access to the content type i.e. text/html.
val = document.contentType;
console.log(val);


//-----------------------------
// SELECTING DOM PROPERTIES WITHOUT SELECTORS
//-----------------------------
//Access all the forms on the page.
val = document.forms;
console.log(val);

//Access the forms using the index (if there are more forms they will have index numbers assigned to them).
val = document.forms[0];
console.log(val);

//Select ID of the form = task-form
val = document.forms[0].id;
console.log(val);

//Method of the form = get method (forms have get and post methods)
val = document.forms[0].method;
console.log(val);

//Returns any action on the form - none on this form - but if the HTML form tag has and action for example <form action = "index.php" id=task-form> this will return http://127.0.0.1:5500/index.php in the console (return the index.php file). 
val = document.forms[0].action;
console.log(val);

//-----------------------------

//Return the link elements = 6 links.
val = document.links;
console.log(val);

//Access certain links using the index number.
val = document.links[0];
console.log(val);

//Return the link id - there is none in the HTML.
val = document.links[0].id;
console.log(val);

//Return a string of all the classes = delete item   secondary-content
val = document.links[0].className;
console.log(val);

//Return a DOMtokensList of the different classes (use zero index to select a specific class)
val = document.links[0].classList[0];
console.log(val);

//-----------------------------

//Return images - if none then returns an empty collection.
val = document.images;
console.log(val);

//-----------------------------

//Return scripts = 3 JavaScripts at the bottom of the body tag.
val = document.scripts;
console.log(val);

// Return the src attribute of a script = app.js which is the 3rd script.
val = document.scripts[2].getAttribute('src');
console.log(val);


//-----------------------------
// CONVERT HTML COLLECTION TO ARRAYS
//-----------------------------
//HTML collections are not arrays and so we cannot perform loop actions as they only apply to array objects. However, we can convert them into arrays, see below demonstrations.

let scripts = document.scripts;

//Converts HTML collection in scripts variable into an Array Object stored in scriptsArr variable.
//comment the below out and the forEach loop further down does not work as it only applies to arrays only.
let scriptsArr = Array.from(scripts);

//If you comment the above array conversion, change scriptsArr.forEach to scripts.forEach to demonstrate the TypeError message.
scriptsArr.forEach(function(script) {
   console.log(script);
});
console.log(val);

//Combining the getAttribute to log out only the src links.
scriptsArr.forEach(function(script) {
   console.log(script.getAttribute('src'));
});
console.log(val);