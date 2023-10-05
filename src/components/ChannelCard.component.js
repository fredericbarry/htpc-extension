class ChannelCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });

    const channelCard = document.createElement("a");
    channelCard.classList.add("channel-card");
    channelCard.href = this.getAttribute("url");
    channelCard.id = this.getAttribute("id");
    channelCard.role = "section";

    const image = document.createElement("img");
    image.alt = this.getAttribute("name");
    image.classList.add("channel-card__icon");
    image.height = "128";
    image.src = `../images/channels/${this.getAttribute("icon")}`;
    image.width = "128";
    channelCard.appendChild(image);

    const div = document.createElement("div");
    div.classList.add("channel-card__name");
    const text = document.createTextNode(this.getAttribute("name"));
    div.appendChild(text);
    channelCard.appendChild(div);

    const style = document.createElement("style");
    style.textContent = `
.channel-card {
    align-items: center;
    background-color: #444444;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0.5rem;
    padding: 1rem;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
}

.channel-card:hover {
    background-color: #505050;
    box-shadow: 0 0 10px rgb(182, 182, 182);
    transform: scale(1.025);
}

.channel-card__icon {
    border-radius: 50%;
}

.channel-card__name {
    color: #cccccc;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.25rem;
    padding-top: 1rem;
    text-align: center;
    width: 100%;
}
        `;

    /* @todo Add slots to the following code to replace the above channelCard definition */
    /*
    const template = document.createElement("template");
    template.innerHTML = `
<a class="channel-card" href="" id="" role="section">
    <img alt="" class="channel-card__icon" height="" src="" width="" />
    <div class="channel-card__name"></div>
</a>
        `;
    */

    this.shadowRoot.append(style, channelCard);
  }
}

if ("customElements" in window && !customElements.get("channel-card")) {
  customElements.define("channel-card", ChannelCard);
}
