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

const gameImage = document.querySelector(".content-img");
const gameHeader = document.querySelector(".content-header");
const gameInfo = document.querySelector(".content-info");
const next = document.getElementById("next");
const previous = document.getElementById("previous");

const mainContent = [
  {
    id: 0,
    img: "../media/mirage-mobile.jpg",
    desktopImg: "../media/mirage-desktop.jpg",
    name: "assassin's creed mirage",
    info: "Become the most versatile Assassin in franchise history. Coming in 2023. ",
  },
  {
    id: 1,
    img: "../media/jedimobile.jpg",
    desktopImg: "../media/jedidesktop.jpg",
    name: "STAR WARS Jedi Survivor",
    info: "STAR WARS Jedi: Survivor™, an epic new adventure that will push Cal further than ever as he fights to protect the galaxy from descending into darkness.",
  },
  {
    id: 2,
    img: "../media/skullandbones-mobile.jpg",
    desktopImg: "../media/skullandbones-desktop.jpg",
    name: "skull and bones",
    info: "Enter the perilous paradise of Skull and Bones™ as you overcome the odds and rise from an outcast to infamous pirate.",
  },
  {
    id: 3,
    img: "../media/hogwarts-mobile.jpg",
    desktopImg: "../media/hogwarts-desktop.jpg",
    name: "Hogwarts Legacy",
    info: "Experience the wizarding world in an unexplored era to uncover a hidden truth from its past. Battle against trolls, Dark Wizards, goblins, and more as you face a dangerous villain threatening the fate of the wizarding world. ",
  },
  {
    id: 4,
    img: "../media/diablo5-mobile.jpg",
    desktopImg: "../media/diablo5-desktop.png",
    name: "Diablo IV",
    info: "Explore Sanctuary-Discover the world of Sanctuary as you battle through its expansive lands. Join fellow adventurers, retake besieged towns. uncover lost secrets as you fight for the fate of the world.",
  },
];

let item = 0;

window.addEventListener("DOMContentLoaded", () => {
  showContent();
  query();
});

function query() {
  let desktop = window.matchMedia("(min-width: 650px)");
  const desktopCard = mainContent[item];
  if (desktop.matches) {
    gameImage.src = desktopCard.desktopImg;
  }
}

function showContent() {
  const card = mainContent[item];
  gameImage.src = card.img;
  gameHeader.textContent = card.name;
  gameInfo.textContent = card.info;
}

function nextContent() {
  item++;
  if (item > mainContent.length - 1) {
    item = 0;
  }
  showContent(item);
  query(item);
}

function prevContent() {
  item--;
  if (item < 0) {
    item = mainContent.length - 1;
  }
  showContent(item);
  query(item);
}

let colors = ["brown", "rgb(155, 110, 50)", "blue", "goldenrod"];

function changeColor() {
  const contentButton = document.querySelectorAll(".btn");
  contentButton.forEach((btn) => {
    let curCol = btn.style.backgroundColor;
    let curX = colors.indexOf(curCol);
    let nextX = (curX + 1) % colors.length;
    btn.style.backgroundColor = colors[nextX];
  });
}

