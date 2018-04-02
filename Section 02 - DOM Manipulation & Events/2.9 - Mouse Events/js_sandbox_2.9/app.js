/* 
----------------------------- 
Mouse Events
----------------------------- 
*/

//-----------------------------
// Declaring variables to use
//-----------------------------
const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");


//-----------------------------
// Mouse Events to run the Event Handler:
//-----------------------------
// 1) Click
// clearBtn.addEventListener("click", runEventClearBtn);

// 2) Double click
// clearBtn.addEventListener("dblclick", runEventClearBtn);

// 3) Mousedown
// clearBtn.addEventListener("mousedown", runEventClearBtn);

// 4) Mouseup
// clearBtn.addEventListener("mouseup", runEventClearBtn);

// 5) Mouseenter
// card.addEventListener("mouseenter", runEventCard);

// 6) Mouseleave
// card.addEventListener("mouseleave", runEventCard);

// 7) Mouseover
// card.addEventListener("mouseover", runEventCard);

// 8) Mouseout
// card.addEventListener("mouseout", runEventCard);

// 9) Mousemove
card.addEventListener("mousemove", runEventCard);


//-----------------------------
// Event Handler (Function)
//-----------------------------
// Creating an event for the clear button that will: 
// 1) prevent the default refresh of the clear button
// 2) log the Event Type from the e event object.
// 3) Provide information on the mouse X and Y coordinates
// 4) Change the background colour to a random RGB colour based on X and Y coordinates (R=X, G=Y, B=40).
function runEventClearBtn(e) {
   e.preventDefault()
   console.log(`EVENT TYPE: ${e.type}`);
   heading.textContent= `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
   document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}

// Creating an event for the card that will: 
// 1) log the Event Type from the e event object.
// 2) Provide information on the mouse X and Y coordinates
// 3) Change the background colour to a random RGB colour based on X and Y coordinates (R=X, G=Y, B=40).
function runEventCard(e) {
   console.log(`EVENT TYPE: ${e.type}`);
   heading.textContent= `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
   document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}


// Currently set addEventListener to 'mousemove' - comment out the current Mouse Event and uncomment another mouse event to test/see all the different mouse events available to trigger an addEventListener.