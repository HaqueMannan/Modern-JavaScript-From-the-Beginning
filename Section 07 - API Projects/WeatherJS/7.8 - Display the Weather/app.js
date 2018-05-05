//-------------------------
// INIT NEW CLASS OBJECT:
//-------------------------
// Init weather object
const weather = new Weather('London', 'UK');

// Init UI
const ui = new UI();


//-------------------------
// ADD EVENT LISTENER ON LOAD:
//-------------------------
// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// // Test Changing Location.
// weather.changeLocation('Miami', 'FL');


//-------------------------
// getWeather FUNCTION:
//-------------------------
function getWeather(){
weather.getWeather()
   .then(results => {
      ui.paint(results);
   })
   .catch(err => console.log(err));
}