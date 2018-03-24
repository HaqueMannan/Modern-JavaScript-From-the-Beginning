/* 
----------------------------- 
Switches
----------------------------- 
*/


//EXAMPLE 1:
// Change the color value to see the result in the below Switch Statement.
const color = 'yellow';
// Console log whether the color is red, blue or none of the two. Alternative to If Else Statement.
switch(color){
   case 'red':
      console.log('Color is red');
      break;
   case 'blue':
      console.log('Color is blue');
      break;
   default:
      console.log('Color is not red or blue');
      break;
}

//EXAMPLE 2:
let day;
// Change the value of day variable from a number to string.
switch(new Date().getDay()){
   case 0:
      day = 'Sunday';
      break;
   case 1:
      day = 'Monday';
      break;
   case 2:
      day = 'Tuesday';
      break;
   case 3:
      day = 'Wednesday';
      break;
   case 4:
      day = 'Thursday';
      break;
   case 5:
      day = 'Friday';
      break;
   case 6:
      day = 'Saturday';
      break;
}
// Console log today's day. Try running this code on different days to see it change the day value.
console.log(`Today is ${day}`);