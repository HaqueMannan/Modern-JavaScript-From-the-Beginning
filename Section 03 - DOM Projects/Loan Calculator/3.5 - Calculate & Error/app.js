//-------------------------
// LISTEN FOR SUBMIT
//-------------------------
document.getElementById('loan-form').addEventListener('submit', calculateResults);


//-------------------------
// CALCULATE RESULTS
//-------------------------
function calculateResults(e){
   // UI Variables
   const amount = document.getElementById('amount');
   const interest = document.getElementById('interest');
   const years = document.getElementById('years');
   const monthlyPayment = document.getElementById('monthly-payment');
   const totalPayment = document.getElementById('total-payment');
   const totalInterest = document.getElementById('total-interest');

   // Calculated Variables
   const principal = parseFloat(amount.value);
   const calculatedInterest = parseFloat(interest.value) / 100 / 12;
   const calculatedPayments = parseFloat(years.value) * 12;

   // Compute Monthly Payment
   const x = Math.pow(1 + calculatedInterest, calculatedPayments);
   const monthly = (principal*x*calculatedInterest)/(x-1);

   if(isFinite(monthly)) {
      monthlyPayment.value = monthly.toFixed(2);
      totalPayment.value = (monthly * calculatedPayments).toFixed(2);
      totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
   } else {
      showError('Please check your numbers');
   }

   // Test the prevent default is working
   console.log('Calculating...');
   e.preventDefault();
}


//-------------------------
// SHOW ERROR
//-------------------------
function showError(error){
   // CREATE DIV ERROR ELEMENT:
   // 1) Create a div
   const errorDiv = document.createElement('div');
   // 2) Add class
   errorDiv.className = 'alert alert-danger';
   // 3) Create text node and append to div
   errorDiv.appendChild(document.createTextNode(error));

   // INSERT NEW ERROR DIV ABOVE HEADING ELEMENT:
   // 1) Get elements and store into variables
   const card = document.querySelector('.card');
   const heading = document.querySelector('.heading');
   // 2) Insert error above heading
   card.insertBefore(errorDiv, heading);

   // AFTER 3 SECONDS TIMEOUT CLEAR THE ERROR DIV ELEMENT:
   // Clear error after 3 seconds
   setTimeout(clearError, 3000);
}


//-------------------------
// CLEAR ERROR
//-------------------------
function clearError(){
   document.querySelector('.alert').remove();
}