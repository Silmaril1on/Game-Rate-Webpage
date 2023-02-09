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
