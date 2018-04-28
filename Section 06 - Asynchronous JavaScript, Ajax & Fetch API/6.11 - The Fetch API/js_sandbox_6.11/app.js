/* 
----------------------------- 
The Fetch API
----------------------------- 
*/


//-----------------------------
// BUTTON EVENT LISTENERS
//-----------------------------
document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);


//-----------------------------
// GET LOCAL TEXT FILE DATA
//-----------------------------
// Get local text file data
function getText() {
   fetch('sample.txt')
   .then(function(res){
      return res.text();
   })
   .then(function(data) {
      console.log(data);
      document.getElementById('output').innerHTML = data;
   })
   .catch(function(err){
      console.log(err);
   });
}


//-----------------------------
// GET LOCAL JSON FILE DATA
//-----------------------------
// Get local json data
function getJson() {
   fetch('posts.json')
   .then(function(res){
      return res.json();
   })
   .then(function(data) {
      console.log(data);
      let output = '';
      data.forEach(function(post) {
         output += `<li>${post.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
   })
   .catch(function(err){
      console.log(err);
   });
}


//-----------------------------
// GET EXTERNAL API DATA
//-----------------------------
// Get from external API
function getExternal() {
   fetch('https://api.github.com/users')
   .then(function(res){
      return res.json();
   })
   .then(function(data) {
      console.log(data);
      let output = '';
      data.forEach(function(user) {
         output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
   })
   .catch(function(err){
      console.log(err);
   });
}