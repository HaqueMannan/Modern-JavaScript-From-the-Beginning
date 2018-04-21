/* 
----------------------------- 
Data From an External API - Chuck Norris Project
----------------------------- 
*/


//-----------------------------
// XHR OBJECT & EXTERNAL API DATA
//-----------------------------
// EventListener on the form button, click event"
document.querySelector('.get-jokes').addEventListener('click', getJokes);

// Event getJokes(e) Function:
function getJokes(e) {
   const number = document.querySelector('input[type="number"]').value;

   // Step 1) Create Object
   const xhr = new XMLHttpRequest();

   // Step 2) .open Object Method - Get Request, Data, Asynchronous
   xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

   // Step 3) .onload Object Method (ready state = 4 i.e request finished and response ready)
   xhr.onload = function() {
      if(this.status === 200) {
         const response = JSON.parse(this.responseText);

         let output = '';

         if(response.type === 'success') {
            response.value.forEach(function(joke){
               output += `<li>${joke.joke}</li>`;
            });
         } else {
            output += '<li>Something went wrong</li>';
         }

         document.querySelector('.jokes').innerHTML = output;
      }
   }

   // Step 4) Finalise
   xhr.send();

   // Prevent default behaviour
   e.preventDefault();
}