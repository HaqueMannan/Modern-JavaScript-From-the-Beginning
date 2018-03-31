/* 
----------------------------- 
Traversing the DOM
----------------------------- 
*/


//-----------------------------
// TRAVERSING THE DOM - SETUP
//-----------------------------
let val;

const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");

val = listItem;
console.log(val);       // Return the first li list item.
val = list;
console.log(val);       // Return the whole ul list items.

//-----------------------------
// GET CHILD NODES
//-----------------------------
val = list.childNodes;
console.log(val);
// This will return a Node list of all the child nodes.
// Note that not only do we have the li node elements returned but also have text nodes. The text nodes are actually only the line breaks.
// If you look at the HTML document we are actually looking at the children of the ul class=collection element (i.e. all the li inbetween the ul.collection tags). Since the </li> is on a line break the DOM counts this line break as a text node. Therefore, if we removed the line breaks of all </li> this will remove the text nodes. Try changing the HTML document by removing the line break to see the text node disappear e.g. ...</li> <li class="collection-item">...</li> <li class="collection-item">...</li>

val = list.childNodes[0];
console.log(val);                   // Returns the first node object within the list i.e. the #text node.
val = list.childNodes[0].nodeName;
console.log(val);                   // Returns the name of the node only i.e. #text.
val = list.childNodes[3].nodeType;
console.log(val);                   // Returns the node type i.e. 3.
// Below is a type lookup table which will help with defining the result. The above 3 relates to a Text node.

//-----------------------------
// CHILD NODES TYPE LOOKUP TABLE
//-----------------------------
// 1 = Element
// 2 = Attribute (deprecated)
// 3 = Text node
// 8 = Comment
// 9 = Document itself
// 10 = Doctype


//-----------------------------
// GET CHILDREN ELEMENT NODES
//-----------------------------
val = list.children;
console.log(val);
// This will only return the children element nodes and ignore the text nodes c.f above first example for GET CHILD NODE section.
//Note: this is a HTML collection and not a node list unlike the above.

val = list.children[1];
console.log(val);                // Returns the second li element within the HTML collection list.
list.children[1].textContent = "Hello";
console.log(val);                // Change the text content of the second item from List Item to Hello.


//-----------------------------
// GET CHILDREN OF CHILDREN - ELEMENT NODES
//-----------------------------
val = list.children[3].children;
console.log(val);
// Returns the children of a children as a HTML Collection i.e. the delete link within the <li> tags.

val = list.children[3].children[0];
console.log(val);                // Access specific index of the children of children elements.

list.children[3].children[0].id = "test-link";
console.log(val);                // Add an id tag of "test-link" to the selected element.


//-----------------------------
// OTHER CHILD NODES & CHILDREN NODES PROPERTIES
//-----------------------------
// 1) First Child:
val = list.firstChild;
console.log(val);                // Returns first node i.e. #Text.
val = list.firstElementChild;
console.log(val);                // Returns first element node from li list.


// 2) Last Child:
val = list.lastChild;
console.log(val);                // Returns last node i.e. #Text.
val = list.lastElementChild;
console.log(val);                // Returns last element node from li list.


// 3) Count Child Elements:
val = list.childElementCount;
console.log(val);                // Returns count of child elements i.e. 5 li children elements in ul.


// 4) Get Parent Node:
val = listItem.parentNode;
console.log(val);                // Return the parent node of li child items i.e. ul element.
val = listItem.parentElement;
console.log(val);                // In most case does exactly the same as above but selects only elements.
val = listItem.parentElement.parentElement;
console.log(val);                // Returns the parent of a parent.


// 5) Get Next Sibling:
val = listItem.nextSibling;
console.log(val);
// Returns the next node sibling i.e. #Text node - this deals with other types of nodes and not just the element nodes i.e. the same as .childNode; properties above.
val = listItem.nextElementSibling;
console.log(val);
// Returns the next element sibling i.e. only deals with element nodes in contrast to the above.
val = listItem.nextElementSibling.nextElementSibling;
console.log(val);
// Returns the next element sibling of the next element sibling i.e. we are traversing down(x2) the li list.


// 6) Get Previous Sibling:
val = listItem.previousSibling;
console.log(val);
// Returns the previous node i.e. #Text.
val = listItem.previousElementSibling;
console.log(val);
// This will return null because we are dealing with the first node and there are no previous siblings.


//Traversing the Element Siblings - moving down and up the element DOM:
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;
console.log(val);
// Traversing down(x2) and then Traversing up(x1) from the li element nodes.
// The .nextElementSibling; traverses down a element node.
// The .previousElementSibling; traverses up a element node.
// This is what we mean by Traversing the DOM.