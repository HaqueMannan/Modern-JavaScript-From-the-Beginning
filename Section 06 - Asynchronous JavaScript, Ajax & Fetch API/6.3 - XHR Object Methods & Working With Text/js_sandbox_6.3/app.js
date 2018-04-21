/* 
----------------------------- 
XHR Object Methods & Working With Text
----------------------------- 
*/


//-----------------------------
// EVENT LISTENER ON BUTTON
//-----------------------------
document.getElementById('button').addEventListener('click', loadData);


//-----------------------------
// loadData() FUNCTION
//-----------------------------
function loadData() {
   // Create an XHR Object
   const xhr = new XMLHttpRequest();

   // Open Method
   xhr.open('GET', 'data.txt', true);                    // true parameter = asynchronous

   // console.log('READYSTATE', xhr.readyState);         // This will return readyState 1

   // Optional - Used for spinners/loaders
   xhr.onprogress = function(){
      console.log('READYSTATE', xhr.readyState);
   }

   // Onload Method
   xhr.onload = function(){
      console.log('READYSTATE', xhr.readyState);         // This will return readyState 4
      if(this.status === 200) {
         // console.log(this.responseText);              // logs the data.txt text data
         document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
      }
   }

   // Old Syntax Pre .onload Method - had to check for readyState 4 aswell as HTTP status.
   // xhr.onreadystatechange = function() {
   //   console.log('READYSTATE', xhr.readyState);
   //   if(this.status === 200 && this.readyState === 4){
   //     console.log(this.responseText);
   //   }
   // }

   // 
   xhr.onerror = function() {
      console.log('Request error...');
   }

   // Finalise the above.
   xhr.send();
}



//-----------------------------
// READYSTATE VALUES
//-----------------------------
// 0: request not initialized 
// 1: server connection established
// 2: request received 
// 3: processing request 
// 4: request finished and response is ready


//-----------------------------
// HTTP STATUSES
//-----------------------------
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"
// More Status: https://httpstatuses.com/