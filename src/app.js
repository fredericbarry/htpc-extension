import data from "../data/channels.json" assert { type: "json" };
import "./components/ChannelCard.component.js";

function populateGrid() {
    const { channels } = data;

    const cards = document.querySelector(".cards");
    cards.focus();

    channels.forEach(channel => {
        const { id, icon, name, url } = channel;

        const card = document.createElement("channel-card");
        card.setAttribute("id", id);
        card.setAttribute("icon", icon);
        card.setAttribute("name", name);
        card.setAttribute("url", url);

        cards.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", populateGrid);
