/* 
----------------------------- 
Custom HTTP Library (Ajax With Callbacks)
----------------------------- 
*/


//-----------------------------
// INSTANTIATE A NEW EASYHTTP OBJECT
//-----------------------------
// Instantiate a new easyHTTP object i.e. using the easyHTTP library from the easyhttp.js file.
const http = new easyHTTP;

//-----------------------------
// GET REQUEST METHOD
//-----------------------------
// Get Single Post - asynchronous code using callback function.
http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {
   if(err) {
      console.log(err);
   } else {
      console.log(post);
   }
});


// // Get Posts - asynchronous code using callback function.
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//    if(err) {
//       console.log(err);
//    } else {
//       console.log(posts);
//    }
// });


//-----------------------------
// POST REQUEST METHOD
//-----------------------------
// // Create Data for the POST Request
// const data = {
//    title: 'Custom Post',
//    body: 'This is a custom post'
// };

// // Create Post using POST request method - asynchronous code using callback function.
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//    if(err) {
//       console.log(err);
//    } else {
//       console.log(post);
//    }
// });


//-----------------------------
// PUT (UPDATE) REQUEST METHOD
//-----------------------------
// // Create Data for the PUT Request
// const data = {
//    title: 'Custom Post',
//    body: 'This is a custom post'
// };

// // Update an existing Post - asynchronous code using callback function.
// http.put('https://jsonplaceholder.typicode.com/posts/5', data, function(err, post) {
//    if(err) {
//       console.log(err);
//    } else {
//       console.log(post);
//    }
// });


//-----------------------------
// DELETE REQUEST METHOD
//-----------------------------
// // Delete an existing Post - asynchronous code using callback function.
// http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
//    if(err) {
//       console.log(err);
//    } else {
//       console.log(response);
//    }
// });