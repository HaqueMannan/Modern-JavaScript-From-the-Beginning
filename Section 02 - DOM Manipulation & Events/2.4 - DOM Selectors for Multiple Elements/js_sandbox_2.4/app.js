/* 
----------------------------- 
DOM Selectors for Multiple Elements
----------------------------- 
*/


//-----------------------------
// DOM SELECTOR MULTIPLE ELEMENT - TYPE ONE
//-----------------------------
// Syntax for selecting multiple element:
// document.getElementsByClassName()

const itemsList = document.getElementsByClassName('collection-item');
console.log(itemsList);
console.log(itemsList[0]);                // Access specific HTML Collection object.
itemsList[0].style.color = 'red';         // Change font colour of the first item to red.
itemsList[3].textContent = 'Hello';       // Change text content.
// (Note: the below querySelector has changed all text to Hello).


// Selecting Multiple Elements from only within the 'ul' list and not from the global scope.
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);


//-----------------------------
// DOM SELECTOR MULTIPLE ELEMENT - TYPE TWO
//-----------------------------
// Syntax for selecting multiple element:
// document.getElementsByTagName()

let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);                   //Same as above select the first li.
// lis[0].style.color = 'red';         //Same as above change font colour of the first item to red.
// lis[3].textContent = 'Hello';       //Same as above change text content.



//-----------------------------
// CONVERT HTML COLLECTION INTO ARRAY
//-----------------------------
// Convert the above HTML Collection (let lis variable) into an array:
lis = Array.from(lis);
console.log(lis);
// Array Method will now work on the converted HTML Collection (lis). Comment out the conversion and you will see the below will not work and throw a TypeError.
lis.reverse();

// We can now perform a forEach loop on the array object:
// Loop through lis and change the context to index number: Hello
lis.forEach(function(li, index){
  console.log(li.className);
  li.textContent = `${index}: Hello`;
});
console.log(lis);


//-----------------------------
// QUERY SELECTOR ALL
//-----------------------------
// Syntax for selecting all multiple element:
// document.querySelectorAll()

//We can use CSS queries just like jQuery for ul and li class elements:
const items = document.querySelectorAll('ul.collection li.collection-item');
console.log(items);        //This returns a Node list.

//Node List do not require conversion into an array - we can perform array function/methods on Node List, demonstrated below:
items.forEach(function(item, index){
    item.textContent = `${index}: Hello`;
});

//We can change the style for all the odd and even list items background colour (compare/contrast this to section 2.3 - DOM Selectors for Single Elements where it only applied to the first instance):
const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

//ForEach loop example to change all odds list background colour.
//forEach Loops will only work with Arrays and Node Lists only.
liOdd.forEach(function(li, index){
  li.style.background = '#ccc';
});

//For loop example to change all evens list background color.
//For Loops will work with all HTML Collections, Node Lists and Arrays. We can still use the .length property on a HTML Collection and call on the index which is why a for loop works with a HTML collection.
for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = '#f4f4f4';
};