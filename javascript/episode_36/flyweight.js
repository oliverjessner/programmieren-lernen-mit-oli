class ConcreteBooks {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class Books {
    constructor(book, lastBorrorwer) {
        this.book = book;
        this.lastBorrorwer = lastBorrorwer;
    }
}

class Libary {
    #concreteBooks = new Map();
    #books = new Map();

    getConcreteBooks(title, author, isbn) {
        if (!this.#concreteBooks.has(isbn)) {
            const book = new ConcreteBooks(title, author, isbn);

            this.#concreteBooks.set(isbn, book);

            return book;
        }

        return this.#concreteBooks.get(isbn);
    }

    addBooks(title, author, isbn, lastBorrorwer) {
        if (this.#books.has(isbn + lastBorrorwer)) {
            return this.#books.get(isbn + lastBorrorwer);
        }

        const concreteBooks = this.getConcreteBooks(title, author, isbn);
        const realBook = new Books(concreteBooks, lastBorrorwer);

        this.#books.set(isbn + lastBorrorwer, realBook);

        return realBook;
    }

    getUnquieBooks() {
        return this.#concreteBooks.size;
    }

    getCopies() {
        return this.#books.size;
    }
}

const factory = new Libary();
const book1 = factory.addBooks('Catcher In The Rye', 'J.D. Salinger', '9783462015393', 'Oliver');
const book2 = factory.addBooks('Catcher In The Rye', 'J.D. Salinger', '9783462015393', 'Conny');
const book3 = factory.addBooks('Catcher In The Rye', 'J.D. Salinger', '9783462015393', 'Boris');
const book4 = factory.addBooks('Der Herr aus Glas', 'Erich Kästner', '9783038820222', 'Oliver');
const book5 = factory.addBooks('Der Herr aus Glas', 'Erich Kästner', '9783038820222', 'Conny');
const book6 = factory.addBooks('The Great Gatsby', 'F. Scott Fitzgerald', '9780333791035', 'Oliver');

console.log(book1.book === book2.book);
console.log(book1.book === new ConcreteBooks('Catcher In The Rye', 'J.D. Salinger', '9783462015393'));
console.log(`Number of unquie Books: ${factory.getUnquieBooks()}`);
console.log(`Number of copies: ${factory.getCopies()}`);
