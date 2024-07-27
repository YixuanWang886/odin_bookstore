let myLibrary = [];
myLibrary.push(new Book(1, "The Hobbit", "J.R.R. Tolkien", 295, false));
function addBook() {
  addBook_form = document.getElementById("form_container");
  addBook_form.style.display = "block";
}
function create_book(e) {
  e.preventDefault();
  let length = myLibrary.length;
  let bookId = length + 1;
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("page").value;
  let read = document.getElementById("read").checked;
  let book = new Book(bookId, title, author, pages, read);
  myLibrary.push(book);
  addBook_form = document.getElementById("form_container");
  addBook_form.style.display = "none";
  render();
  remove_form(e);
}
function remove_form(e) {
  e.preventDefault();
  addBook_form = document.getElementById("form_container");
  addBook_form.style.display = "none";
}
function Book(ID, title, author, pages, read) {
  this.ID = ID;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
function render() {
  let table = document.getElementById("book_container");
  table.innerHTML = "";
  myLibrary.forEach((book) => {
    let card = design_card(book);
    table.appendChild(card);
  });
  console.log(myLibrary);
}
function design_card(book) {
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
  <h2>Title: ${book.title}</h2>
  <h3>Author: ${book.author}</h3>
  <p>Page count: ${book.pages}</p>
  <div class="read-status">
    <p>Read Status:</p>    
    <label class="switch">
      <input type="checkbox" id="read-${book.ID}" name="read" ${
    book.read ? "checked" : ""
  } />
      <span class="slider round"></span>
    </label>
  </div>
  <div class="card_buttons">
  <button  onclick="remove_book(${book.ID})">Remove</button>
  
  </div>
`;
  return card;
}

function remove_book(ID) {
  console.log(ID);
  myLibrary = myLibrary.filter((book) => book.ID !== ID);
  render();
}
window.onload = render;
