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

$(document).ready(function () {
  $(".shopping").click(function () {
    $(".cart").fadeToggle(1000);
  });
});

/* slide-show */
const images = [
  "../media/slideshow-acodyssey.jpg",
  "../media/slideshow-rdr2.jpg",
  "../media/slideshow-acorigins.jpg",
  "../media/slideshow-dgone.jpg",
  "../media/slideshow-gow4.jpg",
];

const slidediv = document.querySelector(".slideShow-container");

const renderImages = images
  .map(function (image) {
    return `<div class="slide-show">
              <img src="${image}" class="slide-images" alt="">
           </div>`;
  })
  .join("");

slidediv.innerHTML = renderImages;

const imgs = document.querySelectorAll(".slide-images");

let counter = 0;

function autoSlider() {
  setTimeout(autoSlider, 4000);
  if (counter === imgs.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = imgs.length - 1;
  }
  imgs.forEach(function (img) {
    img.style.transform = `translateX(-${counter * 100}%)`;
  });
  counter++;
}
autoSlider();

/* dota section */
const dotaShow = [
  {
    id: 0,
    img: "../media/dota2logo.gif",
    header: "dota 2",
    info: "join the <br> <span>battle of the ancients</span>",
  },
  {
    id: 1,
    img: "../media/dota2.gif",
    header: "dota tournaments",
    info: "“A MODERN MULTIPLAYER MASTERPIECE”",
  },
];

const btGameShow = [
  {
    id: 1,
    img: "../media/pubg.jpg",
    header: "PUBG",
    info: "<span>free</span> to play",
  },
  {
    id: 0,
    img: "../media/warzoneposter.jpg",
    header: "call of duty warzone 2.0",
    info: "<span>free</span> to play",
  },
];

const dotaCardWrapper = document.querySelector(".dota-wrapper");
const battleRoyals = document.querySelector(".BT-wrapper");

const renderDota = dotaShow
  .map((card) => {
    return `<div class="dota-card">
            <div class="dota-image">
              <img src="${card.img}" alt="">
            </div>
            <div class="dota-content">
              <h1 class="dota-header">${card.header}</h1>
              <p class="dota-info">${card.info}</p>
            </div>
          </div>`;
  })
  .join("");

dotaCardWrapper.innerHTML = renderDota;



const renderBattleRoyal = btGameShow
  .map((card) => {
    return `<div class="btGames-card">
            <div class="btGames-image">
              <img src="${card.img}" alt="">
            </div>
            <div class="btGames-content">
              <h1 class="btGames-header">${card.header}</h1>
              <p class="btGames-info">${card.info}</p>
            </div>
          </div>`;
  })
  .join("");

battleRoyals.innerHTML = renderBattleRoyal;

const dotaCard = document.querySelectorAll(".dota-card");
const btGamesCard = document.querySelectorAll(".btGames-card");

let dotaCounter = 0;

function dotaSlider() {
  setTimeout(dotaSlider, 5500);
  if (dotaCounter === dotaCard.length) {
    dotaCounter = 0;
  }
  if (dotaCounter < 0) {
    dotaCounter = dotaCard.length - 1;
  }
  dotaCard.forEach((dotaItem) => {
    dotaItem.style.transform = `translateX(-${dotaCounter * 100}%)`;
  });
  btGamesCard.forEach((btItem) => {
    btItem.style.transform = `translateX(-${dotaCounter * 100}%)`;
  });
  dotaCounter++;
}
dotaSlider();

/* icon section */
const icons = [
  {
    id: 1,
    header: "play",
    img: "../media/icon-joystick.png",
  },
  {
    id: 0,
    header: "connect",
    img: "../media/icon-headset.png",
  },
  {
    id: 2,
    header: "enjoy",
    img: "../media/icon-vr.png",
  },
];

const iconContainer = document.querySelector(".icons-container");

const renderIcons = icons.map(pic => {
  return `<div class="iconBox">
            <div class="icon-img">
              <img src="${pic.img}" alt="">
            </div>
            <div class="icon-header">
              <h1>${pic.header}</h1>
            </div>
          </div>`
}).join("");

iconContainer.innerHTML = renderIcons;

