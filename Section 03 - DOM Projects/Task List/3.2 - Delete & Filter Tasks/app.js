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
   // Remove Task Event:
   taskList.addEventListener('click', removeTask);
   // Clear Task Event:
   clearBtn.addEventListener('click', clearTasks);
   // Filter Tasks Event:
   filter.addEventListener('keyup', filterTasks);
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


// 3) Remove Task Function:
// This will remove a task when the x link is clicked.
function removeTask(e) {
   if(e.target.parentElement.classList.contains('delete-item')) {
      if(confirm('Are You Sure?')) {
         e.target.parentElement.parentElement.remove();
      }
   }
};


// 4) Clear Tasks:
// This will clear the list contents.
function clearTasks() {
   // taskList.innerHTML = '';

   // Faster method
   while(taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
   }

   // https://jsperf.com/innerhtml-vs-removechild
};


// 5) Filter Tasks:
// This will filter the Task List items based on user input.
function filterTasks(e) {
   const text = e.target.value.toLowerCase();

   document.querySelectorAll('.collection-item').forEach(function(task){
      const item = task.firstChild.textContent;
      if(item.toLowerCase().indexOf(text) != -1){
         task.style.display = 'block';
      } else {
         task.style.display = 'none';
      }
   });
};