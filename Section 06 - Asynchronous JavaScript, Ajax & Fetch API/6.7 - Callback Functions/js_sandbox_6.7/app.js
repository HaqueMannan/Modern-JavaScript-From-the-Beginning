/* 
----------------------------- 
Callback Functions
----------------------------- 
*/


//-----------------------------
// MIMIC SERVER AND DATABASE
//-----------------------------
const posts = [
   {title: 'Post One', body: 'This is post one'},
   {title: 'Post Two', body: 'This is post two'}
];


//-----------------------------
// SYNCHRONOUS FUNCTIONS
//-----------------------------
/* 
SCENARIO & EXPECTATIONS:
We are mimicking a server and database using the setTimeout() function for the response times.
We have two functions:
   createPost() this takes 2 seconds for the server to process (i.e. create post data in the database).
   getPost() this takes 1 second for the server to process (i.e. get all post from the database).

These functions will do nothing because we have not called them. 
Mimicking a web app of creating a new blog post (Post Three) which will firstly call the createPost() function and soon after call the getPost() function:
      createPost({title: 'Post Three', body: 'This is post three'});
      getPosts();

The expectation is that we hope to retrieve all the post from the server database including the newly created blog post after we create the new post.

OUTCOME & ANALYSIS:
The getPost() function returns 'Post One' and 'Post Two' but does not return the newly created 'Post Three' post data. The reason for this is because:
   The server took 2 seconds to create a new post, whereas it took the server 1 second to get the post. Therefore, it got the post before the new post was created. 
This is the problem we have when using functions in a synchronous way.
*/

// function createPost(post) {
//    setTimeout(function() {
//       posts.push(post);
//    }, 2000);
// }

// function getPosts() {
//    setTimeout(function() {
//       let output = '';
//       posts.forEach(function(post){
//          output += `<li>${post.title}</li>`;
//       });
//       document.body.innerHTML = output;
//    }, 1000);
// }

// createPost({title: 'Post Three', body: 'This is post three'});
// getPosts();



//-----------------------------
// ASYNCHRONOUS CALLBACK FUNCTIONS
//-----------------------------
/*
SCENARIO & EXPECTATIONS:
We are mimicking a server and database using the setTimeout() function for the response times.
We have two functions same as before:
   createPost() this takes 2 seconds for the server to process (i.e. create post data in the database).
   getPost() this takes 1 second for the server to process (i.e. get all post from the database).

The difference we have to the above createPost() function:
   createPost() has an additional parameter called callback.
   In the body of createPost() function we call on the callback() function which was passed as a paramter.

These functions will do nothing because we have not called them. 
Mimicking a web app of creating a new blog post (Post Three) this will call the createPost() function which will taken in our new post as a parameter but it will also take in a callback() function which we can pass in the getPost() function:
      createPost({title: 'Post Three', body: 'This is post three'}, getPosts);

The expectation is that we hope to retrieve all the post from the server database including the newly created blog post after we create the new post.

OUTCOME & ANALYSIS:
All the posts including the newly created post appear in the web app i.e. Post One, Post Two and Post Three. Contrast this approach to the former example.

What has occurred is that when we called on the createPost() function we also had a callback function to the getPost() function which would have been called before the server ended the createPost() function within the two seconds. Therefore the asynchronous function ran together and the output resulted in all the post being returned including the new 'Post Three' blog post.
*/

function createPost(post, callback) {
   setTimeout(function() {
      posts.push(post);
      callback();
   }, 2000);
}


function getPosts() {
   setTimeout(function() {
      let output = '';
      posts.forEach(function(post){
         output += `<li>${post.title}</li>`;
      });
      document.body.innerHTML = output;
   }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'}, getPosts);