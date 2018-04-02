/* 
----------------------------- 
Keyboard Events
----------------------------- 
*/


//-----------------------------
// Declaring variables to use
//-----------------------------
const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const heading = document.querySelector("h5");
const select = document.querySelector("select");


//-----------------------------
// Form Button Submit to run the Event Handler:
//-----------------------------
// 0) Submit Form Button e.g. Add Task button.
form.addEventListener("submit", runEventForm);


//-----------------------------
// Keyboard Events to run the Event Handler:
//-----------------------------
// 1) Keydown
taskInput.addEventListener("keydown", runEventTaskInput);

// 2) Keyup
// taskInput.addEventListener("keyup", runEventTaskInput);

// 3) Keypress
// taskInput.addEventListener("keypress", runEventTaskInput);

// 4) Focus
// taskInput.addEventListener("focus", runEventTaskInput);

// 5) Blur
// taskInput.addEventListener("blur", runEventTaskInput);

// 6) Cut
// taskInput.addEventListener("cut", runEventTaskInput);

// 7) Paste
// taskInput.addEventListener("paste", runEventTaskInput);

// 8) Input
// taskInput.addEventListener("input", runEventTaskInput);


//-----------------------------
// Select List Change to run the Event Handler:
//-----------------------------
// 9) Change Select List Option
select.addEventListener("change", runEventSelect);


//-----------------------------
// Event Handler (Function)
//-----------------------------
// Creating an event trigger for the submit button that will:
// 1) Log the event type in the console.
// 2) Log the input value from taskInput variable in the console.
// 3) Clear the task input field.
// 4) Prevent the default behaviour of a form submit button.
function runEventForm(e){
   console.log(`EVENT TYPE: ${e.type}`);
   console.log(taskInput.value);
   taskInput.value = " ";
   e.preventDefault();
}


// Creating an event trigger for the task input that will:
// 1) Log the event type in the console.
// 2) Log the input value in the console.
// 3) Add the input value to the inner text of the <h5> tags.
function runEventTaskInput(e){
   console.log(`EVENT TYPE: ${e.type}`);
   console.log(e.target.value);
   heading.innerText = e.target.value;
}


// Creating an event trigger for the select that will:
// 1) Log the event type in the console.
// 2) Log the input value in the console.
function runEventSelect(e){
   console.log(`EVENT TYPE: ${e.type}`);
   console.log(e.target.value);
}


// The addEventListener for the Submit and Selector change are not commented out and can remain this way as they will only trigger when the button or selector are triggered. 
// Currently addEventListener for the Keyboard Event is set to 'keydown' - comment out the current keyboard event and uncomment another keyboard event to test/view the different keyboard event types available to use with the .addEventListener method.

//Extra Notes:
// .target property relates to the element the event happened on.