export class Library {
    constructor() {
        this.books = [];
    }

    addBook(book){
        this.books.push(book);
    }

    search(input){
        const results = [];

        const lowerInput = input.toLowerCase();

        for (let i = 0; i < this.books.length; i++){
            if (this.books[i].title.toLowerCase().includes(lowerInput) || this.books[i].author.toLowerCase().includes(lowerInput)) {
                results.push(this.books[i]);
            }
        }
        return results;
    }
}