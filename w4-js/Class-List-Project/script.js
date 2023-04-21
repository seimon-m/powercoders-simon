const powercoders = [
    {
        img: "img/anna.jpg",
        name: "Anna",
        location: "Zurich",
    },
    {
        img: "img/caner.jpg",
        name: "Caner",
        location: "Lausanne",
    },
    {
        img: "img/harun.jpg",
        name: "Harun",
        location: "Zurich",
    },
    {
        img: "img/huseyin.jpg",
        name: "Hüseyin",
        location: "Zurich",
    },
    {
        img: "img/kingsley.jpg",
        name: "Kingsley",
        location: "Bern",
    },
    {
        img: "img/sumeyra.jpg",
        name: "Sümeyra",
        location: "Bern",
    },
    {
        img: "img/latif.jpg",
        name: "Latif",
        location: "Zurich",
    },
    {
        img: "img/melek.jpg",
        name: "Melek",
        location: "Zurich",
    },
];

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
const main = document.querySelector("main");
const all = document.querySelector("#all");
const zurich = document.querySelector("#zurich");
const bern = document.querySelector("#bern");
const lausanne = document.querySelector("#lausanne");

zurich.addEventListener("click", () => {
    removeAllChildNodes(main);
    zurich_list.forEach((item) => {
        const personArticle = document.createElement("div");
        personArticle.setAttribute("class", "article");

        const personImage = document.createElement("img");
        personImage.src = item.img;
        personArticle.appendChild(personImage);

        const personName = document.createElement("h2");
        personName.innerHTML = item.name;
        personArticle.appendChild(personName);

        const personLocation = document.createElement("p");
        personLocation.innerHTML = item.location;
        personArticle.appendChild(personLocation);

        main.appendChild(personArticle);
    });
});

bern.addEventListener("click", () => {
    removeAllChildNodes(main);
    bern_list.forEach((item) => {
        const personArticle = document.createElement("div");
        personArticle.setAttribute("class", "article");

        const personImage = document.createElement("img");
        personImage.src = item.img;
        personArticle.appendChild(personImage);

        const personName = document.createElement("h2");
        personName.innerHTML = item.name;
        personArticle.appendChild(personName);

        const personLocation = document.createElement("p");
        personLocation.innerHTML = item.location;
        personArticle.appendChild(personLocation);

        main.appendChild(personArticle);
    });
});

lausanne.addEventListener("click", () => {
    removeAllChildNodes(main);
    lausanne_list.forEach((item) => {
        const personArticle = document.createElement("div");
        personArticle.setAttribute("class", "article");

        const personImage = document.createElement("img");
        personImage.src = item.img;
        personArticle.appendChild(personImage);

        const personName = document.createElement("h2");
        personName.innerHTML = item.name;
        personArticle.appendChild(personName);

        const personLocation = document.createElement("p");
        personLocation.innerHTML = item.location;
        personArticle.appendChild(personLocation);

        main.appendChild(personArticle);
    });
});

all.addEventListener("click", () => {
    removeAllChildNodes(main);
    powercoders.forEach((item) => {
        const personArticle = document.createElement("div");
        personArticle.setAttribute("class", "article");

        const personImage = document.createElement("img");
        personImage.src = item.img;
        personArticle.appendChild(personImage);

        const personName = document.createElement("h2");
        personName.innerHTML = item.name;
        personArticle.appendChild(personName);

        const personLocation = document.createElement("p");
        personLocation.innerHTML = item.location;
        personArticle.appendChild(personLocation);

        main.appendChild(personArticle);
    });
});

window.addEventListener("load", (event) => {
    powercoders.forEach((item) => {
        const personArticle = document.createElement("div");
        personArticle.setAttribute("class", "article");

        const personImage = document.createElement("img");
        personImage.src = item.img;
        personArticle.appendChild(personImage);

        const personName = document.createElement("h2");
        personName.innerHTML = item.name;
        personArticle.appendChild(personName);

        const personLocation = document.createElement("p");
        personLocation.innerHTML = item.location;
        personArticle.appendChild(personLocation);

        main.appendChild(personArticle);
    });
    powercoders.forEach((item) => {
        if (item.location == "Zurich") {
            zurich_list.push(item);
        } else if (item.location == "Bern") {
            bern_list.push(item);
        } else if (item.location == "Lausanne") {
            lausanne_list.push(item);
        }
    });
});

const zurich_list = [];
const bern_list = [];
const lausanne_list = [];
