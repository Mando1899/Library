const form = document.getElementsByTagName('form');
const authorInput = document.getElementById('author');
const titleInput = document.getElementById('title');
const pagesInput = document.getElementById('pages');

const addBookBtn = document.querySelector(".add-book");

const books = document.querySelectorAll('.book');

let library = [];


books.forEach(element => {
    let author = element.childNodes[1].innerText;
    let title = element.childNodes[3].innerText;
    let pageNum = element.childNodes[5].innerText;
    let read = false;
    let newBook = new Book(author, title, pageNum, read);
    library.push(newBook);
});

function Book(author, title, pageNum, read, bookInfo){
    this.author = author;
    this.title = title;
    this.pageNum = pageNum;
    this.read = read;
    this.bookInfo = () => {return bookInfo};
}

function addBook(event){
    let author = authorInput.value;
    let title = titleInput.value;
    let pageNum = pagesInput.value;
    let read = false;
    
    let newBook = new Book(author, title, pageNum, read);
    library.push(newBook);
    console.log(library);
    event.preventDefault();
}

addBookBtn.addEventListener("click", addBook);