/* game of the year section  */
const goty = [
  {
    id: 0,
    name: "elden ring",
    img: "../media/eldenring.jpg",
    developer: "FromSoftware Inc.",
    year: 2022,
  },
  {
    id: 1,
    name: "it takes two",
    img: "../media/ittakestwo.jpg",
    developer: "Hazelight Studios",
    year: 2021,
  },
  {
    id: 2,
    name: "the last of us: part 2",
    img: "../media/tlou2.jpg",
    developer: "Naughty Dog",
    year: 2020,
  },
  {
    id: 3,
    name: "sekiro: shadows die twice",
    img: "../media/sekiro.jpg",
    developer: "FromSoftware Inc.",
    year: 2019,
  },
  {
    id: 4,
    name: "god of war",
    img: "../media/godofwar.jpg",
    developer: "santa monica",
    year: 2018,
  },
  {
    id: 5,
    name: "Legend of Zelda:",
    img: "../media/zelda.jpg",
    developer: "Eiji Aonuma",
    year: 2017,
  },
  {
    id: 6,
    name: "overwatch",
    img: "../media/overwatch.jpg",
    developer: "Blizzard Entertainment",
    year: 2016,
  },
  {
    id: 7,
    name: "the witcher 3: wild hunt",
    img: "../media/witcher3.jpg",
    developer: "CD projekt",
    year: 2015,
  },
  {
    id: 8,
    name: "dragon age: inquisition",
    img: "../media/inquisition.jpg",
    developer: "BioWare",
    year: 2014,
  },
  {
    id: 9,
    name: "last of us",
    img: "../media/tlou1.jpg",
    developer: "Naughty Dog",
    year: 2013,
  },
  {
    id: 10,
    name: "dishonored",
    img: "../media/dishonored.jfif",
    developer: "arkane studios",
    year: 2012,
  },
  {
    id: 11,
    name: "portal 2",
    img: "../media/portal2.jpg",
    developer: "valve",
    year: 2011,
  },
  {
    id: 12,
    name: "Red Dead Redemption",
    img: "../media/rdr1.jpg",
    developer: "Rockstar",
    year: 2010,
  },
  {
    id: 13,
    name: "Uncharted 2: Among Thieves",
    img: "../media/uncharted2.jpg",
    developer: "Naughty Dog",
    year: 2009,
  },
  {
    id: 14,
    name: "Grand Theft Auto IV",
    img: "../media/gta4.jpg",
    developer: "Rockstar",
    year: 2008,
  },
  {
    id: 15,
    name: "BioShock",
    img: "../media/bioshock.jpg",
    developer: "2K Games",
    year: 2007,
  },
  {
    id: 16,
    name: "The Elder Scrolls IV",
    img: "../media/elderV.jpg",
    developer: "Bethesta Games",
    year: 2006,
  },
  {
    id: 17,
    name: "Resident Evil 4",
    img: "../media/re4.jpg",
    developer: "Capcom",
    year: 2005,
  },
];

const gotyContainer = document.querySelector(".goty-container");

const renderGotyCards = goty
  .map((card) => {
    return `<div class="goty-card">
            <div class="card-img-cont">
                <img src="${card.img}" class="image-card" alt="">
            </div>
            <div class="card-info">
                <h1 class="card-head">${card.name}</h1>
                <h2 class="card-dev">${card.developer}</h2>
                <h3 class="card-year">${card.year}</h3>
            </div>
            <div class="card-platform">
                <i class="fa-brands fa-playstation"></i>
                <i class="fa-brands fa-xbox"></i>
                <i class="fa-brands fa-windows"></i>
            </div>
        </div>`;
  })
  .join("");

gotyContainer.innerHTML = renderGotyCards;

const gotyCard = document.querySelectorAll(".goty-card");
const loadBtn = document.querySelector(".load-more-btn");

let currentimg = 4;

loadBtn.addEventListener("click", function () {
  for (let i = currentimg; i < currentimg + 4; i++) {
    if (gotyCard[i]) {
      gotyCard[i].style.display = "block";
    }
  }
  currentimg += 4;
  if (currentimg >= gotyCard.length) {
    event.target.style.display = "none";
  }
});

/* featured game section */

