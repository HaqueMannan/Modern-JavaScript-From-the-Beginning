/* 
----------------------------- 
ES6 Promises
----------------------------- 
*/


//-----------------------------
// POSTS OBJECT
//-----------------------------
const posts = [
   {title: 'Post One', body:'This is post one'},
   {title: 'Post Two', body: 'This is post two'}
];


//-----------------------------
// CREATEPOST FUNCTION
//-----------------------------
// Promise has 2 parameters:
// resolve - what we want to call when we are done with what we are doing.
// reject - when we want to call some kind of error.

function createPost(post) {
   return new Promise(function(resolve, reject){
      setTimeout(function() {
         posts.push(post);

         // To mimic an error
         const error = false;

         // If Statement used to trigger resolve or reject promises.
         if(!error) {
            resolve();
         } else {
            reject('Error: Something went wrong');
         }
      }, 2000);
   });
}


//-----------------------------
// GETPOSTS FUNCTION
//-----------------------------
function getPosts() {
   setTimeout(function() {
      let output = '';
      posts.forEach(function(post){
         output += `<li>${post.title}</li>`;
      });
      document.body.innerHTML = output;
   }, 1000);
}


//-----------------------------
// ASYNCHRONOUS FUNCTION WITH PROMISES
//-----------------------------
// .then() used for the resolve Promise parameter i.e. callback function.
// .catch() used for the reject Promise parameter i.e. error message.
createPost({title: 'Post Three', body: 'This is post three'})
.then(getPosts)
.catch(function(err) {
   console.log(err);
});