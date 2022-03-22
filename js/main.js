const booksList = document.querySelector('.books__list');
const addBtn = document.querySelector('#submit');
const book = document.querySelector('#book');
const author = document.querySelector('#author');
const KEY = 'BOOKS_LIST';

let BooksObject = [];

class Books {
  constructor() {
    this.BooksObject = [];
  }

  add() {
    this.BooksObject.push({
      id: this.BooksObject.length,
      title: book.value,
      author: author.value,
    });
    localStorage.setItem('BOOKS_LIST', JSON.stringify(this.BooksObject));
  }

  remove(element) {
    const id = element.parentElement.className;
    element.remove();
    this.BooksObject.splice(parseInt(id, 10), 1);
    localStorage.setItem('BOOKS_LIST', JSON.stringify(this.BooksObject));
  }
}

function loadContent() {
  booksList.innerHTML = '';
  BooksObject.forEach((obj, index) => {
    booksList.innerHTML += `<div class="${index} book-container">
                    <div class="book">
                      <h4>${obj.title}</h4>
                      <h3>by ${obj.author}</h3>
                    </div>
                    <button type="button" onclick="removeBook(this.parentElement)" id="removeBtn">Remove</button>
                </div>`;
  });
}

function checkLocalStorage() {
  if (JSON.parse(localStorage.getItem(KEY)) != null) {
    BooksObject = JSON.parse(localStorage.getItem(KEY));
    loadContent();
  }
}

const books = new Books();

function addBook() {
  books.add();
  loadContent();
}

/* eslint-disable */

function removeBook(element) {
  books.remove(element);
}
/* eslint-enable */

addBtn.addEventListener('click', addBook);

document.addEventListener('DOMContentLoaded', checkLocalStorage);