const featuredGames = [
  {
    id: 0,
    img: "../media/ragnarok-card.jpg",
    name: "god of war ragnarok",
    metacritics:
      "94% <a href='https://www.metacritic.com/game/playstation-5/god-of-war-ragnarok'>Metacritics</a> ",
    ign: "10/10 <a href='https://www.ign.com/games/god-of-war-ragnarok'> IGN </a>",
    opencritics:
      "93% <a href='https://opencritic.com/game/12919/god-of-war-ragnar-k'>OpenCritic</a>",
  },
  {
    id: 1,
    img: "../media/eldenring-card.jpg",
    name: "elden ring",
    metacritics:
      "94% <a href='https://www.metacritic.com/game/pc/elden-ring'>Metacritics</a> ",
    ign: "10/10 <a href='https://www.ign.com/articles/elden-ring-review'> IGN </a>",
    opencritics:
      "95% <a href='https://opencritic.com/game/12090/elden-ring/reviews'>OpenCritic</a>",
    steam: "9/10 <",
  },
  {
    id: 2,
    img: "../media/forbidenwest.jpg",
    name: "horizon zero dawn: forbidden west",
    metacritics:
      "88% <a href='https://www.metacritic.com/game/playstation-5/horizon-forbidden-west'>Metacritics</a> ",
    ign: "9/10 <a href='https://www.ign.com/articles/horizon-forbidden-west-review'> IGN </a>",
    opencritics:
      "5/5 <a href='https://opencritic.com/game/12361/horizon-forbidden-west'>Sense Media</a>",
  },
  {
    id: 3,
    img: "../media/grandturismo7.jpg",
    name: "grand turismo 7",
    metacritics:
      "87% <a href='https://www.metacritic.com/game/playstation-5/gran-turismo-7'>Metacritics</a> ",
    ign: "9/10 <a href='https://www.ign.com/articles/gran-turismo-7-review'> IGN </a>",
    opencritics:
      "87% <a href='https://opencritic.com/game/12715/gran-turismo-7'>OpenCritic</a>",
  },
  {
    id: 4,
    img: "../media/stray.jpg",
    name: "stray",
    metacritics:
      "83% <a href='https://www.metacritic.com/game/playstation-5/stray'>Metacritics</a> ",
    ign: "8/10 <a href='https://www.ign.com/articles/stray-review'> IGN </a>",
    opencritics:
      "84% <a href='https://opencritic.com/game/13386/stray'>OpenCritic</a>",
  },
  {
    id: 5,
    img: "../media/rdr.png",
    name: "red dead redemption 2",
    metacritics:
      "97% <a href='https://www.metacritic.com/game/playstation-4/red-dead-redemption-2'>Metacritics</a> ",
    ign: "10/10 <a href='https://www.ign.com/articles/2018/10/25/red-dead-redemption-2-review'> IGN </a>",
    opencritics:
      "96% <a href='https://opencritic.com/game/3717/red-dead-redemption-2'>OpenCritic</a>",
  },
  {
    id: 6,
    img: "../media/tsushima.jpg",
    name: "ghost of tsushima",
    metacritics:
      "83% <a href='https://www.metacritic.com/game/playstation-4/ghost-of-tsushima'>Metacritics</a> ",
    ign: "9/10 <a href='https://www.ign.com/games/ghost-of-tsushima'> IGN </a>",
    opencritics:
      "5/5 <a href='https://www.commonsensemedia.org/game-reviews/ghost-of-tsushima-directors-cut/user-reviews/adult'>Sense Media</a>",
  },
  {
    id: 7,
    img: "../media/valhalla.jpg",
    name: "assassin's creed valhalla",
    metacritics:
      "82% <a href='https://www.metacritic.com/game/pc/assassins-creed-valhalla'>Metacritics</a> ",
    ign: "8/10 <a href='https://www.ign.com/games/assassins-creed-valhalla'> IGN </a>",
    opencritics:
      "83% <a href='https://opencritic.com/game/9439/assassins-creed-valhalla'>open critics</a>",
  },
  {
    id: 8,
    img: "../media/grand5.jpeg",
    name: "Grand theft auto V",
    metacritics:
      "81% <a href='https://www.metacritic.com/game/playstation-5/grand-theft-auto-v'>Metacritics</a> ",
    ign: "10/10 <a href='https://www.ign.com/games/grand-theft-auto-v'> IGN </a>",
    opencritics:
      "92% <a href='https://opencritic.com/game/163/grand-theft-auto-v'>open critics</a>",
  },
  {
    id: 9,
    img: "../media/nfsheat.png",
    name: "need for speed: heat",
    metacritics:
      "72% <a href='https://www.metacritic.com/game/pc/death-stranding'>Metacritics</a> ",
    ign: "8/10 <a href='https://www.ign.com/games/need-for-speed-heat'> IGN </a>",
    opencritics:
      "72% <a href='https://opencritic.com/game/8182/need-for-speed-heat'>open critics</a>",
  },
  {
    id: 10,
    img: "../media/deathstranding.jpg",
    name: "death stranding",
    metacritics:
      "86% <a href='https://www.metacritic.com/game/playstation-5/grand-theft-auto-v'>Metacritics</a> ",
    ign: "6.8/10 <a href='https://www.ign.com/games/death-stranding'> IGN </a>",
    opencritics:
      "83% <a href='https://opencritic.com/game/7816/death-stranding'>open critics</a>",
  },
  {
    id: 10,
    img: "../media/ufc.jpg",
    name: "EA Sports UFC 4",
    metacritics:
      "78% <a href='https://www.metacritic.com/game/playstation-4/ea-sports-ufc-4'>Metacritics</a> ",
    ign: "8/10 <a href='https://www.ign.com/games/ea-sports-ufc-4'> IGN </a>",
    opencritics:
      "77% <a href='https://opencritic.com/game/9792/ea-sports-ufc-4'>open critics</a>",
  },
];

const featuredContainer = document.querySelector(".featured-games-container");

