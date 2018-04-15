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

   // 4) Add book to list
   ui.addBookToList(book);

   // 5) Clear fields
   ui.clearFields();
   e.preventDefault();     //Prevents the default submit button function (i.e. refreshing html page).
});