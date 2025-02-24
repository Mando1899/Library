const form = document.getElementsByTagName('form');
const authorInput = document.getElementById('author');
const titleInput = document.getElementById('title');
const pagesInput = document.getElementById('pages');

const addBookBtn = document.querySelector(".add-book");

const books = document.querySelectorAll('.book');

let library = [];

function Book(author, title, pageNum, read, bookInfo){
    this.author = author;
    this.title = title;
    this.pageNum = pageNum;
    this.read = read;
    this.bookInfo = () => {return bookInfo};
}

books.forEach(element => {
    let author = element.childNodes[1].innerText;
    let title = element.childNodes[3].innerText;
    let pageNum = element.childNodes[5].innerText;
    let read = false;
    let newBook = new Book(author, title, pageNum, read);
    library.push(newBook);
});

function addBook(event){
    let newBook = new Book(authorInput.value, titleInput.value, pagesInput.value, false);
    console.log(newBook)
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    const author = document.createElement('span');
    author.classList.add('author');
    author.innerText = newBook.author.toUpperCase();
    const title = document.createElement('span');
    title.classList.add('title');
    title.innerText = newBook.title;
    const pages = document.createElement('span');
    pages.innerText = newBook.pageNum + ' pages';
    pages.classList.add('pages');

    bookDiv.appendChild(author);
    bookDiv.appendChild(title);
    bookDiv.appendChild(pages);
    event.preventDefault();
    document.querySelector('.books').appendChild(bookDiv);
    console.log(bookDiv);
    library.push(newBook);
    event.preventDefault();
}



addBookBtn.addEventListener("click", addBook);