const renderFeaturedGames = featuredGames
  .map((games) => {
    return `    <div class="game-card">
            <div class="game-card-image-container">
                <img src="${games.img}" class="game-card-img" alt="">
            </div>
            <div class="game-card-content">
                <h1 class="game-card-header">${games.name}</h1>
            <div class="rating">
                <p>${games.metacritics}</p>
                <p>${games.opencritics}</p>
                <p>${games.ign}</p>
            </div>
            </div>
        </div>`;
  })
  .join("");

featuredContainer.innerHTML = renderFeaturedGames;

const gameCard = document.querySelectorAll(".game-card");
const featureBtn = document.querySelector(".feature-more-btn");

let currentCard = 4;

featureBtn.addEventListener("click", function () {
  for (let i = currentCard; i < currentCard + 4; i++) {
    if (gameCard[i]) {
      gameCard[i].style.display = "block";
    }
  }
  currentCard += 4;
  if (currentCard >= gameCard.length) {
    event.target.style.display = "none";
  }
});

/*platform cards */
const gamingPlatforms = [
  {
    id: 0,
    name: "playstation",
    img: "../media/playstation.jpg",
  },
  {
    id: 1,
    name: "XBox",
    img: "../media/xbox.jpg",
  },
  {
    id: 2,
    name: "steam",
    img: "../media/steam.jpg",
  },
  {
    id: 3,
    name: "EA Games",
    img: "../media/eagames.jpg",
  },
  {
    id: 4,
    name: "origin",
    img: "../media/origin.jpg",
  },
  {
    id: 5,
    name: "epic games",
    img: "../media/epicgames.jpg",
  },
  {
    id: 6,
    name: "uplay",
    img: "../media/ubisoft.png",
  },
];

const wrapper = document.querySelector(".swiper-wrapper");

const platform = gamingPlatforms
  .map((product) => {
    return `<div class="swiper-slide">
              <div class="swiper-card">
                <div class="swiper-img-cont">
                  <img src="${product.img}" alt="">
                </div>
                  <h1 class="platform-header">${product.name}</h1>
              </div>
          </div>`;
  })
  .join("");

wrapper.innerHTML = platform;

var swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 15,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/* developers section */
const developers = [
  {
    id: 0,
    img: "../media/activision.jpg",
    name: "Activision Blizzard",
    info: "Activision Blizzard, Inc. is an American video game holding company based in S.M, California. It was founded in July 2008 through the merger of Activision, Inc. It is traded on the Nasdaq stock exchange under the ticker symbol ATVI, and since 2015 has been a member of the S&P 500 Index.",
  },
  {
    id: 1,
    img: "../media/ubisoft.jpg",
    name: "ubisoft",
    info: "Ubisoft Entertainment SA is a French video game publisher headquartered in Saint-Mandé with development studios across the world. Its video game franchises include Assassin's Creed, Far Cry, For Honor, Just Dance, Prince of Persia, Rabbids, Rayman, Tom Clancy's, and Watch Dogs ",
  },
  {
    id: 2,
    img: "../media/ea.jpg",
    name: "EA games",
    info: "Electronic Arts Inc. is an American video game company headquartered in Redwood City, California. Founded in May 1982 by Apple employee Trip Hawkins, the company was a pioneer of the early home computer game industry and promoted the designers and programmers responsible for its games",
  },
  {
    id: 3,
    img: "../media/naughtydog.jpg",
    name: "Naughty Dog",
    info: "Naughty Dog, LLC is an American first-party video game developer based in Santa Monica, California. Founded by Andy Gavin and Jason Rubin in 1984, the studio was acquired by Sony Computer Entertainment in 2001. Company is known for LAST OF US series and many more.",
  },
  {
    id: 4,
    img: "../media/squareenix.jpg",
    name: "Square Enix",
    info: "Square Enix Holdings Co., Ltd. is a Japanese multinational holding company, production enterprise and entertainment conglomerate, best known for its Final Fantasy, Dragon Quest, Star Ocean and Kingdom Hearts role-playing video game franchises, among numerous others.",
  },
  {
    id: 5,
    img: "../media/cdproject.jpg",
    name: "CD Projekt RED",
    info: "CD Projekt S.A. is a Polish video game developer/distributor based in Warsaw, founded in May 1994 by Marcin Iwiński and Michał Kiciński. Iwiński and Kiciński were video game retailers before they founded the company, which initially acted as a distributor of foreign video games for the domestic market.",
  },
  {
    id: 6,
    img: "../media/rockstar.jpg",
    name: "rockstar",
    info: "Rockstar Games, Inc. is an American video game publisher based in New York City. The company was established in December 1998 as a subsidiary of Take-Two Interactive, using the assets Take-Two had previously acquired from BMG Interactive.",
  },
];

