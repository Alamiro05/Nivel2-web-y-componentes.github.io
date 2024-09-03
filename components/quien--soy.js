function info() {
  const info = document.createElement("div");
  info.innerHTML = `
    <div class="quien--soy">
        <div class="subtitle">
            <div class="subtitle--1">
            </div>
            <div class="subtitle--2">
            </div>
        </div>
        <img src="" class="quien--soy--img" alt="">
    </div>
    `;

  const container = document.querySelector(".quien--soy--contenedor");
  container.insertBefore(info, container.firstChild);
}
