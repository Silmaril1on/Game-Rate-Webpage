const ratings = [
  {
    id: 0,
    img: "../media/steamlogo.png",
    link: "https://store.steampowered.com/agecheck/app/1174180/",
    header: "steam 9/10",
  },
  {
    id: 1,
    img: "../media/metacritics.png",
    link: "https://www.metacritic.com/game/playstation-4/red-dead-redemption-2",
    header: "metacritics 97%",
  },
  {
    id: 2,
    img: "../media/ign.png",
    link: "https://www.ign.com/games/red-dead-redemption-2",
    header: "ign 10/10",
  },
];

const ratingsContainer = document.querySelector(".ratings");

const renderRatings = ratings
  .map((item) => {
    return ` <a href="${item.link}"> <img src="${item.img}" alt=""><h1>${item.header}</h1></a>`;
  })
  .join("");

ratingsContainer.innerHTML = renderRatings;


const characters = [
  {
    id: 0,
    img: "../media/rdr2-marston.jpg",
  },
  {
    id: 1,
    img: "../media/rdr2-morgan.jpg",
  },
  {
    id: 2,
    img: "../media/rdr2-abigail.jpg",
  },
  {
    id: 3,
    img: "../media/rdr2-adler.jpg",
  },
  {
    id: 4,
    img: "../media/rdr2-dutch.jpg",
  },
  {
    id: 5,
    img: "../media/rdr2-bell.jpg",
  },
  {
    id: 6,
    img: "../media/rdr2-mettews.jpg",
  },
  {
    id: 7,
    img: "../media/rdr2-williamson.jpg",
  },
  {
    id: 8,
    img: "../media/rdr2-escuella.jpg",
  },
  {
    id: 9,
    img: "../media/rdr2-tilly.jpg",
  },
];

const slider = document.querySelector(".character-slider");

const renderCharacters = characters.map((person) => {
  return `<div class="rdr-slider">
            <img src="${person.img}" alt="">
            </div>`;
}).join("");

slider.innerHTML = renderCharacters;

const characterThumb = [
  {
    id: 0,
    img: "../media/rdr2-marston.jpg",
  },
  {
    id: 1,
    img: "../media/rdr2-morgan.jpg",
  },
  {
    id: 2,
    img: "../media/rdr2-abigail.jpg",
  },
  {
    id: 3,
    img: "../media/rdr2-adler.jpg",
  },
  {
    id: 4,
    img: "../media/rdr2-dutch.jpg",
  },
  {
    id: 5,
    img: "../media/rdr2-bell.jpg",
  },
  {
    id: 6,
    img: "../media/rdr2-mettews.jpg",
  },
  {
    id: 7,
    img: "../media/rdr2-williamson.jpg",
  },
  {
    id: 8,
    img: "../media/rdr2-escuella.jpg",
  },
  {
    id: 9,
    img: "../media/rdr2-tilly.jpg",
  },
];

const thumbNail = document.querySelector(".character-thumb");

const rednerThumbnail = characterThumb.map((thumb) => {
  return `<div class="rdr-thumbnail">
            <img src="${thumb.img}" alt="" onclick="currentSlide(${thumb.id})">
            </div>`;
}).join("");

