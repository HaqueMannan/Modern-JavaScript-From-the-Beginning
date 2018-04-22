/* 
----------------------------- 
Custom HTTP Library (Ajax With Callbacks) - Part 1
----------------------------- 
*/


//-----------------------------
// easyHTTP GET REQUEST XHR FUNCTION
//-----------------------------
// Function to create an XHR Object using a constructor
function easyHTTP() {
   this.http = new XMLHttpRequest();
}

// Prototype 1: Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
   this.http.open('GET', url, true);

   let self = this;
   this.http.onload = function() {
      if(self.http.status === 200) {
         callback(null, self.http.responseText);
      } else {
         callback('Error: ' + self.http.status);
      }
   }

   this.http.send();
}

// Prototype 2: Make an HTTP POST Request

// Prototype 3: Make an HTTP PUT Request

// Prototype 4: Make an HTTP DELETE Request