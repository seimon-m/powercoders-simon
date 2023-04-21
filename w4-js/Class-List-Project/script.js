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

const generateHTML = (item) => {
    const personArticle = document.createElement("div");
    personArticle.setAttribute("class", "article");

    const personImage = document.createElement("img");
    personImage.src = item.img;
    personArticle.appendChild(personImage);

    const overlay = document.createElement("div");
    overlay.setAttribute("class", "overlay");
    personArticle.appendChild(overlay);

    const textDiv = document.createElement("div");
    textDiv.setAttribute("class", "text");

    const personName = document.createElement("h2");
    personName.innerHTML = item.name;
    textDiv.appendChild(personName);

    const personLocation = document.createElement("p");
    personLocation.innerHTML = item.location;
    textDiv.appendChild(personLocation);

    personArticle.appendChild(textDiv);
    return personArticle;
};

zurich.addEventListener("click", () => {
    removeAllChildNodes(main);
    zurich_list.forEach((item) => {
        main.appendChild(generateHTML(item));
    });
});

bern.addEventListener("click", () => {
    removeAllChildNodes(main);
    bern_list.forEach((item) => {
        main.appendChild(generateHTML(item));
    });
});

lausanne.addEventListener("click", () => {
    removeAllChildNodes(main);
    lausanne_list.forEach((item) => {
        main.appendChild(generateHTML(item));
    });
});

all.addEventListener("click", () => {
    removeAllChildNodes(main);
    powercoders.forEach((item) => {
        main.appendChild(generateHTML(item));
    });
});

window.addEventListener("load", (event) => {
    powercoders.forEach((item) => {
        main.appendChild(generateHTML(item));
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
