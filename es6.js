class Book {

	constructor(title, author, isbn) {

		this.title = title;
		this.author = author;
		this.isbn = isbn;

	}

}

class UI {

	addBookToList(book) {

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


	showErrorNotification(message, classValue) {

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


	showSuccessNotification(message, classValue) {

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

	clearFields() {

		document.getElementById('title').value = '';
		document.getElementById('author').value = '';
		document.getElementById('isbn').value = '';

	}

	deleteBook(target) {

		if (target.className === 'delete') {

			target.parentElement.parentElement.remove();

		}

	}

}


// Event Listener for adding book items
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

// Event Listener for deleting book items
document.getElementById('book-list').addEventListener('click', function (e) {

	const ui = new UI();

	ui.deleteBook(e.target);

	// Show message
	ui.showSuccessNotification('Book item removed', 'success');

	e.preventDefault();
});