class Author {
     id:number
     name:string
     books:Book[];
    constructor( id: number, name: string) {this.id=id;
        this.name=name;
    }
    addBook(book: Book): void{
        this.books.push(book);}
}

class Book {
    id:number;
    title:string;
    author: Author;
    isAvailable:boolean ;
    constructor(
        id: number,
         title: string,
         author: Author,
         isAvailable: boolean = true
         
    ) {this.id=id;
        this.title=title;
        this.author=author;
        this.isAvailable=isAvailable;
        this.author.addBook(this);
    }
}

class Member {
    id:number;
    name:string;
    constructor( id: number, name: string) {this.id=id;
        this.name=name;
    }
}

class Library {
    private books: Book[] = [];
    private members: Member[] = [];

    addBook(book: Book) {
        this.books.push(book);
        console.log(`Book "${book.title}" added to the library.`);
    }

    registerMember(member: Member) {
        this.members.push(member);
        console.log(`Member "${member.name}" registered.`);
    }

    borrowBook(memberId: number, bookId: number) {
        const member = this.members.find(m => m.id === memberId);
        const book = this.books.find(b => b.id === bookId);

        if (!member) {
            console.log("Member not found.");
            return;
        }
        if (!book) {
            console.log("Book not found.");
            return;
        }
        if (!book.isAvailable) {
            console.log(`Book "${book.title}" is currently not available.`);
            return;
        }

        book.isAvailable = false;
        console.log(`Member "${member.name}" borrowed "${book.title}".`);
    }

    returnBook(bookId: number) {
        const book = this.books.find(b => b.id === bookId);
        if (book) {
            book.isAvailable = true;
            console.log(`Book "${book.title}" returned to the library.`);
        } else {
            console.log("Book not found.");
        }
    }

    displayBooks() {
        console.log("Library Books:");
        this.books.forEach(book => {
            const status = book.isAvailable ? "Available" : "Not Available";
            console.log(`ID: ${book.id}, Title: "${book.title}", Author: ${book.author.name}, Status: ${status}`);
        });
    }

    displaybooksByAuthor(auth_name:string){
        console.log(`Library books of ${auth_name}: `);
        this.books.forEach(book=>{
            const status = book.isAvailable?"Available":"Not Available";
            if(book.author.name.match(auth_name))
            console.log(`ID:${book.id},Title: "${book.title}",Author:${book.author.name},Status:${status}`);
        });
    }
}

// Example Usage
const library = new Library();

// Adding authors
const author1 = new Author(1, "George Orwell");
const author2 = new Author(2, "J.K. Rowling");

// Adding books
library.addBook(new Book(1, "1984", author1));
library.addBook(new Book(2, "Harry Potter", author2));

// Registering members
library.registerMember(new Member(1, "Alice"));
library.registerMember(new Member(2, "Bob"));

// Borrowing and returning books
library.borrowBook(1, 1); // Alice borrows "1984"
library.returnBook(1);     // Returns "1984"
library.displayBooks();     // Display all books

library.displaybooksByAuthor("George Orwell");
