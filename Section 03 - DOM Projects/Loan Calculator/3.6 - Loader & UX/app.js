//-------------------------
// LISTEN FOR SUBMIT
//-------------------------
document.getElementById('loan-form').addEventListener('submit', function(e){
   // 1) Make sure Results are Hidden
   document.getElementById('results').style.display = 'none';

   // 2) Show loader
   document.getElementById('loading').style.display = 'block';

   // 3) Timeout to call calculateResults() function after 2 seconds
   setTimeout(calculateResults, 2000);

   // Test the prevent default is working
   console.log('Calculating...');
   e.preventDefault();
});


//-------------------------
// CALCULATE RESULTS
//-------------------------
function calculateResults(){
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

      // Show results
      document.getElementById('results').style.display = 'block';
      // Hide loader
      document.getElementById('loading').style.display = 'none';
   } else {
      showError('Please check your numbers');
   }
}


//-------------------------
// SHOW ERROR
//-------------------------
function showError(error){
   // HIDE LOADER & RESULTS ELEMENTS
   // Hide results
   document.getElementById('results').style.display = 'none';
   // Hide loader
   document.getElementById('loading').style.display = 'none';
   
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