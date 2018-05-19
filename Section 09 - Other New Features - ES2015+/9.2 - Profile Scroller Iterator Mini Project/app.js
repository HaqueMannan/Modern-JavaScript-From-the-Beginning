/* 
----------------------------- 
Profile Scroller Iterator Mini Project
----------------------------- 
*/


//-----------------------------
// PROFILE DATA:
//-----------------------------
const data = [
   {
      name: 'John Doe',
      age: 35,
      gender: 'male',
      lookingfor: 'female',
      location: 'Birmingham, UK',
      image: 'https://randomuser.me/api/portraits/men/81.jpg'
   },
   {
      name: 'Jennifer Smith',
      age: 26,
      gender: 'female',
      lookingfor: 'male',
      location: 'Miami FL',
      image: 'https://randomuser.me/api/portraits/women/82.jpg'
   },
   {
      name: 'Larry Small',
      age: 38,
      gender: 'male',
      lookingfor: 'female',
      location: 'Madrid, Spain',
      image: 'https://randomuser.me/api/portraits/men/83.jpg'
   }
];


//-----------------------------
// INIT PROFILE ITERATOR:
//-----------------------------
const profiles = profileIterator(data);


//-----------------------------
// NEXT PROFILE FUNCTION:
//-----------------------------
// Call first profile when the application loads.
nextProfile();

// Next Profile EventListener on the Next Button.
document.getElementById('next').addEventListener('click', nextProfile);

// Display the Next Profile.
function nextProfile() {
   const currentProfile = profiles.next().value;

   if(currentProfile !== undefined) {
      // Create template string and populate profile data and insert into <div id='profileDisplay'> element.
      document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
         <li class="list-group-item">Name: ${currentProfile.name}</li>
         <li class="list-group-item">Age: ${currentProfile.age}</li>
         <li class="list-group-item">Location: ${currentProfile.location}</li>
         <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      </ul>
      `;
      // Add template string to display the profile image within <div id='imageDisplay'> element.
      document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
   } else {
      // No more profiles, reload the page.
      window.location.reload();
   }
}


//-----------------------------
// PROFILE ITERATOR FUNCTION:
//-----------------------------
function profileIterator(profiles) {
   let nextIndex = 0;

   return {
      next: function() {
         return nextIndex < profiles.length ? 
         { value: profiles[nextIndex++], done: false } : 
         { done: true }
      }
   };
}