/**
 * WHAT WE HAD SO FAR:
 * loops
 * conditions
 * functions
 * objects
 * arrays
 * events
 * DOM manipulation
 *
 * HOW WE CAN USE THAT IN OUR SHOP:
 * e.g. store and list our products
 * e.g. add / remove items to / from the cart
 */

const products = [
    {
        title: "Bottle 1",
        image: "img/bottle-glas.jpg",
        price: "CHF 30.00",
        material: "Glas",
        isAvailable: false,
        color: ["Green", "Blue", "Yellow"],
    },
    {
        title: "Bottle 2",
        image: "img/bottle-white-2.jpg",
        price: "CHF 30.00",
        material: "Glas",
        isAvailable: true,
        color: ["Green", "Blue", "Yellow"],
    },
    {
        title: "Bottle 3",
        image: "img/bottle-white.jpg",
        price: "CHF 30.00",
        material: "Glas",
        isAvailable: true,
        color: ["Green", "Blue", "Yellow"],
    },
    {
        title: "Bottle 4",
        image: "img/bottle-green.jpg",
        price: "CHF 30.00",
        material: "Glas",
        isAvailable: true,
        color: ["Green", "Blue", "Yellow"],
    },
    {
        title: "Bottle 5",
        image: "img/bottle-wood.jpg",
        price: "CHF 30.00",
        material: "Glas",
        isAvailable: true,
        color: ["Green", "Blue", "Yellow"],
    },
    {
        title: "Bottle 6",
        image: "img/bottle-grey.jpg",
        price: "CHF 30.00",
        material: "Glas",
        isAvailable: true,
        color: ["Green", "Blue", "Yellow"],
    },
];

const shop = document.querySelector(".shop");

products.forEach((product) => {
    if (product.isAvailable) {
        /**** TEMPLATE STRING VERSION ****/
        // shop.innerHTML += `
        // <article>
        //     <img src="${product.image}" alt="${product.title}" />
        //     <h4>${product.title}</h4>
        //     <p>${product.price}</p>
        //     <p>${product.color[0]}</p>
        //     <p>${product.material}</p>
        //     <button>Add to cart</button>
        // </article>
        // `;

        /**** CREATE ELEMENT VERSION ****/
        const article = document.createElement("article");
        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.title;
        article.appendChild(img);

        const title = document.createElement("h4");
        title.textContent = product.title;
        title.classList.add("arw");
        article.appendChild(title);

        const price = document.createElement("p");
        price.textContent = product.price;
        article.appendChild(price);

        const color = document.createElement("p");
        color.textContent = product.color[0];
        article.appendChild(color);

        const material = document.createElement("p");
        price.textContent = product.material;
        article.appendChild(material);

        const button = document.createElement("button");
        button.textContent = "Add to cart";
        article.appendChild(button);

        shop.appendChild(article);
    }
});

/**** NOT BEST PRACTICE WITH FOR LOOP ****/
// for (let index = 0; index < products.length; index++) {
//     if (products[index].isAvailable) {
//         shop.innerHTML += `
//                 <article>
//                     <img src="${products[index].image}" alt="${products[index].title}" />
//                     <h4>${products[index].title}</h4>
//                     <p>${products[index].price}</p>
//                     <p>${products[index].color[0]}</p>
//                     <p>${products[index].material}</p>
//                     <button>Add to cart</button>
//                 </article>
//                 `;
//     }
// }
