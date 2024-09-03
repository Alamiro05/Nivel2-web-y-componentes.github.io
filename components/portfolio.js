function portfoliotext() {
  const portfoliotext = document.createElement("div");
  portfoliotext.innerHTML = `
    <div  class="services">
        <h1 id="services" class="services--title">Mis <span class="services--title--span">servicios</span></h1>
        <div class="services--container">
            <div class="services--item">
                <img src="./imagenes/game.png" class="img" alt="">
                <div class="portfolio--item--title--1">Game Landing Page</div>
                <div class="portfolio--item--text--1">The redesign of the Lost in Random game website was an exciting challenge for our design team, who are avid fans of gaming themselves.</div>
            </div>
            <div  class="services--item">
                <img src="./imagenes/agencia.png" class="portfolio--item--img--2" alt="">
                <div class="portfolio--item--title--1">Agency Landing Page</div>
                <div class="portfolio--item--text--1">The redesign of the Lost in Random game website was an exciting challenge for our design team, who are avid fans of gaming themselves.</div>
            </div>
            <div class="services--item">
                <img src="./imagenes/finance.png" class="portfolio--item--img--3" alt="">
                <div class="portfolio--item--title--1">Finance Landing Page</div>
                <div class="portfolio--item--text--1">PlusBank is a decentralized P2P platform for trading crypto-assets. You can buy or sell cryptocurrency by making transactions with other users.</div>
            </div>
        </div>
    </div>
`;

  const a = document.querySelector(".portfolio--text");
  a.insertBefore(portfoliotext, a.firstChild);
}