/* games section */
const games = [
  {
    id: 0,
    name: "red dead redemption 2",
    year: 2018,
    category: "openworld",
    category: "adventure",
    img: "../media/coverrdr2.jpg",
    link: "../rdr2.html",
  },
  {
    id: 1,
    name: "assassin's creed odyssey",
    year: 2018,
    category: "openworld",
    category: "fighting",
    category: "adventure",
    img: "../media/coverodyssey.jpg",
    link: "",
  },
  {
    id: 2,
    name: "assassin's creed origins",
    year: 2017,
    category: "openworld",
    img: "../media/coverorigins.jpg",
    link: "",
  },
  {
    id: 3,
    name: "control",
    year: 2019,
    category: "adventure",
    img: "../media/covercontrol.jpg",
    link: "",
  },
  {
    id: 4,
    name: "detroit: become human",
    year: 2018,
    category: "adventure",
    img: "../media/covertdetroit.jpg",
    link: "",
  },
  {
    id: 5,
    name: "ghost of tsushima",
    year: 2020,
    category: "adventure",
    category: "fighting",
    img: "../media/covertsushima.jfif",
    link: "",
  },
  {
    id: 6,
    name: "grand theft auto V",
    year: 2013,
    category: "openworld",
    img: "../media/covergtaV.jpg",
    link: "",
  },
  {
    id: 7,
    name: "horizon zero dawn",
    year: 2017,
    category: "open world",
    category: "adventure",
    img: "../media/coverhorizon.jpg",
    link: "",
  },
  {
    id: 8,
    name: "last of us: part 2",
    year: 2020,
    category: "adventure",
    category: "survival",
    category: "horror",
    img: "../media/covertlou2.png",
    link: "",
  },
  {
    id: 9,
    name: "Star Wars Jedi: Fallen Order",
    year: 2019,
    category: "adventure",
    img: "../media/coverjedi.jpeg",
    link: "",
  },
  {
    id: 10,
    name: "cyberpunk 2077",
    year: 2020,
    category: "adventure",
    category: "shooter",
    img: "../media/coverpunk.jpg",
    link: "",
  },
  {
    id: 11,
    name: "stray",
    year: 2022,
    category: "adventure",
    category: "simulator",
    img: "../media/coverstray.png",
    link: "",
  },
  {
    id: 12,
    name: "batman: arkham knight",
    year: 2015,
    category: "adventure",
    category: "fighting",
    img: "../media/coverbatman.jpg",
    link: "",
  },
  {
    id: 13,
    name: "assassin's creed valhalla",
    year: 2020,
    category: "open world",
    category: "adventure",
    category: "fighting",
    img: "../media/covervalhalla.png",
    link: "",
  },
  {
    id: 14,
    name: "battlefield 5",
    year: 2018,
    category: "shooter",
    img: "../media/coverbattlefield5.jpg",
    link: "",
  },
  {
    id: 15,
    name: "god of war ragnarok",
    year: 2022,
    category: "adventure",
    category: "fighting",
    img: "../media/coverragnarok.jpg",
    link: "",
  },
  {
    id: 16,
    name: "elden ring",
    year: 2022,
    category: "open world",
    category: "fighting",
    img: "../media/coverelden.jpg",
    link: "",
  },
  {
    id: 17,
    name: "horizon zero dawn: forbidden west",
    year: 2020,
    category: "open world",
    category: "adventure",
    img: "../media/coverforbidden.jpg",
    link: "",
  },
  {
    id: 18,
    name: "need for speed: heat",
    year: 2019,
    category: "racing",
    category: "simulator",
    img: "../media/coverheat.jpg",
    link: "",
  },
  {
    id: 19,
    name: "Lego: marvel avengers",
    year: 2016,
    category: "adventure",
    category: "for kids",
    img: "../media/coveravengerslego.jfif",
    link: "",
  },
  {
    id: 20,
    name: "lego: harry potter",
    year: 2020,
    category: "adventure",
    category: "for kids",
    img: "../media/legopotter.jpg",
    link: "",
  },
  {
    id: 21,
    name: "forza horizon 5",
    year: 2021,
    category: "racing",
    category: "simulator",
    img: "../media/coverforza5.jpg",
    link: "",
  },
  {
    id: 22,
    name: "sekiro: shadows die twice",
    year: 2019,
    category: "adventure",
    category: "fighting",
    img: "../media/coversekiro.jpg",
    link: "",
  },
  {
    id: 23,
    name: "ufc 4",
    year: 2020,
    category: "fighting",
    category: "simulator",
    img: "../media/coverufc4.jfif",
    link: "",
  },
  {
    id: 24,
    name: "the witcher: wild hunt",
    year: 2015,
    category: "open world",
    category: "adventure",
    category: "fighting",
    img: "../media/coverwitcher3.jpg",
    link: "",
  },
  {
    id: 25,
    name: "spider-man",
    year: 2018,
    category: "open world",
    category: "adventure",
    img: "../media/coverspiderman.jpg",
    link: "",
  },
  {
    id: 26,
    name: "the crew 2",
    year: 2018,
    category: "open world",
    category: "racing",
    category: "simulator",
    img: "../media/covercrew2.jpg",
    link: "",
  },
  {
    id: 27,
    name: "far cry 5",
    year: 2018,
    category: "open world",
    category: "adventure",
    img: "../media/coverfarcry5.jpg",
    link: "",
  },
  {
    id: 28,
    name: "far crt: primal",
    year: 2016,
    category: "open world",
    category: "adventure",
    img: "../media/coverprimal.jpg",
    link: "",
  },
  {
    id: 29,
    name: "a plague tale: innocence",
    year: 2019,
    category: "adventure",
    category: "survival",
    img: "../media/covertale.jpg",
    link: "",
  },
  {
    id: 30,
    name: "mortal kombat 11",
    year: 2019,
    category: "fighting",
    img: "../media/covermk11.jpg",
    link: "",
  },
  {
    id: 31,
    name: "a plague tale: requiem ",
    year: 2022,
    category: "adventure",
    category: "survival",
    img: "../media/coverrequiem.jpg",
    link: "",
  },
  {
    id: 32,
    name: "hitman 3",
    year: 2021,
    category: "shooter",
    category: "adventure",
    img: "../media/coverhitman3.jpg",
    link: "",
  },
  {
    id: 33,
    name: "resident evil: village",
    year: 2021,
    category: "advanture",
    category: "horror",
    img: "../media/covervillage.jpg",
    link: "",
  },
  {
    id: 34,
    name: "death stranding",
    year: 2019,
    category: "adventure",
    category: "shooter",
    img: "../media/coverstranding.jpg",
    link: "",
  },
  {
    id: 35,
    name: "mafia devinitive edition",
    year: 2020,
    category: "open world",
    category: "shooter",
    category: "adventure",
    img: "../media/covermafia.jpg",
    link: "",
  },
  {
    id: 36,
    name: "call of duty: modern warfare",
    year: 2019,
    category: "shooter",
    category: "adventure",
    img: "../media/covercod.jpg",
    link: "",
  },
  {
    id: 37,
    name: "uncharted 4: a thiefs end",
    year: 2020,
    category: "adventure",
    category: "shooter",
    img: "../media/coveruncharted4.jpg",
    link: "",
  },
  {
    id: 38,
    name: "fifa 23",
    year: 2022,
    category: "simulator",
    category: "sport",
    img: "../media/coverfifa23.jpg",
    link: "",
  },
  {
    id: 39,
    name: "hellblade: senua's sacrifice",
    year: 2017,
    category: "adventure",
    category: "horror",
    category: "fighting",
    img: "../media/coverhellblade.jpg",
    link: "",
  },
  {
    id: 40,
    name: "middle-earth: shadow of war",
    year: 2017,
    category: "open world",
    category: "adventure",
    category: "fighting",
    img: "../media/covershadow.jpeg",
    link: "",
  },
];

