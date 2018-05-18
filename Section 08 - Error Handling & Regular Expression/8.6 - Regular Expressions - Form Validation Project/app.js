// Form Blur Event Listeners i.e. when we click out of the form we want to call the validation event.
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('postcode').addEventListener('blur', validatePostcode);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);


// Name must start with and match any letters upper or lower and must be between 2,10 characters long.
function validateName() {
   const name = document.getElementById('name');
   const re = /^[a-zA-Z]{2,10}$/;

   // Dynamically add or remove is-invalid to the class of the element to hide and show error message.
   if(!re.test(name.value)){
      name.classList.add('is-invalid');
   } else {
      name.classList.remove('is-invalid');
   }
}

// Postcode must have 2 letters and 1 number followed by a space and 1 number and 2 letters.
function validatePostcode() {
   const postcode = document.getElementById('postcode');
   const re = /^[a-zA-Z]{2}[0-9]{1}( [0-9]{1}[a-zA-Z]{2})?$/;

   // Dynamically add or remove is-invalid to the class of the element to hide and show error message.
   if(!re.test(postcode.value)){
      postcode.classList.add('is-invalid');
   } else {
      postcode.classList.remove('is-invalid');
   }
}

// Postcode must have an @ and . to validate as a email address. 
function validateEmail() {
   const email = document.getElementById('email');
   const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

   // Dynamically add or remove is-invalid to the class of the element to hide and show error message.
   if(!re.test(email.value)){
      email.classList.add('is-invalid');
   } else {
      email.classList.remove('is-invalid');
   }
}

// Phone Number can have spaces or dashes or joined as one number but must be numeric.
function validatePhone() {
   const phone = document.getElementById('phone');
   const re = /^\(?\d{4}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

   // Dynamically add or remove is-invalid to the class of the element to hide and show error message.
   if(!re.test(phone.value)){
      phone.classList.add('is-invalid');
   } else {
      phone.classList.remove('is-invalid');
   }
}