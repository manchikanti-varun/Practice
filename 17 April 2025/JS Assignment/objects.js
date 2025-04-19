function Book(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isBorrowed = false;

    this.borrow = function () {
        this.isBorrowed = true;
    };

    this.returnBook = function () {
        this.isBorrowed = false;
    };
}

function Library() {
    this.books = [];

    this.addBook = function (book) {
        this.books.push(book);
    };

    this.findBookByISBN = function (isbn) {
        return this.books.find(book => book.ISBN === isbn);
    };

    this.listAvailableBooks = function () {
        return this.books.filter(book => !book.isBorrowed);
    };

    this.listBorrowedBooks = function () {
        return this.books.filter(book => book.isBorrowed);
    };
}

const library = new Library();

const book1 = new Book("1984", "George Orwell", "123456789");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "987654321");
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "555555555");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

book2.borrow();

console.log("Available Books:", library.listAvailableBooks());
console.log("Borrowed Books:", library.listBorrowedBooks());
console.log("Find Book:", library.findBookByISBN("123456789"));
