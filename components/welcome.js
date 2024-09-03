function welcome() {
  const welcome = document.createElement("div");
  welcome.innerHTML = `
    <div class="welcome">
      <div class="titulos">
        <div class="title"></div>
        <div class="title--2"></div>
      </div>
      <div class="imagenes">
        <img src="" class="cohete" alt="">
        <img src="" class="sombra" alt="">
      </div>
    </div>
  `;

  const container = document.querySelector(".welcome--contenedor");
  container.insertBefore(welcome, container.firstChild);
}
