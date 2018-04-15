//-------------------------
// CREATE CONSTRUCTORS:
//-------------------------
// What is the purpose of the Book Constructor? Create book objects and store book data.
function Book(title, author, isbn) {
   this.title = title;
   this.author = author;
   this.isbn = isbn;
}

// What is the purpose of the UI Constructor? To deal with the UI of the app.
function UI() {}


//-------------------------
// CREATE PROTOTYPES:
//-------------------------
// Add Book To List Object Method
UI.prototype.addBookToList = function(book){
   const list = document.getElementById('book-list');
   // Create tr element
   const row = document.createElement('tr');
   // Insert cols element data to the innerHTML of <tr> element
   row.innerHTML = `
   <td>${book.title}</td>
   <td>${book.author}</td>
   <td>${book.isbn}</td>
   <td><a href="#" class="delete">X<a></td>
   `;
   // Append <tr> element to the <tbody id='book-list'> html element.
   list.appendChild(row);
}

// Show Alert
UI.prototype.showAlert = function(message, className) {
   // 1) Create div
   const div = document.createElement('div');
   // 2) Add classes
   div.className = `alert ${className}`;
   // 3) Add text
   div.appendChild(document.createTextNode(message));
   // 3) Get parent
   const container = document.querySelector('.container');
   // 4) Get form
   const form = document.querySelector('#book-form');
   // 5) Insert alert
   container.insertBefore(div, form);
   // 6) Timeout after 3 sec
   setTimeout(function(){
      document.querySelector('.alert').remove();
   }, 3000);
}

// Clear Fields Object Method
UI.prototype.clearFields = function() {
   document.getElementById('title').value = '';
   document.getElementById('author').value = '';
   document.getElementById('isbn').value = '';
}


//-------------------------
// CREATE EVENT LISTENERS:
//-------------------------
document.getElementById('book-form').addEventListener('submit', function(e){
   // 1) Get form values
   const title = document.getElementById('title').value,
   author = document.getElementById('author').value,
   isbn = document.getElementById('isbn').value

   // 2) Instantiate book
   const book = new Book(title, author, isbn);

   // 3) Instantiate UI
   const ui = new UI();

   // 4) Validate & add book to list & clear fields
   if(title === '' || author === '' || isbn === '') {
      // Error alert message
      ui.showAlert('Please fill in all fields', 'error');
   } else {
      // Add book to list
      ui.addBookToList(book);
      // Show success message
      ui.showAlert('Book Added!', 'success');
      // Clear fields
      ui.clearFields();
   }

   // 5) Prevent Default
   e.preventDefault();     //Prevents the default submit button function (i.e. refreshing html page).
});