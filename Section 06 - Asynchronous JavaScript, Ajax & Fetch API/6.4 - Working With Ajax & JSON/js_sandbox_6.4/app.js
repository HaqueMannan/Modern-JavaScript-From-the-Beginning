/* 
----------------------------- 
Working With Ajax & JSON
----------------------------- 
*/


//-----------------------------
// EVENT LISTENERS ON BUTTONS
//-----------------------------
document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);


//-----------------------------
// LOAD SINGLE CUSTOMER
//-----------------------------
function loadCustomer(e) {
   // Step 1) Create Object
   const xhr = new XMLHttpRequest();

   // Step 2) .open Object Method - Get Request, Data, Asynchronous
   xhr.open('GET', 'customer.json', true);

   // Step 3) .onload Object Method (ready state = 4 i.e request finished and response ready)
   xhr.onload = function(){
      if(this.status === 200) {
         // console.log(this.responseText);              //Outputs JSON Object for the single customer.

         const customer = JSON.parse(this.responseText);

         const output = `
         <ul>
         <li>ID: ${customer.id}</li>
         <li>Name: ${customer.name}</li>
         <li>Company: ${customer.company}</li>
         <li>Phone: ${customer.phone}</li>
         </ul>
         `;

         document.getElementById('customer').innerHTML = output;
      }
   }

   // Step 4) Finalise
   xhr.send();
}


//-----------------------------
// LOAD MULTIPLE CUSTOMERS
//-----------------------------
function loadCustomers(e) {
   // Step 1) Create Object
   const xhr = new XMLHttpRequest();

   // Step 2) .open Object Method - Get Request, Data, Asynchronous
   xhr.open('GET', 'customers.json', true);

   // Step 3) .onload Object Method (ready state = 4 i.e request finished and response ready)
   xhr.onload = function(){
      if(this.status === 200) {
         // console.log(this.responseText);              //Outputs JSON Objects for the array of customers.
         const customers = JSON.parse(this.responseText);

         let output = '';

         customers.forEach(function(customer){
            output += `
            <ul>
            <li>ID: ${customer.id}</li>
            <li>Name: ${customer.name}</li>
            <li>Company: ${customer.company}</li>
            <li>Phone: ${customer.phone}</li>
            </ul>
            `;
         });

         document.getElementById('customers').innerHTML = output;
      }
   }

   // Step 4) Finalise
   xhr.send();
}