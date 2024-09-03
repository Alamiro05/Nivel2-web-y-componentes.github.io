function formulario() {
  const formulario = document.createElement("div");
  formulario.innerHTML = `
    <div class="contact-form">
        <h1 class="contact-form--title">Escribime</h1>
        <form class="contact-form--container">
            <div class="contact-form--input-group">
                <label for="name">Nombre</label>
                <input type="text" id="name" placeholder="Tu nombre">
            </div>
            <div class="contact-form--input-group">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="tu@mail.com">
            </div>
            <div class="contact-form--input-group full-width">
                <label for="message">Mensaje</label>
                <textarea id="message" placeholder="Tu mensaje"></textarea>
            </div>
            <button type="submit" class="contact-form--submit">Enviar <span><img src="./imagenes/send.png" class="contact-form--submit--img" alt=""></span></button>
        </form>
    </div>
    `;

  const container = document.querySelector(".contact--form");
  container.insertBefore(formulario, container.firstChild);
}
