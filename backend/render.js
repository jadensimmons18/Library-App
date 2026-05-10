export function createCard(book){
    let card = document.createElement("div");

    card.classList.add("book-card");

    card.innerHTML = `
        <img src="https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg">
        <h2>${book.title}</h2>
        <p>${book.author}</p>
        <p>${book.genre}</p>
    `;

    return card;
}

export function createLibrary(books){
    const container = document.getElementById("book-list");

    for (const book of books){
        const card = createCard(book);

        container.appendChild(card);
    }
}