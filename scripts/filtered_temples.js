const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
   {
    templeName: "Montevideo Uruguay",
    location: "Montevideo, Uruguay",
    dedicated: "2001, March, 18",
    area: 10700,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/montevideo-uruguay-temple/montevideo-uruguay-temple-18474-main.jpg"
    },
    {
    templeName: "Salt Lake City",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6-24",
    area: 382207,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-74270-thumb.jpg"
    },
     {
    templeName: "San Diego California",
    location: "San Diego, California, United States",
    dedicated: "1993, April, 25-30",
    area: 58005,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-72106.jpg"
    }
     
];

// ----- Temple cards -----
const container = document.querySelector(".res-grid");

function createTempleCards(templeList) {
  container.innerHTML = "";   // clear old cards (needed later for the filters)

  templeList.forEach((temple) => {
    const card = document.createElement("figure");
    
    const name = document.createElement("h2");
    // set header with temple's name
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    // set string for temple location
    location.textContent = "Location: " + temple.location;

    const dedicated = document.createElement("p");
    // set string for temple dedication date
    dedicated.textContent = "Dedicated: " + temple.dedicated;

    const area = document.createElement("p");
    // set string for temple size
    area.textContent = "Size: " + temple.area.toLocaleString() + " sq ft";

    const img = document.createElement("img");
    img.setAttribute("src", temple.imageUrl);
    
    // set the attributes for alt, loading, width, and height
    img.setAttribute("alt", temple.templeName + " Temple");
    img.setAttribute("loading", "lazy");
    img.setAttribute("width", "400");
    img.setAttribute("height", "250");

    // appendChild each piece to card, then append card to container
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);

    container.appendChild(card);
  });
}

createTempleCards(temples);   // show all temples when the page loads
//  Filters for navigation menu
const heading = document.querySelector("main h1");

document.querySelector("#old").addEventListener("click", (event) => {
  event.preventDefault();   // stop the "#" link from jumping to the top
  heading.textContent = "Old";
  createTempleCards(temples.filter((temple) => parseInt(temple.dedicated) < 1900));
});

document.querySelector("#new").addEventListener("click", (event) => {
    event.preventDefault();
    heading.textContent = "New";
    createTempleCards(temples.filter((temple) => parseInt(temple.dedicated) > 2000));
});

document.querySelector("#large").addEventListener("click", (event) => {
    event.preventDefault();
    heading.textContent = "Large";
    createTempleCards(temples.filter((temple) => temple.area > 90000));
});

document.querySelector("#small").addEventListener("click", (event) => {
    event.preventDefault();
    heading.textContent = "Small";
    createTempleCards(temples.filter((temple) => temple.area < 10000));
});

document.querySelector("#home").addEventListener("click", (event) => {
    event.preventDefault();
    heading.textContent = "Home";
    createTempleCards(temples);
});

// ----- Hamburger menu -----
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open"); // show or hide the links
    menuButton.classList.toggle("open"); // switch the icon between ☰ and X
});

// ----- Footer dates -----
const today = new Date();
document.getElementById("currentyear").textContent = today.getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
