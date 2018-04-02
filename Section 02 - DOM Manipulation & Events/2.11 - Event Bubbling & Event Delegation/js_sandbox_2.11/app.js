/* 
----------------------------- 
Event Bubbling & Event Delegation
----------------------------- 
*/


//-----------------------------
// EVENT BUBBLING
//-----------------------------
// Example of event bubbling - console log the parent div names depending on what is clicked.
// Uncomment the below code to visually view Event Bubbling through the console.

//-----------------------------

// document.querySelector(".card-action").addEventListener("click", function(){
//    console.log("card action");
// });
// document.querySelector(".card-title").addEventListener("click", function(){
//    console.log("card title");
// });
// document.querySelector(".card-content").addEventListener("click", function(){
//    console.log("card content");
// });
// document.querySelector(".card").addEventListener("click", function(){
//    console.log("card");
// });
// document.querySelector(".col").addEventListener("click", function(){
//    console.log("col");
// });

//-----------------------------

/* Example 1) 
Click on "Task List" in the browser:

   <div class="col s12">                        parent class   = col
   <div id="main" class="card">                 parent class   = card
   <div class="card-content">                   parent class   = card-content
   <span class=card-title">Task List<span>      child class    = card-title
   <div class="card-action">                    child class    = card-action

Results: Adding an .addEventListener on the card-title, when we click the "Task List" element in the browser this will trigger the console.log() on the card-title EventListener; however, it will also trigger off all of the parent .addEventListener's events even though the elements were not clicked on - this is due to bubbling up the DOM (i.e. console.log for card-content, card and col triggered also).

/* Example 2)
Click on "Task" in the browser:
   <div class="col s12">                        parent class   = col
   <div id="main" class="card">                 parent class   = card
   <div class="card-content">                   parent class   = card-content
   <span class=card-title">Task List<span>      child class    = card-title
   <div class="card-action">                    child class    = card-action

Results: Adding an event listener on the card-action, when we click the "Task" element this will console log card-action and trigger all the parent .addEventListeners through bubbling up the DOM, even though the elements were not clicked (i.e. console.log for card-content, card and col triggered also). 
Note that this event did not trigger the .addEventListener on the card-title because this is not a parent of card-action (they are both children of card-content).
*/



//-----------------------------
// EVENT DELEGATION
//-----------------------------

// EXAMPLE 1: WITHOUT EVENT DELEGATION
// Note: The EventListener will only work on the first [0] ".delete-item" list item and will not apply to the other list items below. Uncomment below codes and comment out Example 2 code to test it out:

// const delItem = document.querySelector(".delete-item");
// delItem.addEventListener("click", deleteItem);



// EXAMPLE 2: WITH EVENT DELEGATION
// c.f above: this is when we would use Event Delegation where we need the .addEventListener to apply down from the parent (ul) element to its children (li a) elements that have the ".delete-item" class. This would mean all elements and not the first one will have the event listener.

document.body.addEventListener("click", deleteItem);

function deleteItem(e){
   // if(e.target.parentElement.className === "delete-item secondary-content"){
   //    console.log("delete item");
   // }

   if(e.target.parentElement.classList.contains("delete-item")){
      console.log("delete item");
      e.target.parentElement.parentElement.remove();
   }
}




/* -----------------------------
Additional Notes:
--------------------------------
If we console.log(e.target) and clicked on the x icon this will return the <i class="fa fa-remove> tag which refers to the icon. Therefore, we would have had to write in our if statement 
   if(e.target.className === "fa fa-delete") 
as our condition. However, if we use the .parentElement property we can now have in our if statement the parent element class name to target the <a> link rather than the <i> class name in our conditional:
   if(e.target.parentElement.className === "delete-item secondary-content")

This will now work with any of the elements with the class of "delete-item secondary-content" through Event Delegation.


.className method looks at the entire string of the class and so we must add all the class names in the class attribute of the element for it to work (i.e. has to match the whole string).

c.f
.classList is a better way compared to the above as we can look at the .classList property in conjunction with the contains() method to see if any element contains a class of "delete-item". This will pick up any elements that has "delete-items" in the list of classes.

e.target.parentElement.parentElement.remove();
e.target will return the <i> tag, the .parentElement will return the first parent element i.e. the <a> tag, the last .parentElement will return the parent of the parent element i.e. the <li> Tag. This is how we would remove the whole <li> element from the list.

-----------------------------*/
