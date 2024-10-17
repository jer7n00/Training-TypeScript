var Author = /** @class */ (function () {
    function Author(id, name) {
        this.id = id;
        this.name = name;
    }
    return Author;
}());
var Book = /** @class */ (function () {
    function Book(id, title, author, isAvailable) {
        if (isAvailable === void 0) { isAvailable = true; }
        this.id = id;
        this.title = title;
        this.author = author;
        this.isAvailable = isAvailable;
    }
    return Book;
}());
var Member = /** @class */ (function () {
    function Member(id, name) {
        this.id = id;
        this.name = name;
    }
    return Member;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
        this.members = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
        console.log("Book \"".concat(book.title, "\" added to the library."));
    };
    Library.prototype.registerMember = function (member) {
        this.members.push(member);
        console.log("Member \"".concat(member.name, "\" registered."));
    };
    Library.prototype.borrowBook = function (memberId, bookId) {
        var member = this.members.find(function (m) { return m.id === memberId; });
        var book = this.books.find(function (b) { return b.id === bookId; });
        if (!member) {
            console.log("Member not found.");
            return;
        }
        if (!book) {
            console.log("Book not found.");
            return;
        }
        if (!book.isAvailable) {
            console.log("Book \"".concat(book.title, "\" is currently not available."));
            return;
        }
        book.isAvailable = false;
        console.log("Member \"".concat(member.name, "\" borrowed \"").concat(book.title, "\"."));
    };
    Library.prototype.returnBook = function (bookId) {
        var book = this.books.find(function (b) { return b.id === bookId; });
        if (book) {
            book.isAvailable = true;
            console.log("Book \"".concat(book.title, "\" returned to the library."));
        }
        else {
            console.log("Book not found.");
        }
    };
    Library.prototype.displayBooks = function () {
        console.log("Library Books:");
        this.books.forEach(function (book) {
            var status = book.isAvailable ? "Available" : "Not Available";
            console.log("ID: ".concat(book.id, ", Title: \"").concat(book.title, "\", Author: ").concat(book.author.name, ", Status: ").concat(status));
        });
    };
    Library.prototype.displaybooksByAuthor = function (auth_name) {
        console.log("Library books of ".concat(auth_name, ": "));
        this.books.forEach(function (book) {
            var status = book.isAvailable ? "Available" : "Not Available";
            if (book.author.name.match(auth_name))
                console.log("ID:".concat(book.id, ",Title: \"").concat(book.title, "\",Author:").concat(book.author.name, ",Status:").concat(status));
        });
    };
    return Library;
}());
// Example Usage
var library = new Library();
// Adding authors
var author1 = new Author(1, "George Orwell");
var author2 = new Author(2, "J.K. Rowling");
// Adding books
library.addBook(new Book(1, "1984", author1));
library.addBook(new Book(2, "Harry Potter", author2));
// Registering members
library.registerMember(new Member(1, "Alice"));
library.registerMember(new Member(2, "Bob"));
// Borrowing and returning books
library.borrowBook(1, 1); // Alice borrows "1984"
library.returnBook(1); // Returns "1984"
library.displayBooks(); // Display all books
library.displaybooksByAuthor("George Orwell");
