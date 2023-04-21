const powercoders = [
  {
    "img": "img/anna.jpg",
    "name": "Anna",
    "shirtColor": "Darkblue",
    "location": "Zurich"
  },
  {
    "img": "img/caner.jpg",
    "name": "Caner",
    "shirtColor": "Blue",
    "location": "Lausanne"
  },
  {
    "img": "img/harun.jpg",
    "name": "Harun",
    "shirtColor": "Lightblue",
    "location": "Zurich"
  },
  {
    "img": "img/huseyin.jpg",
    "name": "Hüseyin",
    "shirtColor": "Black",
    "location": "Zurich"
  },
  {
    "img": "img/kingsley.jpg",
    "name": "Kingsley",
    "shirtColor": "Green",
    "location": "Bern"
  },
  {
    "img": "img/sumeyra.jpg",
    "name": "Sümeyra",
    "shirtColor": "Lightblue",
    "location": "Bern"
  },
  {
    "img": "img/latif.jpg",
    "name": "Latif",
    "shirtColor": "Grey",
    "location": "Zurich"
  },
  {
    "img": "img/melek.jpg",
    "name": "Melek",
    "shirtColor": "White",
    "location": "Zurich"
  }
]

let personArticle;
let personImage;
let personInfos


for (var i = 0; i <= powercoders.length - 1; i++) {

  // Creating the article
  personArticle = document.createElement("article");
  document.body.appendChild(personArticle);

  // Creating the image of all persons
  personImage = document.createElement("img");
  personImage.src = powercoders[i].img;
  personImage.setAttribute("id", "person" + i);
  personArticle.appendChild(personImage);

  // Creating the infos
  const personName = document.createElement("h2");
  const personLocation = document.createElement("h3");

  personName.innerHTML = powercoders[i].name;
  personLocation.innerHTML = powercoders[i].location;

  personArticle.appendChild(personName);
  personArticle.appendChild(personLocation);

  // Checking eye color and class assignment
  const checkColor = powercoders[i].shirtColor;
  switch (checkColor) {
    case 'Blue':
    case 'Darkblue':
    case 'Lightblue':
      personArticle.setAttribute("class", "blueShirt");
      break;
    case 'Green':
      personArticle.setAttribute("class", "greenShirt");
      break;
    case 'Grey':
      personArticle.setAttribute("class", "greyShirt");
      break;
    case 'Black':
      personArticle.setAttribute("class", "blackShirt");
      break;
    case 'White':
      personArticle.setAttribute("class", "whiteShirt");
      break;
    default:
      personArticle.setAttribute("class", "noColor");
  }

}

var eachPerson = document.getElementsByTagName("article");
const blueColor = document.getElementById("blue");
const greenColor = document.getElementById("green");
const greyColor = document.getElementById("grey");
const blackColor = document.getElementById("black");
const whiteColor = document.getElementById("white");
const allColors = document.getElementById("all");

for (let i = 0; i <= eachPerson.length - 1; i++) {

  eachPerson[i].onclick = function(e) {
    let targetElement = e.path[1];
    let elementInfos = targetElement.lastChild;
    if (elementInfos.style.display === "none") {
      elementInfos.style.display = "block";
    } else {
      elementInfos.style.display = "none";
    }
  };
}

allColors.onclick = function() {
  for (let i = 0; i <= eachPerson.length - 1; i++) {
    eachPerson[i].style.display = "block";

  }
}

blueColor.onclick = function() {
  for (let i = 0; i <= eachPerson.length - 1; i++) {
    if (eachPerson[i].className == "blueShirt") {
      if (eachPerson[i].style.display === "none") {
        eachPerson[i].style.display = "block";
      }
    } else {
      eachPerson[i].style.display = "none";
    }
  }
}

greenColor.onclick = function() {
  for (let i = 0; i <= eachPerson.length - 1; i++) {
    if (eachPerson[i].className == "greenShirt") {
      if (eachPerson[i].style.display === "none") {
        eachPerson[i].style.display = "block";
      }
    } else {
      eachPerson[i].style.display = "none";
    }
  }
}

greyColor.onclick = function() {
  for (let i = 0; i <= eachPerson.length - 1; i++) {
    if (eachPerson[i].className == "greyShirt") {
      if (eachPerson[i].style.display === "none") {
        eachPerson[i].style.display = "block";
      }
    } else {
      eachPerson[i].style.display = "none";
    }
  }
}

blackColor.onclick = function() {
  for (let i = 0; i <= eachPerson.length - 1; i++) {
    if (eachPerson[i].className == "blackShirt") {
      if (eachPerson[i].style.display === "none") {
        eachPerson[i].style.display = "block";
      }
    } else {
      eachPerson[i].style.display = "none";
    }
  }
}

whiteColor.onclick = function() {
  for (let i = 0; i <= eachPerson.length - 1; i++) {
    if (eachPerson[i].className == "whiteShirt") {
      if (eachPerson[i].style.display === "none") {
        eachPerson[i].style.display = "block";
      }
    } else {
      eachPerson[i].style.display = "none";
    }
  }
}