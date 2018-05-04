//-------------------------
// INIT NEW CLASS OBJECTS:
//-------------------------
// Init Github
const github = new Github;

// Init UI
const ui = new UI;


//-------------------------
// CREATE ELEMENT VARIABLE:
//-------------------------
// Search input variable
const searchUser = document.getElementById('searchUser');


//-------------------------
// CREATE EVENT LISTENER & OBJECT METHOD:
//-------------------------
// Search input event listener
searchUser.addEventListener('keyup', (e) => {
   // Get input text
   const userText = e.target.value;

   if(userText !== ''){
      // Make http call
      github.getUser(userText)
      .then(data => {
         if(data.profile.message === 'Not Found') {
            // Show alert
         } else {
            // Show profile
            ui.showProfile(data.profile);
         }
      })
   } else {
      // Clear profile
   }
});