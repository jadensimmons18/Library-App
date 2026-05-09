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

        for (let i = 0; i < Library.length; i++){
            if (Library[i].title.toLowerCase().includes(lowerInput) || Library[i].author.toLowerCase().includes(lowerInput)) {
                results.push(Library[i]);
            }
        }
        return results;
    }
}