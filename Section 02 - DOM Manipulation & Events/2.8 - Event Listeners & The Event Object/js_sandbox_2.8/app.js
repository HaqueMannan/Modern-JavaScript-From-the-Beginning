/* 
----------------------------- 
Event Listeners & The Event Object
----------------------------- 
*/

// -----------------------------
// EVENT LISTENER WITH AN UNNAMED FUNCTION
// -----------------------------
//Below is an example of an event listener for the clear task button using an unnamed function.

// document.querySelector(".clear-tasks").addEventListener("click", function(e){
//    console.log("Hello World");
//    //e.preventDefault();
// });

//SUMMARY:
// The addEventListener takes in two parameters, the event i.e. 'click' and a function().
// We have passed in an unnamed function() which console.log Hello World every time we click the clear button.
// We also passed in a event object (e) as a parameter/argument in our unnamed function. We can use this event object to call on the preventDefault() method to stop the default action of the form button, which is either refreshes the current page or loads another link.
// We can stop the clear button from refreshing or redirecting to another page by inserting the # symbol in the href within the HTML document - for example: <a class="clear-tasks btn black" href="#">Clear Tasks</a> will achieve the same result as the .preventDefault() method.


// -----------------------------
// EVENT LISTENER WITH A NAMED FUNCTION
// -----------------------------
//Below is an example of an event listener for the clear task button using a named function.
document.querySelector(".clear-tasks").addEventListener("click", onClick);

// SUMMARY:
// We selected 'click' as the event we are listening to.
// Unlike the above we have used a named function called onClick.
// When the event occurs this will trigger (i.e. look for) a function called onClick which we have defined below to console.log "Clicked" and other event object methods.
// As we can see, having a named function is much neater than having an unnamed function.
// Notice we have added the e object within our onClick function. Below we are going to explore Event Objects.


// -----------------------------
// EVENT OBJECTS
// -----------------------------
function onClick(e){
   console.log("Clicked");
   e.preventDefault();  // prevent the default behaviour of the clear button i.e. refresh so we can view the console.log below.

   let val;
   val = e;
   console.log(val);             // View the event object (e) properties in the console.

   // Event Target Elements:
   val = e.target;
   console.log(val)              // Returns the actual HTML element.
   val = e.target.id;
   console.log(val)              // Returns the target id - in this case it does not have one.
   val = e.target.className;
   console.log(val)              // Returns the target class names of the clear button.
   val = e.target.classList;
   console.log(val)              // Returns the target class names of the clear button as a list.

   // Event type
   val = e.type;
   console.log(val)              // Returns the event type i.e. click. If we changed the addEventListener type to "mouseover" then we would get mouseover.

   // Timestamp
   val = e.timeStamp;
   console.log(val);             // Returns the time stamp when we clicked the button.

   // Coordinates of the event relative to the browser window
   val = e.clientY;
   val = e.clientX;
   console.log(val);

   // Coordinates of the event relative to the element itself
   val = e.offsetY;
   val = e.offsetX;
   console.log(val);
}