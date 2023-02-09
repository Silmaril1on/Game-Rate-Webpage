/*  navigation bar functions */
const toggleBtn = document.getElementById("menu-button");
const sideBar = document.getElementById("side-menu");
const searchBtn = document.getElementById("search-button");
const searchPanel = document.querySelector(".search-pannel");
const form = document.getElementById("search");

document.onclick = function (e) {
  if (e.target.id !== "search-button" && e.target.id !== "search") {
    searchPanel.classList.remove("search-active");
  }
};

searchBtn.onclick = () => {
  searchPanel.classList.toggle("search-active");
};

toggleBtn.onclick = () => {
  sideBar.classList.toggle("active");
};

/* cart */
$(document).ready(function () {
  $(".shopping").click(function () {
    $(".cart").fadeToggle(1000);
  });
});

const products = [

  {
    id: 0,
    name: "playstation 5",
    price: "499.99",
    platform: "<i>Platform:</i> Playstation 5",
    star: "../media/star.png",
    instock: 4,
    category: "consoles",
    info: "The latest Sony PlayStation introduced in November 2020. Powered by an eight-core AMD Zen 2 CPU and custom AMD Radeon GPU, the PS5 is offered in two models: with and without a 4K Blu-ray drive. Supporting a 120Hz video refresh, the PS5 is considerably more powerful than the PS4 and PS4 Pro.",
    img: "../media/ps5.jpg",
  },
  {
    id: 1,
    name: "xbox series x",
    price: "499.99",
    platform: "<i>Platform:</i> Xbox",
    star: "../media/star.png",
    instock: 8,
    category: "consoles",
    info: "The Xbox Series X is powered by a custom 7 nm AMD Zen 2 CPU with eight cores running at a nominal 3.8 GHz or, when simultaneous multithreading (SMT) is used, at 3.6 GHz. One CPU core is dedicated to the underlying operating system. The integrated GPU is also a custom unit based on AMD's RDNA 2 graphics architecture.",
    img: "../media/xbox.jpg",
  },
  {
    id: 2,
    name: "dualsense",
    price: "69.99",
    platform: "<i>Platform:</i> Playstation 5",
    star: "../media/star.png",
    instock: 18,
    category: "controllers",
    info: "The DualSense wireless controller for PS5 offers immersive haptic feedback2, dynamic adaptive triggers2 and a built-in microphone, all integrated into an iconic design.",
    img: "../media/shopdualsense.jpg",
  },
  {
    id: 3,
    name: "xbox controller",
    price: "69.99",
    platform: "<i>Platform:</i> Xbox",
    star: "../media/star.png",
    instock: 17,
    category: "controllers",
    info: "Xbox Wireless Controller ; Switch devices. Easily pair and switch between devices including Xbox Series X, Xbox Series S, Xbox One, Windows PC, Android, and iOS.",
    img: "../media/shopxcontroler.jpg",
  },
  {
    id: 4,
    name: "playstation VR2",
    price: "299.99",
    platform: "<i>Platform:</i> playstation",
    star: "../media/star.png",
    instock: 17,
    category: "gear",
    info: "The PlayStation VR2 is an upcoming virtual reality headset for the PlayStation 5 home video game console developed by Sony Interactive Entertainment set to be released February 22, 2023.",
    img: "../media/shoppsvr.jpg",
  },
  {
    id: 5,
    name: "PS5 Pulse 3D Headset",
    price: "99.99",
    platform: "<i>Platform:</i> playstation",
    star: "../media/star.png",
    instock: 17,
    category: "gear",
    info: "Description. Enjoy a seamless, wireless experience with a headset fine-tuned for 3D Audio on PS5 consoles. The PULSE 3D wireless headset features a refined design with dual noise-cancelling microphones, built-in rechargeable battery, and an array of easy-access controls. Available when feature is supported by game.",
    img: "../media/shop3dpulse.jpg",
  },
  {
    id: 6,
    name: "trustmaster t150 wheels",
    price: "219.99",
    platform: "<i>Platform:</i> playstation",
    star: "../media/star.png",
    instock: 17,
    category: "gear",
    info: "Racing sim fans will love the wheel's responsive and silent Force Feedback, for enhanced immersion in games — with sensations incredibly close to real-world",
    img: "../media/trustmaster.jpg",
  },
  {
    id: 7,
    name: "playstation hd webcam",
    price: "59.99",
    platform: "<i>Platform:</i> playstation",
    star: "../media/star.png",
    instock: 9,
    category: "gear",
    info: "Best answer: No. Sony's PS5 does not provide support for standard USB webcams. Instead, you'll have to either use the PS4's camera or Sony's latest HD Camera for the PS5 if you want to be seen.",
    img: "../media/shoppswebcam.jpg",
  },
  {
    id: 8,
    name: "playstation 4 pro",
    price: "399.99",
    platform: "<i>Platform:</i> playstation",
    star: "../media/star.png",
    instock: 9,
    category: "consoles",
    info: "The PS4 Pro represents a meatier, more powerful unit that delivers better performance capable of 4K gaming and HDR. Its other new console became known as the PS4 Slim, which offers the same functionality as the launch model in a sleeker form factor. Sony calls this the 'PS4' as it's phased out the original console.",
    img: "../media/shopps4pro.jpg",
  },
  {
    id: 9,
    name: "xbox one s",
    price: "399.99",
    platform: "<i>Platform:</i> xbox",
    star: "../media/star.png",
    instock: 5,
    category: "consoles",
    info: "The console was the first revision of the Xbox One, with the biggest differences being a slimmer design, support for 4K Ultra HD video streaming and HDR Gaming support. The console was released at a much more affordable price when compared to the standard Xbox One.",
    img: "../media/shopxboxs.jpg",
  },
  {
    id: 10,
    name: "hyperx alpha s",
    price: "159.99",
    platform: "<i>Platform:</i> hyperx",
    star: "../media/star.png",
    instock: 3,
    category: "gear",
    info: "Evolved with surround sound and adjustable bass. ; Weight: 0.68lb ; Weight with microphone: 0.68lb ; Connection Type: Wired 3.5mm (4-pole CTIA), Wired USB.",
    img: "../media/shophyperx.jpg",
  },
  {
    id: 11,
    name: "hyperx alloy fps",
    price: "119.99",
    platform: "<i>Platform:</i> hyperx",
    star: "../media/star.png",
    instock: 3,
    category: "gear",
    info: "The HyperX Alloy Origins 60 and the HyperX Alloy FPS Pro are both mechanical gaming keyboards. The Origins 60 has RGB backlighting and much lower latency",
    img: "../media/shophyperxkey.jpg",
  },
  {
    id: 12,
    name: "stadia",
    price: "259.99",
    platform: "<i>Platform:</i> google stadia",
    star: "../media/star.png",
    instock: 3,
    category: "controllers",
    info: "Stadia was a cloud gaming service developed and operated by Google. Known in development as Project Stream, the service debuted through a closed beta in October 2018, and publicly launched in November 2019.",
    img: "../media/shopstadia.jpg",
  },
  {
    id: 12,
    name: "asus rog strix flare",
    price: "139.99",
    platform: "<i>Platform:</i> asus",
    star: "../media/star.png",
    instock: 6,
    category: "gear",
    info: "ASUS ROG Strix Flare is a modern mechanical keyboard, equipped as it is expected to. It looks great, has a number of famous and interesting elements,",
    img: "../media/shopasuskey.jfif",
  },
];

