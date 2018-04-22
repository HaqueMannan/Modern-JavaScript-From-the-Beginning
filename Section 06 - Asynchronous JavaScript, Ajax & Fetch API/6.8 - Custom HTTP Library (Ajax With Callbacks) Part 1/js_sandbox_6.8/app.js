/* 
----------------------------- 
Custom HTTP Library (Ajax With Callbacks) - Part 1
----------------------------- 
*/


//-----------------------------
// GET REQUEST METHOD
//-----------------------------
// Instantiate a new easyHTTP object i.e. using the easyHTTP library from the easyhttp.js file.
const http = new easyHTTP;

// Get Posts - asynchronous code using callback function.
http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
   if(err) {
      console.log(err);
   } else {
      console.log(posts);
   }
});