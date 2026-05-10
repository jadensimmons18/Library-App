
export class Book {
    constructor(title, author, pages, description, genre, isbn){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.description = description;
        this.genre = genre;
        this.isbn = isbn;
        this.id = crypto.randomUUID();
    }

    info() {
        return this.title + " by " + this.author + ", " +
               this.pages + " pages, ";
    }
}

