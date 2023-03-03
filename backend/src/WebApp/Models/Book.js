const ServerError = require('./ServerError.js');
const { AuthorResponse } = require('./Author.js');

class BookPostBody {
    constructor (body) {
        this.name = body.name;
        this.authorId = body.authorId;

        if (this.name == null || this.name.length < 4) {
            throw new ServerError("First name is missing", 400);
        }
    
        if (this.authorId == null) {
            throw new ServerError("Book ID is missing", 400);
        }
    }

    get Name () {
        return this.name;
    }

    get AuthorId () {
        return this.authorId;
    }
}

class BookPutBody extends BookPostBody {
    constructor (body, id) {
        super(body);
        this.id = parseInt(id);

        if (!this.id || this.id < 1) {
            throw new ServerError("Id should be a positive integer", 400);
        }
    }

    get Id () {
        return this.id;
    }
}

class BookResponse {
    constructor(book) {
        console.log(book);
        
        this.id = book.id;
        this.isbn = book.isbn;
        this.booktitle  = book.booktitle;
        this.bookauthor = book.bookauthor;
        this.yearofpublication = book.yearofpublication;
        this.publisher = book.publisher;
        this.imageurls = book.imageurls;
        this.id = book.id;
    }
}

class BookDetailsResponse {
    constructor(books) {
        const bookMap = new Map();
        books.forEach(book => {
            if (!bookMap.has(book.id)) {
                bookMap.set(book.id, {
                    id: book.id,
                    booktitle: book.booktitle,
                    bookauthor: book.bookauthor,
                    publisher: book.publisher,
                    imageurls: book.imageurls
                });
            }

            // const mappedBook = bookMap.get(book.id);

            // mappedBook.publishers.push({
            //     id: book.publisher_id,
            //     name: book.publisher_name,
            //     price: book.price
            // });

          //  bookMap.set(book.book_id, mappedBook);
        });

        const bookMapEntry = bookMap.values().next().value;

        this.id = bookMapEntry.id;
        this.name = bookMapEntry.booktitle;
        this.author = bookMapEntry.bookauthor;
        this.publisher = bookMapEntry.publisher;
        this.imageurls = bookMapEntry.imageurls;
    }
}

module.exports =  {
    BookPostBody,
    BookPutBody,
    BookResponse,
    BookDetailsResponse
}