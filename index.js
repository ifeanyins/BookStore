

class Book {
    constructor(title, author){
        this.title = title;
        this.author = author;
    }
}

// call the books and add them to the local storage
class SavedBooks {
    static getBook(){
    let todoArr;
        if (localStorage.getItem('todoArr') === null) {
            todoArr = [];
        } else {
            todoArr = JSON.parse(localStorage.getItem('todoArr'));
        }
        return todoArr;
    }

    static addBook(book) {
       const todoArr = SavedBooks.getBook();
       todoArr.push(book);
       localStorage.setItem('books', JSON.stringify(books))
    }

    // counts the number of books present from the local storage
  static bookNumber(){
    const todoArr = JSON.parse(ocalStorage.getItem('todoArr')) || [];
    return todoArr.length;
  }
}

// the user class that displays the book at the top
let books;
class User {
    static showBooks(){
        todoArr = SavedBooks.getBook();
        todoArr.forEach(book => {
            User.showBookList(book)
        });
    }

    static showBookList (book){
        // Creation of element / DOM Manipulation
    const mainDiv = document.getElementById('uk-emptydiv');
    const bookDiv = document.createElement('div')
    bookDiv.className = 'book-container';
    const titleDiv = document.createElement('h5')
    const authorDiv = document.createElement('h5')
    const removeBtn = document.createElement('button')

    titleDiv.innerText = `${book.title}`
    authorDiv.innerText = `${book.author}`
    const bookReferences = document.createElement('p')
    bookReferences.innerText = `${book.title} by ${book.author}`
    removeBtn.innerText = 'Remove';
    removeBtn.className = 'btn';
    bookDiv.appendChild(bookReferences)
    bookDiv.appendChild(removeBtn)
    mainDiv.appendChild(bookDiv)
    // Add event listener
    removeBtn.addEventListener('click', ()=> {
        User.deleteBook(removeBtn);
    })
}
    static clearInput() {
        document.getElementById('uk-author').value = '';
        document.getElementById('uk-title').value = '';
    }

    // remove Button Function
    static deleteBook(removeBtn) {
        const todoArr = SavedBooks.getBook();
        const bookTitle = removeBtn.parentElement.firstElementChild.innerText;
        const filteredBooks = todoArr.filter((book) => book.title !== bookTitle.slice(0, bookTitle.indexOf('by') - 1));
        localStorage.setItem('todoArr', JSON.stringify(filteredBooks));
        removeBtn.parentElement.remove();
    }

}

document.querySelector('#addbtn').addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.getElementById('uk-title').value;
    const author = document.getElementById('uk-author').value;
    const bookAddedMsg = document.getElementById('display-msg');
    const message = document.createElement('p');
    message.className = 'message';
    bookAddedMsg.appendChild(message);

    if (!title || !author) {
        message.innerText = 'Title and author cannot be empty';
        message.classList = 'error';
      } else {
        const book = new Book(title, author);
        SavedBooks.addBook(book);
        User.showBookList(book);
        User.clearInput();
        message.innerText = 'Great! Your book was successfully added!!';
      }
      setTimeout(() => {
        message.textContent = '';
        message.style.display = 'none';
      }, 3000);
    });

// const headerText = document.getElementById('uk-header-text');
// const titleInput = document.getElementById('uk-title');
// const authorInput = document.querySelector('#uk-author');
