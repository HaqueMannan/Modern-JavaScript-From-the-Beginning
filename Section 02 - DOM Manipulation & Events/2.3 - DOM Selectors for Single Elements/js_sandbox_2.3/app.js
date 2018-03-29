/* 
----------------------------- 
DOM Selectors for Single Elements
----------------------------- 
*/


//-----------------------------
// DOM SELECTOR SINGLE ELEMENT - TYPE ONE
//-----------------------------
// Syntax to grab single element by id name:
// document.getElementById()

console.log(document.getElementById("task-title"));

// Get things from the element
console.log(document.getElementById("task-title").id);
//if a id element had a class we could return the className. If none then it will return blank.
console.log(document.getElementById("task-title").className);

const taskTitle = document.getElementById("task-title");

// Change styling of the Tasks element:
//Toggle on and off to see the change (comment/uncomment script):
taskTitle.style.background = "#333";
taskTitle.style.color = "#fff";
taskTitle.style.padding = "5px";
// If you wanted to hide the element for example on a click you would use the JavaScript below:
// taskTitle.style.display = "none";

// Change content of element:
//Toggle on and off to see the change (comment/uncomment script):
taskTitle.textContent = "Task List";
taskTitle.innerText = "My Tasks";      // This does the same as the above but changes the text to My Task.
taskTitle.innerHTML = "<span style='color:red'>Task List</span>";    // Insert HTML elements.


//-----------------------------
// DOM SELECTOR SINGLE ELEMENT - TYPE TWO
//-----------------------------
// Syntax to grab a single element by a query selector:
// document.querySelector()

// Get Element by id:
console.log(document.querySelector("#task-title"));
// Get Element by class:
console.log(document.querySelector(".card-title"));
// Get Element by the element itself:
console.log(document.querySelector("h5"));


//Select a specific element from the DOM where there are more than one:
//Only the first li element will change red and not all li elements because it is a Single Element Selector.
document.querySelector("li").style.color = "red";

// You can do subclasses or nested elements but again it will target the first element because it is a Single Element Selector. Comment out to turn the first list item red, otherwise it will be blue.
document.querySelector("ul li").style.color = "blue";

// Select the last list element using the CSS :last-child sudo element.
document.querySelector("li:last-child").style.color = "red";

// Select the third element using the CSS nth-child(3) sudo elements.
document.querySelector("li:nth-child(3)").style.color = "yellow";

// Select the forth element using the CSS nth-child(4) sudo elements.
document.querySelector("li:nth-child(4)").textContent = "Hello World";

// Select all the odd numbered elements using the CSS nth-child(odd) sudo elements. However, only the first one odd list item will change colour because this is a Single Element Selector.
document.querySelector("li:nth-child(odd)").style.background = "#ccc";

// Select the even numbered elements using the CSS nth-child(even) sudo elements. However, only the first one even list item will change colour because this is a Single Element Selector.
document.querySelector("li:nth-child(even)").style.background = "#f4f4f4";