function portfolio() {
  const portfolio = document.createElement("div");
  portfolio.innerHTML = `
        <div class="welcome">
          <div class="titulos">
            <div class="titulo-portfolio">Mis</div>
            <div class="subtitulo-portfolio"> Proyectos</div>
          </div>
          <div class="imagenes">
            <img src="" class="maletin" alt="">
            <img src="" class="sombra" alt="">
          </div>
        </div>
      `;

  const container = document.querySelector(".portfolio--container");
  container.insertBefore(portfolio, container.firstChild);
}
