/* 
----------------------------- 
Observer Pattern ES5
----------------------------- 
*/


//-----------------------------
// OBSERVER PATTERN
//-----------------------------
// Constructor Function called EventObserver(). It has one property called observers which represents the functions that will be passed into it. The functions will be an array.
function EventObserver() {
   this.observers = [];
}

// Create a prototype - adding object of subscribe within the prototype. We want to push the function onto the observer array. The console.log will notify the user that they are actually subscribed to that handler.
EventObserver.prototype = {
   subscribe: function(fn) {
      this.observers.push(fn);
      console.log(`You are now subscribed to ${fn.name}`);
   },
   unsubscribe: function(fn) {
      // Filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay in the list. The filter returns a new list and reassigns the list of observers.
      this.observers = this.observers.filter(function(item){
         if(item !== fn) {
            return item;
         }
      });
      console.log(`You are now unsubscribed from ${fn.name}`);
   },
   // Loop through the Observers and call the item using the .call() method.
   fire: function() {
      this.observers.forEach(function(item) {
         item.call();         // The .call() will call on the click handler event below.
      });
   }
}

// Instantiate the EventObserver.
const click = new EventObserver();


//-----------------------------
// EVENT LISTENERS
//-----------------------------
// Create a click event on the button to call a function. Within that function we want to reference the click object above and call (in this instance) the subscribe method.
document.querySelector('.sub-ms').addEventListener('click', function() {
   click.subscribe(getCurMilliseconds);
});
// This will call on the unsubscribe function from the 'click' EventObserver prototype. We will pass in the same function as the subscribe to remove it from the observer array.
document.querySelector('.unsub-ms').addEventListener('click', function() {
   click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function() {
   click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function() {
   click.unsubscribe(getCurSeconds);
});
// This will call on the fire function from the 'click' EventObserver prototype. This will loop through the observer array to call on each handler function within the array.
document.querySelector('.fire').addEventListener('click', function() {
   click.fire();
});


//-----------------------------
// CLICK HANDLER
//-----------------------------
// Create the event handler that would trigger when called on for the events listeners above.
const getCurMilliseconds = function() {
   console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}

const getCurSeconds = function() {
   console.log(`Current Seconds: ${new Date().getSeconds()}`);
}