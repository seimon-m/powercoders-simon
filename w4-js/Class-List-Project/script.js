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
let zurich_html = [];
let bern_html = [];
let lausanne_html = [];
let all_html = [];

zurich.addEventListener("click", () => {
    removeAllChildNodes(main);
    const zurich_people = powercoders.filter(
        (person) => person.location === "Zurich"
    );
    if (!zurich_html.length) {
        zurich_people.forEach((item) => {
            zurich_html.push(generateHTML(item));
        });
    }
    zurich_html.forEach((person) => {
        main.appendChild(person);
    });
});

bern.addEventListener("click", () => {
    removeAllChildNodes(main);
    const bern_people = powercoders.filter(
        (person) => person.location === "Bern"
    );
    if (!bern_html.length) {
        bern_people.forEach((item) => {
            bern_html.push(generateHTML(item));
        });
    }
    bern_html.forEach((person) => {
        main.appendChild(person);
    });
});

lausanne.addEventListener("click", () => {
    removeAllChildNodes(main);
    const lausanne_people = powercoders.filter(
        (person) => person.location === "Lausanne"
    );
    if (!lausanne_html.length) {
        lausanne_people.forEach((item) => {
            lausanne_html.push(generateHTML(item));
        });
    }
    lausanne_html.forEach((person) => {
        main.appendChild(person);
    });
});

all.addEventListener("click", () => {
    removeAllChildNodes(main);
    all_html.forEach((person) => {
        main.appendChild(person);
    });
});

window.addEventListener("load", () => {
    powercoders.forEach((item) => {
        const person = generateHTML(item);
        person.onclick = (element) => {
            console.log(element.target.parentElement);
        };

        all_html.push(person);
        main.appendChild(person);
    });
});

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
