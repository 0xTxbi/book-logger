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

// Show Error Noitification
UI.prototype.showErrorNotification = function (message, classValue) {

	// Create a div
	const div = document.createElement('div');

	// Add classes
	div.className = `alert ${classValue}`;

	// Add Text
	div.appendChild(document.createTextNode(message));

	// Insert into the DOM
	const container = document.querySelector('.container');
	const firstForm = document.querySelector('#book-form');

	// Insert error alert
	container.insertBefore(div, firstForm);

	// Clear after 2 seconds
	setTimeout(function () {
		document.querySelector('.alert').remove();
	}, 2000);

}

// Show List Addition notification
UI.prototype.showSuccessNotification = function (message, classValue) {

	// Create a div
	const div = document.createElement('div');

	// Add classes
	div.className = `alert ${classValue}`;

	// Add Text
	div.appendChild(document.createTextNode(message));

	// Insert into the DOM
	const container = document.querySelector('.container');
	const firstForm = document.querySelector('#book-form');

	// Insert error alert
	container.insertBefore(div, firstForm);

	// Clear after 2 seconds
	setTimeout(function () {
		document.querySelector('.alert').remove();
	}, 2000);

}

// Clear fields
UI.prototype.clearFields = function () {

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

	// Validate form inputs
	if (author === '' || title === '' || isbn === '') {

		// Error notification
		ui.showErrorNotification('Please fill in all input fields', 'error');

	} else {

		// Add book to list
		ui.addBookToList(book);

		// Success notification
		ui.showSuccessNotification('Book Successfully added', 'success');


		// Clear fields
		ui.clearFields();

	}



	e.preventDefault();
});