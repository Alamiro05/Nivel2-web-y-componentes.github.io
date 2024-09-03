function servicios() {
  const servicios = document.createElement("div");
  servicios.innerHTML = `
    <div  class="services">
        <h1 id="services" class="services--title">Mis <span class="services--title--span">servicios</span></h1>
        <div class="services--container">
            <div class="services--item">
                <img src="" class="services--item--img--1" alt="">
                <div class="services--item--title--1"></div>
                <div class="services--item--text--1"></div>
            </div>
            <div  class="services--item">
                <img src="" class="services--item--img--2" alt="">
                <div class="services--item--title--2"></div>
                <div class="services--item--text--2"></div>
            </div>
            <div class="services--item">
                <img src="" class="services--item--img--3" alt="">
                <div class="services--item--title--3"></div>
                <div class="services--item--text--3"></div>
            </div>
        </div>
    </div>
`;

  const a = document.querySelector(".services--container");
  a.insertBefore(servicios, a.firstChild);
}
