/* Book Constructor
Handles creation of book items */
function Book(title, author, isbn) {

	this.title = title;
	this.author = author;
	this.isbn = isbn;

}



/* UI Constructor
Set of prototype methods that handle every function occuring in the UI */
function UI() {


}

// UI Prototype
UI.prototype.addBookToList = function (book) {

	const list = document.getElementById('book-list');

	// Create table row
	const row = document.createElement('tr');
	// Insert table columns
	row.innerHTML = `
		<td>${book.title}</td>
		<td>${book.author}</td>
		<td>${book.isbn}</td>
		<td><a href="#" class="delete">X</a></td>
	`;

	list.appendChild(row);

}

// Clear fields
UI.prototype.clearFields = function() {

	document.getElementById('title').value = '';
	document.getElementById('author').value = '';
	document.getElementById('isbn').value = '';

}



// Event Listeners
document.getElementById('book-form').addEventListener('submit', function (e) {


	// Obtain form values
	const title = document.getElementById('title').value,
		author = document.getElementById('author').value,
		isbn = document.getElementById('isbn').value;

	// Instantiate a book
	const book = new Book(title, author, isbn);

	// Instantiate a UI object
	const ui = new UI();

	// Add book to list
	ui.addBookToList(book);
	
	// Clear fields
	ui.clearFields();


	
	e.preventDefault();
});