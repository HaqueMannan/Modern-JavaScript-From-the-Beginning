/* 
----------------------------- 
General Loops
----------------------------- 
*/

// -----------------------------
// FOR LOOP
// -----------------------------
//General Rule: use the for loop when you know the number of iterations.
for(let i = 0; i < 3; i++){
   console.log(i);
}
// The number 3 is not console logged because 3 is not less than 3 (if we change the condition to <= this will then include 3).



// -----------------------------
// SKIP ITERATION (CONTINUE KEYWORD)
// -----------------------------

for(let i = 3; i < 7; i++){
   if(i === 5){
      console.log("5 is my favourite number");
      continue;      //uncomment me to see the difference.
   }
   console.log("Number " + i);
}
// The continue keyword skips the current iteration back to the loop condition to the next iteration - therefore the number 5 will not console log. Try commenting out continue to see the difference (this will print 5 is my favourite number and the number 5 in the console).

// -----------------------------
// BREAK OUT OF LOOP (BREAK KEYWORD)
// -----------------------------
for(let i = 7; i < 10; i++){
   if(i === 9){
      console.log("Stop the loop");
      break;
   }
   console.log(i);
}
// The break keyword, similar in approach to the continue keyword above, will break out of the loop entirely when the if statement returns TRUE.



// -----------------------------
// WHILE LOOP
// -----------------------------
//General Rule: use the while loop when you dont know the number of iterations.
let i = 0;

while(i < 5){
   console.log("Number " + i);
   i++;
}
// Works the same way as the for loop.



// -----------------------------
// DO WHILE
// -----------------------------
let x = 100;

do {
   console.log("Number " + x);
   x++;
}

while(x < 10);
// The do code will always run once no matter what - this is the big difference between While and Do While.



// -----------------------------
// LOOP THROUGH ARRAYS OBJECTS
// -----------------------------
const cars = ["Audi", "BMW", "Mercedes", "Jaguar"];

//For Loops with Arrays
for(let i = 0; i < cars.length; i++){
   console.log(cars[i]);
}

//While Loops with Arrays
let a = 0;

while(a < cars.length){
   console.log(`Car: ${cars[a]}`);
   a++;
}

// -----------------------------
// ARRAY LOOP: FOREACH
// -----------------------------
// Example 1 - function with one parameter
cars.forEach(function(car){
   console.log(car);
});

// This code is soo much cleaner than the for and while loops above and is advisable to use for Arrays.

// Example 2 - function with three parameters (2 parameters are optional)
cars.forEach(function(car, index, array){
   console.log(`${index} : ${car}`);
   console.log(array);
});

// -----------------------------
// ARRAY LOOP: MAP
// -----------------------------
const users  = [
   {id: 1, name:"John"},
   {id: 2, name: "Sara"},
   {id: 3, name: "Karen"},
   {id: 4, name: "Steve"}
];

//Map Loop Example 1 (New ID Array):
const ids = users.map(function(user){
   return user.id;
});

console.log(ids);

//Map Loop Example 2 (New Name Array):
const names = users.map(function(cur){
   return cur.name;
});

console.log(names);

// -----------------------------
// FOR IN LOOP
// -----------------------------
const user = {
   firstName: "John", 
   lastName: "Doe",
   age: 40
}

//Loops through and returns all the Keys within the array object.
for(let x in user){
   console.log(x);
}

//Loops through and returns all the Keys within the array object. Console logging the Key:Value pairs using Template Literals ('x' returns the key and 'users[x]' returns the value).
for(let x in user){
   console.log(`${x} : ${user[x]}`);
}