const devContainer = document.querySelector(".dev-dots-container");
const devImg = document.querySelector(".dev-img");
const devHeader = document.querySelector(".dev-head");
const devInfo = document.querySelector(".dev-info");

function showDevelopers(id) {
  const companies = developers[id];
  devImg.src = companies.img;
  devHeader.textContent = companies.name;
  devInfo.textContent = companies.info;
}

const toggleDevs = developers
  .map(function (developer) {
    return `<div class="dev-dot" onclick="showDevelopers(${developer.id})"></div>`;
  })
  .join("");

devContainer.innerHTML = toggleDevs;

/* consoles section */
const psContainer = document.querySelector(".playstation-container");
const xboxContainer = document.querySelector(".xbox-container");

const playstation = [
  {
    id: 0,
    img: "../media/ps5.jpg",
    name: "playstation 5",
    preName: "play has no limits",
    info: "The PS5 console unleashes new gaming possibilities that you never anticipated. Experience lightning fast loading with an ultra-high speed SSD.",
  },
  {
    id: 1,
    img: "../media/dualsense.jpg",
    name: "DualSense™ Wireless Controller ",
    preName: "Heighten Your Senses",
    info: "The DualSense wireless controller for PS5 offers immersive haptic feedback2, dynamic adaptive triggers2 and a built-in microphone, all integrated into an iconic design.",
  },
  {
    id: 2,
    img: "../media/controllers.jpeg",
    name: "Personalise your set-up",
    preName: "Choose your style",
    info: "Bring a fresh aesthetic into play with the colorful Camouflage DualSense wireless controllers, infused with unique patterns of the iconic PlayStation Shapes.",
  },
];
const xbox = [
  {
    id: 0,
    img: "../media/xbox.jpg",
    name: "Xbox Series X",
    preName: "most powerful Xbox ever",
    info: "The Xbox Series X delivers sensationally smooth frame rates of up to 120FPS with the visual pop of HDR. Immerse yourself with sharper characters, brighter worlds.",
  },
  {
    id: 1,
    img: "../media/xboxcontroler1.jpg",
    name: "Xbox Wireless Controller",
    preName: "Textured triggers and bumpers ",
    info: "xperience the modernized design of the Xbox Wireless Controller, featuring sculpted surfaces and refined geometry for enhanced comfort during gameplay.",
  },
  {
    id: 2,
    img: "../media/xboxtech.jpg",
    name: "xbox tech",
    preName: "every milli- <br> second matters",
    info: "Microsoft’s Xbox Series X represents the next generation of the game console, and it’ll (once again) the most powerful console in the market, as it packs amazing tech specs.",
  },
];

const playstationCard = playstation
  .map((console) => {
    return `<div class="playstation-card">
               <div class="console-image-container">
                  <img src="${console.img}" class="console-image" alt="">
                </div>
                <div class="console-content">
                <div class="console-headers">
                   <h1 class="console-head">${console.name}</h1>
                   <h2 class="console-prehead">${console.preName}</h2>
                </div>
                   <p class="console-info">${console.info}</p>
               </div>
           </div>`;
  })
  .join("");

psContainer.innerHTML = playstationCard;

const xboxCard = xbox.map((console) => {
    return `<div class="xbox-card">
               <div class="console-image-container">
                  <img src="${console.img}" class="console-image" alt="">
                </div>
                <div class="console-content">
                <div class="console-headers">
                   <h1 class="console-head">${console.name}</h1>
                   <h2 class="console-prehead">${console.preName}</h2>
                </div>
                   <p class="console-info">${console.info}</p>
               </div>
           </div>`;
  })
  .join("");

xboxContainer.innerHTML = xboxCard;

const playstationCards = document.querySelectorAll(".playstation-card");
const xboxCards = document.querySelectorAll(".xbox-card");
const consoleNextButton = document.querySelector(".next");
const consolePrevioustButton = document.querySelector(".previous");

let counter = 0;

consoleNextButton.addEventListener("click", () => {
  counter++;
  carousel();
});
consolePrevioustButton.addEventListener("click", () => {
  counter--;
  carousel();
});

function carousel() {
  if (counter === playstationCards.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = playstationCards.length - 1;
  }
  playstationCards.forEach(function (card) {
    card.style.transform = `translateX(-${counter * 100}%)`;
  });
  xboxCards.forEach(function (xCard) {
    xCard.style.transform = `translateX(-${counter * 100}%)`;
  });
}


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