const container = document.querySelector(".card-container");
const cartItemsEl = document.querySelector(".cart-items");
const subtotalEl = document.querySelector(".subtotal");
const totalItemsInCartEl = document.querySelector(".total-items-in-cart");
const filterButtonsBox = document.querySelector(".filter-buttons-container");

window.addEventListener("DOMContentLoaded", function () {
  showProductItems(products);
  displayMenuButtons();
});

function showProductItems(menuItems) {
  let renderProducts = menuItems
    .map((item) => {
      return `<div class="product-card">
            <div class="product-image-container">
              <img src="${item.img}" alt="">
              <div class="product-content">
                <h1>${item.name}</h1>
                <h2>$ ${item.price}</h2>
                <h3>${item.platform}</h3>
                <div class="stars">
                  <img src="${item.star}" alt="">
                  <img src="${item.star}" alt="">
                  <img src="${item.star}" alt="">
                  <img src="${item.star}" alt="">
                  <img src="${item.star}" alt="">
                </div>
              </div>
            </div>
            <div class="item-info">
                 <h2>${item.info}</h2>
              </div>
            <div class="icons">
              <div class="add-to-wishlist">
                 <i class="fa-solid fa-heart"><h4>add to wishlist</h4></i>
             </div>
              <div class="add-to-cart" onclick="addToCart(${item.id})">
                <i class="fa-solid fa-plus"><h4>add to cart</h4></i>
              </div>
            </div>
          </div>`;
    })
    .join("");
  container.innerHTML = renderProducts;
}

