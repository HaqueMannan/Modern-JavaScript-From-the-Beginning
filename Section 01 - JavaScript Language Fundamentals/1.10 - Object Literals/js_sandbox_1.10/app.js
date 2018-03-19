/* 
----------------------------- 
Object Literals
----------------------------- 
*/


// ----------------------------- 
//Creating Object Literal:
// ----------------------------- 
const person = {
   firstName: "Sam",
   lastName: "Smith",
   age: 25,
   email: "sam.smith@gmail.com",
   hobbies: ["music", "sports"],
   address: {
      city: "Nottingham",
      country: "England"
   },
   getBirthYear: function(){
      return 2018 - this.age;
   }
};

let val;          //init variable val.
val = person;     //setting val to the person object.


// ----------------------------- 
// Get specific value using the Key:
// ----------------------------- 
// Method 1:
val = person.firstName;
console.log(val);
// Method 2:
val = person["lastName"];
console.log(val);

//Further examples of getting specific values:
val = person.age;
console.log(val);
val = person.hobbies[1];
console.log(val);
val = person.address.country;
console.log(val);
val = person.address["city"];
console.log(val);
val = person.getBirthYear();
console.log(val);


// ----------------------------- 
// Array Objects:
// ----------------------------- 

const people = [
   {name: "John", age: 30},
   {name: "Mike", age: 23},
   {name: "Nancy", age: 40}
];

//loop through array and print out the names of each person within the people array.
for(let i = 0; i < people.length; i++){
console.log(people[i].name);
};