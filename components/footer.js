function footer(foot) {
  const footer = document.createElement("div");
  footer.innerHTML = `
      <footer>
          <a href="./index.html"><img src="./imagenes/logo.png" class="logo--footer" alt=""></a>
          <nav class="contactos">
              <a href="./index.html"><img src="./imagenes/home.png" class="contact" alt=""></a>
              <a href="servicios.html"><img src="./imagenes/servicios.png" class="contact" alt=""></a>
              <a href="./contacto.html"><img src="./imagenes/contacto.png" class="contact" alt=""></a>
          </nav>
          <div class="redes">
              <a href="https://www.instagram.com/alamirito/"><img src="./imagenes/instagram.png" class="redes--img" alt=""></a>
              <a href="https://github.com/Alamiro05"><img src="./imagenes/github.png" class="redes--img" alt=""></a>
              <a href="https://x.com/Alamiro05"><img src="./imagenes/twitter.png" class="redes--img" alt=""></a>
          </div>
          <a href="https://apx.school/" class="apx">©2022 - https://apx.school</a>
      </footer>
  `;
  foot.appendChild(footer);
}
