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
   // DOM Load event
   document.addEventListener('DOMContentLoaded', getTasks);
   // Add Task Event:
   form.addEventListener('submit', addTask);
   // Remove Task Event:
   taskList.addEventListener('click', removeTask);
   // Clear Task Event:
   clearBtn.addEventListener('click', clearTasks);
   // Filter Tasks Event:
   filter.addEventListener('keyup', filterTasks);
}


// 2) Get Tasks from Local Storage:
// This will get Task List items from local storage.
function getTasks() {
   let tasks;
   if(localStorage.getItem('tasks') === null){
      tasks = [];
   } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
   }

   tasks.forEach(function(task){
      // CREATE LIST ELEMENT:
      // 1) Create li element
      const li = document.createElement('li');
      // 2) Add class
      li.className = 'collection-item';
      // 3) Create text node and append to li
      li.appendChild(document.createTextNode(task));

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
   });
};


// 3) addTask(e) Function:
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

   // Store in Local Storage
   storeTaskInLocalStorage(taskInput.value);

   // Clear input
   taskInput.value = '';
   // Prevent default submit button action
   e.preventDefault();
};


// 4) Store Task to Local Storage:
// This will store tasks to local storage.
function storeTaskInLocalStorage(task) {
   let tasks;
   if(localStorage.getItem('tasks') === null){
      tasks = [];
   } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
   }
 
   tasks.push(task);
   localStorage.setItem('tasks', JSON.stringify(tasks));
};


// 5) Remove Task Function:
// This will remove a task when the x link is clicked.
function removeTask(e) {
   if(e.target.parentElement.classList.contains('delete-item')) {
      if(confirm('Are You Sure?')) {
         e.target.parentElement.parentElement.remove();

          // Remove from Local Storage
          removeTaskFromLocalStorage(e.target.parentElement.parentElement);
      }
   }
};


// 6) Remove from Local Storage:
// This will remove Task List items from local storage.
function removeTaskFromLocalStorage(taskItem) {
   let tasks;
   if(localStorage.getItem('tasks') === null){
      tasks = [];
   } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
   }

   tasks.forEach(function(task, index){
      if(taskItem.textContent === task){
         tasks.splice(index, 1);
      }
   });

   localStorage.setItem('tasks', JSON.stringify(tasks));
};


// 7) Clear Tasks:
// This will clear the task list contents.
function clearTasks() {
   // taskList.innerHTML = '';

   // Faster method
   while(taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
   }

   // https://jsperf.com/innerhtml-vs-removechild

   // Clear from Local Storage
   clearTasksFromLocalStorage();
};


// 8) Clear Tasks from Local Storage:
// This will clear all Task List items from local storage.
function clearTasksFromLocalStorage() {
   localStorage.clear();
};


// 9) Filter Tasks:
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