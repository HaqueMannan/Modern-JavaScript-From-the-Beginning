/* 
----------------------------- 
Dates & Times
----------------------------- 
*/

let val;          // Init val variable.

//Date & Time
const today = new Date();           // Instantiating a date object.
val = today;
console.log(val, typeof val);       // Wed Mar 21 2018 20:59:02 GMT+0000 (GMT) & Object.

let birthday = new Date('9-10-1981 11:25:00');     // Changing the date and time to a specific date/time.
val = birthday;
console.log(val.toUTCString());               // Convert to GMT format.

birthday = new Date('October 10 1981');       // Selecting date using long date format.
val = birthday;
console.log(val.toUTCString());
birthday = new Date('10 October 1981');       // Selecting date using long date format.
val = birthday;
console.log(val.toUTCString());
birthday = new Date('10 Oct 1981');       // Selecting date using long date format.
val = birthday;
console.log(val.toUTCString());

birthday = new Date('9/10/1981');               // Selecting date using short date format.
val = birthday;
console.log(val.toUTCString());


//Get Dates
val = today.getMonth();             // Returns today's month in numerical format (0 based).
console.log(val);
val = today.getDate();              // Returns the date/day of the month.
console.log(val);
val = today.getDay();               // Returns the day of the week in numerical format (0 based).
console.log(val);
val = today.getFullYear();          // Returns the year.
console.log(val);

//Get Time
val = today.getHours();             // Returns current hour.
console.log(val);
val = today.getMinutes();           // Returns current minute.
console.log(val);
val = today.getSeconds();           // Returns current seconds.
console.log(val);
val = today.getMilliseconds();      // Returns current milliseconds.
console.log(val);
val = today.getTime();              // Returns current time stamp.
console.log(val);


//Set Date
birthday.setMonth(2);
console.log(birthday);
birthday.setDate(21);
console.log(birthday);
birthday.setFullYear(2018);
console.log(birthday);

//Set Time
birthday.setHours(21);
console.log(birthday);
birthday.setMinutes(48);
console.log(birthday);
birthday.setSeconds(30);
console.log(birthday);