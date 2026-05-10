import { Library } from "./library.js";
import { Book } from "./books.js";
import { createCard } from "./render.js";
import { createLibrary } from "./render.js";

console.log("Connected!!");

const library = new Library();

const dune = new Book(
    "Dune",
    "Frank Herbert",
    688,
    "A young nobleman becomes central to a galactic power struggle on the desert planet Arrakis.",
    "Science Fiction",
    "9780441172719"
);

const mockingbird = new Book(
    "To Kill a Mockingbird",
    "Harper Lee",
    336,
    "A young girl witnesses racial injustice in the American South through her father's legal defense of an innocent man.",
    "Classic",
    "9780061120084"
);

const nineteenEightyFour = new Book(
    "1984",
    "George Orwell",
    328,
    "A dystopian society lives under constant government surveillance and manipulation.",
    "Dystopian",
    "9780451524935"
);

const prideAndPrejudice = new Book(
    "Pride and Prejudice",
    "Jane Austen",
    432,
    "Elizabeth Bennet navigates love, class, and social expectations in 19th century England.",
    "Romance",
    "9780141439518"
);

const hungerGames = new Book(
    "The Hunger Games",
    "Suzanne Collins",
    374,
    "A televised survival competition forces children to fight to the death in a dystopian nation.",
    "Dystopian",
    "9780439023481"
);

function main(){
    library.addBook(dune);
    library.addBook(mockingbird);
    library.addBook(nineteenEightyFour);
    library.addBook(prideAndPrejudice);
    library.addBook(hungerGames);

    // Render Library
    createLibrary(library.books);
}

main();