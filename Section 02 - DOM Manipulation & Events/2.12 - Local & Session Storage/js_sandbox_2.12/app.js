/* 
----------------------------- 
Local & Session Storage
----------------------------- 
*/

// In the Browser: Applications click on Local Storage or Session Storage to see what data is stored in the browser (key:value pairs).
// The method/API is exactly the same for both Local and Session storage, so if you know one you know the other.



// -----------------------------
// LOCAL STORAGE
// -----------------------------
// 1) Set Local Storage Item:
// localStorage.setItem("name", "John");
// localStorage.setItem("age", "30");
// console.log(name, age);

// 2) Get from Local Storage
// const name = localStorage.getItem("name");
// const age = localStorage.getItem("age");
// console.log(name, age);

// 4) Clear Local Storage:
// localStorage.clear();
// console.log(name, age);

// 3) Remove from Local Storage:
// localStorage.removeItem("name");
// console.log(name, age);
// Closing the browser does not remove the data from local storage. This must be done either in the browser Application DEV tool system or using the removeItem method.



// -----------------------------
// SESSION STORAGE
// -----------------------------
// Set Session Storage Item:
// sessionStorage.setItem("name", "Beth");
// sessionStorage.setItem("age", "20");
// console.log(name, age);

// 2) Get from Session Storage
// const name = localStorage.getItem("name");
// const age = localStorage.getItem("age");
// console.log(name, age);

// 3) Clear Local Storage:
// sessionStorage.clear();
// console.log(name, age);

// 4) Remove from Session Storage:
// sessionStorage.removeItem("name");
// console.log(name, age);
// Close the browser and the data will be removed from the session storage.


// -----------------------------
// JSON.Stringify & JSON.parse
// -----------------------------

document.querySelector("form").addEventListener("submit", function(e){
   const task = document.getElementById("task").value;
   let tasks;

   if(localStorage.getItem("tasks") === null) {
      tasks = [];
   } else {
      tasks = JSON.parse(localStorage.getItem("tasks"));
   }

   tasks.push(task);
   localStorage.setItem("tasks", JSON.stringify(tasks));

   alert("Task saved");
   e.preventDefault();
});


// ForEach Loop to list each task in the console.
// We require JSON.parse to convert the string into an object in order to perform the forEach loops. 
// ForEach() only works with array objects.
// function(task) - we can use any variable within the function e.g. change this to (function(x){console.log(x);});
const tasks = JSON.parse(localStorage.getItem("tasks"));

tasks.forEach(function(task){
   console.log(task);
});