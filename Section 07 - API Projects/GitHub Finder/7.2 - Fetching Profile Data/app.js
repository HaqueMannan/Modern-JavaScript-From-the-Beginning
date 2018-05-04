//-------------------------
// INIT NEW CLASS OBJECT:
//-------------------------
// Init Github
const github = new Github;


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
         }
      })
   } else {
      // Clear profile
   }
});