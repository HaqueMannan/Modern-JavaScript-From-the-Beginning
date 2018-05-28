/* 
----------------------------- 
State Pattern
----------------------------- 
*/


//-----------------------------
// STATE PATTERN
//-----------------------------
const PageState = function() {
   let currentState = new homeState(this);

   // Default Home State on initializing the application. Note this calls on the change function below.
   this.init = function() {
      this.change(new homeState);
   }

   // Chage the State based on the state that is passed in the parameter.
   this.change = function(state) {
      currentState = state;
   }
};


//-----------------------------
// THE VARIOUS STATES
//-----------------------------
// Home State - We do not want a heading. For the content we are using template literal to use Bootstrap Jumbotron component to display homepage content.
const homeState = function(page) {
   document.querySelector('#heading').textContent = null;
   document.querySelector('#content').innerHTML = `
   <div class="jumbotron">
      <h1 class="display-3">Hello World</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p class="lead">
         <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>
   </div>
   `;
};

// About State
const aboutState = function(page) {
   document.querySelector('#heading').textContent = 'About Us';
   document.querySelector('#content').innerHTML = `
   <p>This is the about page</p>
   `;
};

// Contact State
const contactState = function(page) {
   document.querySelector('#heading').textContent = 'Contact Us';
   document.querySelector('#content').innerHTML = `
   <form>
      <div class="form-group">
         <label>Name</label>
         <input type="text" class="form-control">
      </div>
      <div class="form-group">
         <label>Email address</label>
         <input type="email" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
   </form>
   `;
};


//-----------------------------
// INSTANTIATE STATE PATTERN
//-----------------------------
// Instantiate pageState
const page = new PageState();

// Init the first state i.e. call on the init() function which will load the homeState
page.init();


//-----------------------------
// EVENT LISTENERS TO CALL STATE
//-----------------------------
// Event Listeners on the click of buttons to update the page content based on the page state.

// UI Variables
const home = document.getElementById('home'),
      about = document.getElementById('about'),
      contact = document.getElementById('contact');

// Home Event Listener
home.addEventListener('click', (e) => {
   page.change(new homeState);
   // Prevent default behaviour of the click link.
   e.preventDefault();
});

// About Event Listener
about.addEventListener('click', (e) => {
   page.change(new aboutState);
   // Prevent default behaviour of the click link.
   e.preventDefault();
});

// Contact Event Listener
contact.addEventListener('click', (e) => {
   page.change(new contactState);
   // Prevent default behaviour of the click link.
   e.preventDefault();
});