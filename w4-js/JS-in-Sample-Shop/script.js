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

/** create products as array of objects */
const Products = [
    {
        product_id: 1,
        title: "Retro",
        desc: "White bottle in retro style",
        price: 99.0,
        currency: "CHF",
        in_stock: true,
        img: "img/bottle-white.jpg",
    },
    {
        product_id: 2,
        title: "Camouflage",
        desc: "Stylish bottle in camouflage green",
        price: 120.0,
        currency: "CHF",
        in_stock: true,
        img: "img/bottle-green.jpg",
    },
    {
        product_id: 3,
        title: "Hooks",
        desc: "Grey bottle with practical hook",
        price: 75.0,
        currency: "CHF",
        in_stock: true,
        img: "img/bottle-grey.jpg",
    },
    {
        product_id: 4,
        title: "Stylish",
        desc: "Very stylish bottle",
        price: 79.0,
        currency: "CHF",
        in_stock: false,
        img: "img/bottle-white-2.jpg",
    },
    {
        product_id: 5,
        title: "Natural",
        desc: "Bottle in beautiful wooden look",
        price: 125.0,
        currency: "CHF",
        in_stock: true,
        img: "img/bottle-wood.jpg",
    },
];

/** get DOM elements we need: cart icon and account icon */
const icons = document.querySelectorAll(".icons a");
const cartIcon = icons[1];
const accountIcon = icons[0];

//add counter wrapper to icon
let cartCounter = document.createElement("span");
cartIcon.appendChild(cartCounter);
let itemCounter = 0;
const cartItems = [];

/** add products to DOM - only if in stock */
let productList;
let productItem;
let productLink;
let productImage;
let productTitle;
let productPrice;
let productButton;

const shopArticle = document.querySelector("article");
// Creating the product list
productList = document.createElement("ul");
shopArticle.appendChild(productList);

Products.forEach(function (product) {
    // Only show in stock items
    if (product.in_stock) {
        const item = `
        <li data-id=${product.product_id}>
        <a href="en${"/"}shop.html?detail=${product.title.toLowerCase()}">
        <img src=${product.img} alt=${product.desc}>
        <h4 class="arw">${product.title}</4>
        <p>${product.currency + " " + product.price.toFixed(2)}</p>
        </a>
        <button>Add to cart</button>    
        </li>
        `;
        productList.innerHTML += item;
    }
});

/** add to cart function
 * list for products in cart (store product_id and quantity)
 */
function addToCart(product_id) {
    let in_list = false;

    cartItems.forEach(function (product) {
        //check if product is already in list cartItems
        for (const key in product) {
            //if it is, add +1 to the quantity
            if (key === "id" && product[key] === product_id) {
                product.quantity++;
                in_list = true;
                break;
            }
        }
    });
    //if it is not, add new object with quantity 1
    if (!in_list) {
        const Product = {
            id: product_id,
            quantity: 1,
        };
        cartItems.push(Product);
        in_list = false;
    }
}

/** Count items in cart function
 * add counter for cart icon (based on quantity)
 */
function countItemsInCart() {
    //reset itemCounter
    itemCounter = 0;
    //loop through the array
    cartItems.forEach(function (product) {
        //loop through the objects and find the quantity for each entry
        for (const key in product) {
            if (key === "quantity") {
                itemCounter += product.quantity;
            }
        }
    });
    //add value to HTML
    cartCounter.textContent = itemCounter;
    //move to top of the page to give feedback to the user
    window.scrollTo(0, 0);
}
