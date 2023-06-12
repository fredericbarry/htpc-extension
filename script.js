import apps from "/apps.js";

function populateGrid() {
  const cards = document.querySelector(".cards");
  cards.focus();

  apps.forEach((app) => {
    const { icon, link, name } = app;

    if (!icon || !link || !name) {
      return;
    }

    const aTag = document.createElement("a");
    aTag.classList.add("card");
    aTag.href = link;

    const imgTag = document.createElement("img");
    imgTag.alt = name;
    imgTag.classList.add("icon");
    imgTag.height = 128;
    imgTag.src = `/images/${icon}`;
    imgTag.width = 128;
    aTag.appendChild(imgTag);

    const divTag = document.createElement("div");
    divTag.classList.add("name");
    const text = document.createTextNode(name);
    divTag.appendChild(text);
    aTag.appendChild(divTag);

    cards.appendChild(aTag);
  });
};

document.addEventListener("DOMContentLoaded", populateGrid);
