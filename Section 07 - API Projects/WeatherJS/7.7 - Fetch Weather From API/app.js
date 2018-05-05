//-------------------------
// INIT NEW CLASS OBJECT:
//-------------------------
// Init weather object
const weather = new Weather('London', 'UK');


//-------------------------
// ADD EVENT LISTENER ON LOAD:
//-------------------------
// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Miami', 'FL');

//-------------------------
// getWeather FUNCTION:
//-------------------------
function getWeather(){
weather.getWeather()
   .then(results => {
      console.log(results);
   })
   .catch(err => console.log(err));
}