function header(head) {
  const header = document.createElement("div");
  header.innerHTML = ` 
  <header>
    <div >
      <a href="./index.html"><img src="./imagenes/logo.png" class="logo" alt=""></a>
    </div>
    <div class="menu-icon" id="menuIcon">&#9776;</div>
    <nav class="nav-large">
      <ul>
        <li class="li--menu--largo"><a href="./index.html">Home</a></li>
        <li class="li--menu--largo"><a href="./portfolio.html">Portfolio</a></li>
        <li class="li--menu--largo"><a href="./servicios.html">Servicios</a></li>
        <li class="li--menu--largo"><a href="./contacto.html">Contacto</a></li>
      </ul>
    </nav>
  </header>
  
  <nav class="full-screen-menu" id="fullScreenMenu">
    <div class="close-icon" id="closeIcon">&times;</div>
    <ul>
      <li class="li--menu--corto"><a href="./index.html">Home</a></li>
      <li class="li--menu--corto"><a href="./portfolio.html">Portfolio</a></li>
      <li class="li--menu--corto"><a href="./servicios.html">Servicios</a></li>
      <li class="li--menu--corto"><a href="./contacto.html">Contacto</a></li>
    </ul>
  </nav>
  `;

  head.appendChild(header);

  document.getElementById("menuIcon").addEventListener("click", function () {
    document.getElementById("fullScreenMenu").style.display = "block";
  });

  document.getElementById("closeIcon").addEventListener("click", function () {
    document.getElementById("fullScreenMenu").style.display = "none";
  });
}
