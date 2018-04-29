/**
----------------------------- 
Custom HTTP Library (Fetch With Promises)
----------------------------- 

* EasyHTTP Library
* Library for making HTTP requests
*
* @version 2.0.0
* @author  Abdul-Haque Mannan
* @license MIT
**/


//-----------------------------
// INSTANTIATE A NEW EASYHTTP OBJECT
//-----------------------------
// Instantiate a new easyHTTP object i.e. using the easyHTTP library from the easyhttp.js file.
const http = new EasyHTTP;


//-----------------------------
// GET REQUEST METHOD
//-----------------------------
// Get Users
http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(err => console.log(err));


//-----------------------------
// POST REQUEST METHOD
//-----------------------------
// // New User Data to Create
// const data = {
//    name: 'John Doe',
//    username: 'johndoe',
//    email: 'jdoe@gmail.com'
// }

// // Create User
// http.post('https://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));


//-----------------------------
// PUT (UPDATE) REQUEST METHOD
//-----------------------------
// // Update User
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));


//-----------------------------
// DELETE REQUEST METHOD
//-----------------------------
// // Delete User
// http.delete('https://jsonplaceholder.typicode.com/users/2')
// .then(data => console.log(data))
// .catch(err => console.log(err));














