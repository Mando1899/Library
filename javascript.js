const form = document.getElementsByTagName('form');
const authorInput = document.getElementById('author');
const titleInput = document.getElementById('title');
const pagesInput = document.getElementById('pages');
const addBookModalBtn = document.querySelector('.open');
const addBookModal = document.querySelector('dialog');

addBookModalBtn.addEventListener("click", () => {
    console.log("Hello, anybody here?");
    addBookModal.showModal();
});

const addBookBtn = document.querySelector(".add-book");

const books = document.querySelectorAll('.book');

let library = new Map();

function Book(author, title, pageNum, read, id){
    this.author = author;
    this.title = title;
    this.pageNum = pageNum;
    this.read = read;
    this.id = id;
}

let idCounter = 0;
books.forEach(element => {
    const author = element.childNodes[1];
    const title = element.childNodes[3];
    const pageNum = element.childNodes[5];
    let read = false;
    const newBook = new Book(author, title, pageNum, read, idCounter);
    library.set(idCounter, newBook);
    idCounter++;
});

console.log(library);
function addBook(event){
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    const author = document.createElement('span');
    author.classList.add('author');
    author.innerText = authorInput.value.toUpperCase();
    const title = document.createElement('span');
    title.classList.add('title');
    title.innerText = titleInput.value;
    const pages = document.createElement('span');
    pages.innerText = pagesInput.value + ' pages';
    pages.classList.add('pages');

    const newBook = new Book(author, title, pages, true, idCounter);

    bookDiv.appendChild(author);
    bookDiv.appendChild(title);
    bookDiv.appendChild(pages);
    document.querySelector('.books').appendChild(bookDiv);
    console.log(bookDiv);
    library.set(idCounter, newBook);
    library.get(0);
    idCounter++;
    console.log(library)
    event.preventDefault();
    addBookModal.close();
}




addBookBtn.addEventListener("click", addBook);





