



const Library = [];



class Book {
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = crypto.randomUUID();
    }

    info() {
        return this.title + " by " + this.author + ", " +
               this.pages + " pages, " + (this.read ? "read" : "not read");
    }
}

function addBookToLibrary(book){
    Library.push(book);
}

function search(input) {

    const results = [];

    const lowerInput = input.toLowerCase();

    for (let i = 0; i < Library.length; i++){
        if (Library[i].title.toLowerCase().includes(lowerInput) || Library[i].author.toLowerCase().includes(lowerInput)) {
            results.push(Library[i]);
        }
    }
    return results;
}


theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary(theHobbit);
harryPotter = new Book("Harry Potter", "i dont remember", 365, false);
addBookToLibrary(harryPotter);
newYear = new Book("New year", "J.R.R.", 295, true);
addBookToLibrary(newYear);
hob = new Book("The Hob", "J.R.R. Tolkien", 295, true);
addBookToLibrary(hob);


console.log(search("hob"));
console.log(search("the"));
console.log(search("j.r.r."))


