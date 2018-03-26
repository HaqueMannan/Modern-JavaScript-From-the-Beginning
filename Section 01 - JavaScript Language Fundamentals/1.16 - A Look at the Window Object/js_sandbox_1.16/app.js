/* 
----------------------------- 
A Look at the Window Object
----------------------------- 
*/

// -----------------------------
// WINDOW METHODS / OBJECTS / PROPERTIES
// -----------------------------

// Alert
// alert("Hello World");            // An box appears on screen with the alert message.

// // Prompt                        // Similar to Alert but takes in an input from the user.
// const input = prompt();
// alert(input);

// // Confirm                       // Message box to confirm the action of a user e.g. deleting something.
// if(confirm("Are you sure")){
//    console.log("YES");           // OK button.
// } else {
//    console.log("NO");            // Cancel button.
// }


let val;

// Outer height and width
val = window.outerHeight;        //Browser height from the outer edges.
console.log(val);
val = window.outerWidth;         //Browser width from the outer edges.
console.log(val);

// Inner height and width
val = window.innerHeight;        //Browser height from the inner edges (i.e. inside the scrollbars)
console.log(val);
val = window.innerWidth;         //Browser width from the inner edges (i.e. inside the scrollbars)
console.log(val);

// Scroll points
val = window.scrollY;            // Vertical scroll
console.log(val);
val = window.scrollX;            // Horizontal scroll
console.log(val);

// Location Object
val = window.location;           // Location object
console.log(val);
val = window.location.hostname;  // Host name
console.log(val);
val = window.location.port;      // Port number
console.log(val);
val = window.location.href;      // full Host name & Port number
console.log(val);
val = window.location.search;    // http search criteria
console.log(val);

// Redirect
//window.location.href = "http://google.com";      // Redirect to internal/external http/href

//Reload
//window.location.reload();      // Reload web page - this is in global space and so will constantly reload.

// History Object
// window.history.go(-2);        // Move 2 wep pages backwards in the web history.
// val = window.history.length;  // Number of history before the current web page.
// console.log(val);

// Navigator Object
val = window.navigator;          // Navigator object.
console.log(val);
val = window.navigator.appName;  // Always will be Netscape unless using IE which is IE.
console.log(val);
val = window.navigator.appVersion;  //version will be either 5.0 or 4.0
console.log(val);
val = window.navigator.userAgent;   // Type of browser being used.
console.log(val);
val = window.navigator.platform;    // Users Operating System: Windows, Mac or Linux.
console.log(val);
val = window.navigator.vendor;      // Vendor of the browser.
console.log(val);
val = window.navigator.language;    // Language of the browser.
console.log(val);