const cardContainer = document.querySelector(".game-cards-container");
const filterButtonsBox = document.querySelector(".filter-buttons-container");

window.addEventListener("DOMContentLoaded", function () {
  showProductItems(games);
  displayMenuButtons();
});

function showProductItems(menuItems) {
  let showGames = menuItems
    .map((product) => {
      return `<div class="game-card">
            <div class="game-card-image-container">
                <img src="${product.img}" alt="">
            </div>
            <div class="game-card-content">
            <a href="${product.link}">
                <h1>${product.name}</h1>
                <h2>${product.year}</h2>
                </a>
            </div>
        </div>`;
    })
    .join("");
  cardContainer.innerHTML = showGames;
}

function displayMenuButtons() {
  const categories = games.reduce(
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
      return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
    })
    .join("");
  filterButtonsBox.innerHTML = categoryBtns;

  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const productCategory = games.filter(function (productItem) {
        if (productItem.category === category) {
          return productItem;
        }
      });
      if (category === "all") {
        showProductItems(games);
      } else {
        showProductItems(productCategory);
      }
    });
  });
}

/* search function for games */
const search = () => {
  const searchBox = document.getElementById("search-item").value.toUpperCase();
  const storeItems = document.getElementById("game-cards");
  const games = document.querySelectorAll(".game-card");
  const gameName = storeItems.getElementsByTagName("h1"); 

  for (let i = 0; i < gameName.length; i++) {
    let match = games[i].getElementsByTagName('h1')[0];
    if (match) {
      let textValue = match.textContent || match.innerHTML;
      if (textValue.toUpperCase().indexOf(searchBox) > -1) {
        games[i].style.display = "";
      } else {
        games[i].style.display = "none";
      }
    }
  }
}

/* load more */
const featureBtn = document.querySelector(".feature-more-btn");

let currentCard = 10;

featureBtn.addEventListener("click", function () {
  const gamesLoad = document.querySelectorAll(".game-card")
  for (let i = currentCard; i < currentCard + 20; i++) {
    if (gamesLoad[i]) {
      gamesLoad[i].style.display = "block";
    }
  }
  currentCard += 20;
  if (currentCard >= gamesLoad.length) {
    event.target.style.display = "none";
  }
});

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