thumbNail.innerHTML = rednerThumbnail;

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.querySelectorAll(".rdr-slider");

  if (n > slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

/* achievments */
const achievements = [
  {
    id: 0,
    img: "../media/rdr2/trophy-itsart.jpg",
    name: "It's Art",
    info: "Find a permanent home for the squirrel statue",
    logo: "../media/bronze.webp",
  },
  {
    id: 1,
    img: "../media/rdr2/trophy-payingrespects.jpg",
    name: "Paying Respects",
    info: "Find the graves of each of your fallen companions",
    logo: "../media/bronze.webp",
  },
  {
    id: 2,
    img: "../media/rdr2/trophy-anewjerusalem.jpg",
    name: "Cowboy Builder",
    info: "Complete 'A New Jerusalem'",
    logo: "../media/bronze.webp",
  },
  {
    id: 3,
    img: "../media/rdr2/trophy-justascratch.jpg",
    name: "Just a Scratch",
    info: "Complete 'Enter, Pursued by a Memory'",
    logo: "../media/bronze.webp",
  },
  {
    id: 4,
    img: "../media/rdr2/trophy-thirdtimelucky.jpg",
    name: "Third Time Lucky",
    info: "Complete 'Goodbye, Dear Friend'",
    logo: "../media/bronze.webp",
  },
  {
    id: 5,
    img: "../media/rdr2/trophy-backinthemud.jpg",
    name: "Back in the Mud",
    info: "Complete Chapter 1",
    logo: "../media/bronze.webp",
  },
  {
    id: 6,
    img: "../media/rdr2/trophy-ToGreenerPastures.jpg",
    name: "To Greener Pastures",
    info: "Complete Chapter 2",
    logo: "../media/bronze.webp",
  },
  {
    id: 7,
    img: "../media/rdr2/trophy-SettlingFeuds.jpg",
    name: "Settling Feuds",
    info: "Complete Chapter 3",
    logo: "../media/bronze.webp",
  },
  {
    id: 8,
    img: "../media/rdr2/trophy-WashedAshore.jpg",
    name: "Washed Ashore",
    info: "Complete Chapter 4",
    logo: "../media/bronze.webp",
  },
  {
    id: 9,
    img: "../media/rdr2/trophy-NoTraitors.jpg",
    name: "No Traitors",
    info: "Complete Chapter 5",
    logo: "../media/bronze.webp",
  },
  {
    id: 10,
    img: "../media/rdr2/trophy-RedemptionTrophy.jpg",
    name: "Redemption",
    info: "Complete 'Red Dead Redemption'",
    logo: "../media/silver.webp",
  },
  {
    id: 3,
    img: "../media/rdr2/trophy-EndlessSummer.jpg",
    name: "Endless Summer",
    info: "Complete the Epilogue",
    logo: "../media/gold.webp",
  },
  {
    id: 11,
    img: "../media/rdr2/trophy-GoldRushTrophy.jpg",
    name: "Gold Rush",
    info: "Earn 70 Gold Medals in Story missions",
    logo: "../media/silver.webp",
  },
  {
    id: 12,
    img: "../media/rdr2/trophy-ArtificialIntelligence.jpg",
    name: "Artificial Intelligence",
    info: "Discover the fate of Marko Dragic",
    logo: "../media/bronze.webp",
  },
  {
    id: 13,
    img: "../media/rdr2/trophy-LendingaHand.jpg",
    name: "Lending a Hand",
    info: "Complete all optional Honor story missions",
    logo: "../media/silver.webp",
  },
  {
    id: 14,
    img: "../media/rdr2/trophy-FriendswithBenefits.jpg",
    name: "Friends With Benefits",
    info: "Complete a Companion Activity in each camp",
    logo: "../media/bronze.webp",
  },
  {
    id: 15,
    img: "../media/rdr2/trophy-WesternStranger.jpg",
    name: "Western Stranger",
    info: "Complete 10 Stranger mission strands",
    logo: "../media/bronze.webp",
  },
  {
    id: 16,
    img: "../media/rdr2/trophy-Bountiful.jpg",
    name: "Bountiful",
    info: "Survive 3 days holding a bounty of $250 in all states",
    logo: "../media/bronze.webp",
  },
  {
    id: 17,
    img: "../media/rdr2/trophy-BreakingandEntering.jpg",
    name: "Breaking and Entering",
    info: "Recover the stash from 4 homesteads",
    logo: "../media/bronze.webp",
  },
  {
    id: 18,
    img: "../media/rdr2/trophy-ErrandBoy.jpg",
    name: "Errand Boy",
    info: "Deliver 5 camp companion item requests",
    logo: "../media/bronze.webp",
  },
  {
    id: 19,
    img: "../media/rdr2/trophy-ExtremePersonality.jpg",
    name: "Extreme Personality",
    info: "Reach maximum or minimum Honor level",
    logo: "../media/bronze.webp",
  },
  {
    id: 3,
    img: "../media/rdr2/trophy-GivetothePoor.jpg",
    name: "Give to the Poor",
    info: "Donate $250 to the gang tithing box",
    logo: "../media/bronze.webp",
  },
  {
    id: 20,
    img: "../media/rdr2/trophy-GrinandBearIt.jpg",
    name: "Grin and Bear it",
    info: "Survive 18 bear attacks and kill the bear each time in Story Mode",
    logo: "../media/bronze.webp",
  },
  {
    id: 21,
    img: "../media/rdr2/trophy-HobbyHorse.jpg",
    name: "Hobby Horse",
    info: "Play all mini games",
    logo: "../media/bronze.webp",
  },
  {
    id: 22,
    img: "../media/rdr2/trophy-ItwasTHISBig.jpg",
    name: "It was THIS Big!",
    info: "Catch a fish weighing at least 16 lbs (7.3 kg)",
    logo: "../media/bronze.webp",
  },
  {
    id: 23,
    img: "../media/rdr2/trophy-LockedandLoaded.jpg",
    name: "Locked and Loaded	",
    info: "Upgrade each available component for a single sidearm or longarm weapon",
    logo: "../media/bronze.webp",
  },
  {
    id: 24,
    img: "../media/rdr2/trophy-PonyUp.jpg",
    name: "Pony Up",
    info: "Spend $5000 across all shops",
    logo: "../media/bronze.webp",
  },
  {
    id: 25,
    img: "../media/rdr2/trophy-SelfSufficient.jpg",
    name: "Self Sufficient",
    info: "Craft 30 unique items in Story Mode",
    logo: "../media/bronze.webp",
  },
  {
    id: 26,
    img: "../media/rdr2/trophy-SkinDeep.jpg",
    name: "Skin Deep",
    info: "Skin every species of animal in Story Mode",
    logo: "../media/bronze.webp",
  },
  {
    id: 27,
    img: "../media/rdr2/trophy-TakefromtheRich.jpg",
    name: "Take From the Rich",
    info: "Rob or loot $250",
    logo: "../media/bronze.webp",
  },
  {
    id: 28,
    img: "../media/rdr2/trophy-TrustySteed.jpg",
    name: "Trusty Steed",
    info: "Reach max bonding level with a horse",
    logo: "../media/bronze.webp",
  },
  {
    id: 29,
    img: "../media/rdr2/trophy-Zooloogist.jpg",
    name: "Zoologist",
    info: "Study every animal across all states in Story Mode",
    logo: "../media/bronze.webp",
  },
  {
    id: 30,
    img: "../media/rdr2/trophy-CollectorsItem.jpg",
    name: "Collector's Item",
    info: "Complete one of the Collectible strands",
    logo: "../media/silver.webp",
  },
  {
    id: 31,
    img: "../media/rdr2/trophy-BestintheWest.jpg",
    name: "Best in the West",
    info: "Attain 100% completion",
    logo: "../media/gold.webp",
  },
  {
    id: 32,
    img: "../media/rdr2/trophy-LegendoftheWestII.jpg",
    name: "Collector's Item",
    info: "Complete one of the Collectible strands",
    logo: "../media/silver.webp",
  },
  {
    id: 33,
    img: "../media/rdr2/trophy-LegendoftheWestII.jpg",
    name: "Legend of the West",
    info: "Awarde when all other trophies have been unlocked",
    logo: "../media/platinum.webp",
  },
  {
    id: 34,
    img: "../media/rdr2/trophy-AllsFair.jpg",
    name: "All's Fair",
    info: "Successfully counter a rival Posse's Free roam mission",
    logo: "../media/bronze.webp",
  },
  {
    id: 35,
    img: "../media/rdr2/trophy-Breakout.jpg",
    name: "Breakout",
    info: "Complete the Intro",
    logo: "../media/bronze.webp",
  },
  {
    id: 36,
    img: "../media/rdr2/trophy-BuckleUp.jpg",
    name: "Buckle Up",
    info: "Achieve 5 gold belt buckles from awards",
    logo: "../media/bronze.webp",
  },
  {
    id: 37,
    img: "../media/rdr2/trophy-Butchered.jpg",
    name: "Butchered",
    info: "Sell 20 items to the Butcher",
    logo: "../media/bronze.webp",
  },
  {
    id: 38,
    img: "../media/rdr2/trophy-Eventful.jpg",
    name: "Eventful",
    info: "Play 5 Free Roam Events",
    logo: "../media/bronze.webp",
  },
  {
    id: 39,
    img: "../media/rdr2/trophy-GettingStarted.jpg",
    name: "Getting Started",
    info: "Reach Rank 10",
    logo: "../media/bronze.webp",
  },
  {
    id: 40,
    img: "../media/rdr2/trophy-GunforHire.jpg",
    name: "Gun For Hire",
    info: "Accept 10 Free Roam missions from characters around the world",
    logo: "../media/bronze.webp",
  },
  {
    id: 41,
    img: "../media/rdr2/trophy-HomeComforts.jpg",
    name: "Home Comforts",
    info: "Purchase 5 camp improvements",
    logo: "../media/bronze.webp",
  },
  {
    id: 42,
    img: "../media/rdr2/trophy-HorsesforCourses.jpg",
    name: "Horses for Courses",
    info: "Concurrently own 5 horses",
    logo: "../media/bronze.webp",
  },
  {
    id: 43,
    img: "../media/rdr2/trophy-MasterCraftsman.jpg",
    name: "Master Craftsman",
    info: "Craft 20 items (excluding ammo",
    logo: "../media/bronze.webp",
  },
  {
    id: 44,
    img: "../media/rdr2/trophy-NonRegulation.jpg",
    name: "Non-Regulation",
    info: "Craft 25 pieces of ammunition",
    logo: "../media/bronze.webp",
  },
  {
    id: 45,
    img: "../media/rdr2/trophy-Notorious.jpg",
    name: "Notorious",
    info: "Reach Rank 50",
    logo: "../media/gold.webp",
  },
  {
    id: 46,
    img: "../media/rdr2/trophy-PickedtoPerfection.jpg",
    name: "Picked to Perfection",
    info: "Pick 25 herbs",
    logo: "../media/bronze.webp",
  },
  {
    id: 47,
    img: "../media/rdr2/trophy-PosseUp.jpg",
    name: "Posse Up",
    info: "Form a Persistent Posse",
    logo: "../media/bronze.webp",
  },
  {
    id: 48,
    img: "../media/rdr2/trophy-StrengthinNumbers.jpg",
    name: "Strength in Numbers",
    info: "Complete a Free Roam mission as part of a Posse with at least 2 members",
    logo: "../media/bronze.webp",
  },
  {
    id: 49,
    img: "../media/rdr2/trophy-SeriesMajor.jpg",
    name: "Series Major",
    info: "Take part in a Series",
    logo: "../media/bronze.webp",
  },
  {
    id: 50,
    img: "../media/rdr2/trophy-TheRealDeal.jpg",
    name: "The Real Deal",
    info: "Achieve MVP 3 times (in a round with at least 4 players)",
    logo: "../media/bronze.webp",
  },
];

const trophiesContainer = document.querySelector(".trophies-container");

const renderTrophies = achievements.map((item) => {
  return `<div class="trophy-card">
            <div class="img-cont">
              <img src="${item.img}" alt="">
            </div>
            <div class="trophy-info">
               <h1>${item.name}</h1>
               <p>${item.info}</p>
            </div>
            <div class="trophy">
              <img src="${item.logo}" alt="">
            </div>
          </div>`;
}).join("");

trophiesContainer.innerHTML = renderTrophies;


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