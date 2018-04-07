//-------------------------
// DEFINE VARIABLES:
//-------------------------
// Task Form
const form = document.querySelector('#task-form');
// UL Links
const taskList = document.querySelector('.collection');
// Input Fields:  
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');
// Button
const clearBtn = document.querySelector('.clear-tasks');


//-------------------------
// FUNCTIONS:
//-------------------------
// Load all event listeners
loadEventListeners();


//-------------------------
// DEFINED FUNCTIONS:
//-------------------------
// 1) loadEventListener() Function:
// This will add a listener on the Task list form when the submit button is clicked.
function loadEventListeners() {
   // Add Task Event:
   form.addEventListener('submit', addTask);
};


// 2) addTask(e) Function:
// This will add a new <li> task element based on user input.
function addTask(e) {

   if(taskInput.value === '') {
      alert('Add a task!');
      return;
   }

   // CREATE LIST ELEMENT:
   // 1) Create li Element
   const li = document.createElement('li');
   // 2) Add class
   li.className = 'collection-item';
   // 3) Create text node and append to li
   li.appendChild(document.createTextNode(taskInput.value));

   // CREATE X ICON ELEMENT FOR THE LIST ELEMENT:
   // 1) Create new link element
   const link = document.createElement('a');
   // 2) Add class
   link.className = 'delete-item secondary-content';
   // 3) Add icon html
   link.innerHTML = '<i class="fa fa-remove"></i>';
   // 4) Append the link to li
   li.appendChild(link);

   // ADD NEWLY CREATED LIST ITEM TO UNORDERED LIST:
   // Append li to ul
   taskList.appendChild(li);


   // Clear input
   taskInput.value = '';
   // Prevent default submit button action
   e.preventDefault();
};