function displayMenuButtons() {
  const categories = products.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id=${category}>
      <span></span>
      <span></span>
      <span></span>
      <span></span> 
      ${category}</button>`;
    })
    .join("");
  filterButtonsBox.innerHTML = categoryBtns;

  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const productCategory = products.filter(function (productItem) {
        if (productItem.category === category) {
          return productItem;
        }
      });
      if (category === "all") {
        showProductItems(products);
      } else {
        showProductItems(productCategory);
      }
    });
  });
}

// search function 
const search = () => {
  const searchBox = document.getElementById("search-item").value.toUpperCase();
  const storeItems = document.getElementById("store-cards");
  const products = document.querySelectorAll(".product-card");
  const productName = storeItems.getElementsByTagName("h1");

  for (let i = 0; i < productName.length; i++) {
    let match = products[i].getElementsByTagName("h1")[0];
    if (match) {
      let textValue = match.textContent || match.innerHTML;
      if (textValue.toUpperCase().indexOf(searchBox) > -1) {
        products[i].style.display = "";
      } else {
        products[i].style.display = "none";
      }
    }
  }
};

// cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

// add to cart
function addToCart(id) {
  if (cart.some((item) => item.id === id)) {
    changeUnitNumbers("plus", id);
  } else {
    const item = products.find((product) => product.id === id);
    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }
  updateCart();
}

// update cart
function updateCart() {
  renderCartItems();
  renderSubtotal();
  localStorage.setItem("CART", JSON.stringify(cart));
}

// calculate and render subtotal
function renderSubtotal() {
  let totalPrice = 0,
    totalItem = 0;
  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItem += item.numberOfUnits;
  });
  subtotalEl.innerHTML = `subtotal (${totalItem} items): $${totalPrice.toFixed(
    2
  )}`;
  totalItemsInCartEl.innerHTML = totalItem;
}

// render cart items
function renderCartItems() {
  cartItemsEl.innerHTML = "";
  cart.forEach((item) => {
    cartItemsEl.innerHTML += `
        <div class="cart-item">
            <div class="cart-image">
              <img src="${item.img}" alt="">  
            </div>
            <div class="remove-cart" onclick="removeItemFromCart(${item.id})">
              <h3>Remove Item</h3>
            </div>
            <div class="cart-item-content">
              <h1>${item.name}</h1>
              <h2><b>$<b>${item.price}</h2>
              <div class="units">
                  <div class="btn minus" onclick="changeUnitNumbers('minus', ${item.id})">-</div>
                  <div class="number">${item.numberOfUnits}</div>
                  <div class="btn plus" onclick="changeUnitNumbers('plus', ${item.id})">+</div>           
              </div>
            </div>
        </div>
      `;
  });
}

// remove cart items
function removeItemFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  updateCart();
}

// change unit numbers for item
function changeUnitNumbers(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;
    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus" && numberOfUnits < item.instock) {
        numberOfUnits++;
      }
    }
    return {
      ...item,
      numberOfUnits,
    };
  });
  updateCart();
}

// tech section 
const tech = [
  {
    id: 0,
    img: "../media/product-asus.jpg",
  },
  {
    id: 1,
    img: "../media/product-rog.jpg",
  },
  {
    id: 2,
    img: "../media/product-hyperx.jpg",
  },
];

const techContainer = document.querySelector(".tech-container");

const renderTech = tech.map(product => {
  return `<div class="slide-tech">
            <div class="tech-img-cont">
              <img src="${product.img}" alt="">
            </div>
          </div>`
}).join("");

techContainer.innerHTML = renderTech;

const techCard = document.querySelectorAll(".slide-tech");

let techCounter = 0;

function techSlider() {
  setTimeout(techSlider, 3000);
  if (techCounter === techCard.length) {
    techCounter = 0;
  }
  if (techCounter < 0) {
    techCounter = techCard.length - 1;
  }
  techCard.forEach((item) => {
    item.style.transform = `translateX(-${techCounter * 100}%)`;
  });
  techCounter++;
}
techSlider();

/* social section */
const socials = [
  {
    id: 0,
    link: "<a href='https://www.facebook.com/graphchiqovani/' target='_blank'><i class='fa-brands fa-facebook'></i></a>",
  },
  {
    id: 2,
    link: '<a href="https://twitter.com/Essenc33" target="_blank"><i class="fa-brands fa-twitter"></i></a>',
  },
  {
    id: 3,
    link: '<a href="https://www.youtube.com/channel/UCKvPITtyom3LwQXuMV5xw-A/featured" target="_blank"><i class="fa-brands fa-youtube"></i></a>',
  },
  {
    id: 4,
    link: '<a href="https://www.instagram.com/silmarill1on/" target="_blank"><i class="fa-brands fa-instagram"></i></a>',
  },
  {
    id: 5,
    link: '<a href="https://www.linkedin.com/in/levani-chiqovani-b4a81aa0/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>',
  },
];

const socialSection = document.querySelector(".socialIcons");

const renderFooter = socials
  .map((link) => {
    return `<ul class="social">
                <li>${link.link}</li>
            </ul>`;
  })
  .join("");

socialSection.innerHTML = renderFooter;

const supportLinks = [
  {
    id: 0,
    info: "page connect",
  },
  {
    id: 1,
    info: "help",
  },
  {
    id: 2,
    info: "company",
  },
  {
    id: 3,
    info: "contact us",
  },
  {
    id: 4,
    info: "privacy",
  },
  {
    id: 5,
    info: "terms of  use",
  },
  {
    id: 6,
    info: "legal info",
  },
  {
    id: 7,
    info: "set cookies",
  },
];

const support = document.querySelector(".support");

const renderLinks = supportLinks
  .map((connect) => {
    return `<ul class="supportlist">
            <li>${connect.info}</li>
          </ul>`;
  })
  .join("");
support.innerHTML = renderLinks;