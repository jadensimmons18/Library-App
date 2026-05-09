
export class Book {
    constructor(title, author, pages, description, genre){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.description = description;
        this.genre = genre;
        this.id = crypto.randomUUID();
    }

    info() {
        return this.title + " by " + this.author + ", " +
               this.pages + " pages, " + (this.read ? "read" : "not read");
    }
}

