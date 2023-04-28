const books = [
    {
        title: "The Design of Every Day Things",
        author: "Don Norman",
        alreadyRead: false,
        img: "https://exlibris.azureedge.net/covers/9780/2625/2567/1/9780262525671xxl.webp",
        url: "https://www.exlibris.ch/de/buecher-buch/english-books/donald-a-norman/the-design-of-everyday-things/id/9780262525671/",
    },
    {
        title: "The Most Human Human",
        author: "Brian Christian",
        alreadyRead: true,
        img: "https://exlibris.azureedge.net/covers/9780/2419/5605/2/9780241956052xxl.webp",
        url: "https://www.exlibris.ch/de/buecher-buch/english-books/brian-christian/the-most-human-human/id/9780241956052/",
    },
];

const book_list = document.querySelector(".book_list");

books.forEach((book) => {
    const li = document.createElement("a");
    li.setAttribute("href", "read");
    if (book.alreadyRead) {
        li.setAttribute("class", "read");
    }

    const image = document.createElement("img");
    image.src = book.img;
    li.appendChild(image);

    const title = document.createElement("h2");
    title.innerText = book.title;
    li.appendChild(title);

    const author = document.createElement("p");
    author.innerText = book.author;
    li.appendChild(author);

    book_list.appendChild(li);
});
