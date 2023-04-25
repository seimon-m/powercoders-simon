let o = {
    k: "value",
};
// console.log(o.k);

function Person(name, imagesrc, age) {
    this.name = name;
    this.imagesrc = imagesrc;
    this.age = age;
}

function Person() {
    this.name = "Hello";
}

let caner = new Person("Caner", "img/Caner.jpg", 31);

// console.log(caner);

let city = {}; // {}
let city2; // undefined
let city3 = null; // null
city3 = "Lausanne";

// console.log(city);
// console.log(city2);
// console.log(city3);

typeof null; // "object" (not "null" for legacy reasons)
typeof undefined; // "undefined"
null === undefined; // false
null == undefined; // true
null === null; // true
null == null; // true
!null; // true
Number.isNaN(1 + null); // false
Number.isNaN(1 + undefined); // true

// console.log(1 + null);

/*** Exercise: Your top choices ***/
let choices = [
    ["Age of Empires 4", "Cyberpunk 2077", "Sea of Thieves"],
    ["snowboarding", "football", "yoga"],
    ["not Trump", "not Bush", "not Clinton"],
];

choices.forEach((elements) => {
    elements.forEach((element, index) => {
        console.log(`My #${index + 1} choice is ${element}`);
    });
});

/*** Exercise: Recipe Card ***/

function Recipe(title, servings, ...args) {
    this.name = title;
    this.servings = servings;
    this.ingredients = args;
    this.get = () => {
        console.log(this.name);
        console.log("Serves: " + this.servings);
        console.log("Ingredients: " + this.ingredients.join(", "));
    };
}

const lasagne = new Recipe(
    "Lasagne",
    2,
    "Tomato sauce",
    "Lasagne sheets",
    "Parmesan",
    "Carrots",
    "Bechamel sauce"
);

lasagne.get();
