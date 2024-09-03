const spaceId = "1rc01jxza4t5";
const accessToken = "DOUIV0a4otkaYf04pRP6o0N1R9OrtNoHa4J5cNW3rM4";
const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?access_token=${accessToken}`;

async function fetchData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error en la red");
    }

    const data = await response.json();
    updateContent(data);
  } catch (error) {
    console.error("Hubo un problema con la solicitud:", error);
  }
}

function updateContent(data) {
  const setTextContent = (selector, content) => {
    const element = document.querySelector(selector);
    if (element) {
      element.textContent = content;
    }
  };

  const setImageSrc = (selector, url) => {
    const imgElement = document.querySelector(selector);
    if (imgElement) {
      imgElement.src = url;
    }
  };

  setTextContent(".title", data.items[0].fields.title);
  setTextContent(".title--2", data.items[0].fields.title2);
  setTextContent(".title-service", data.items[0].fields.maletintext);
  setTextContent(".title-service--2", data.items[0].fields.maletintext2);
  setTextContent(".subtitle--1", data.items[0].fields.title2);
  setTextContent(".subtitle--2", data.items[0].fields.texto);
  setTextContent(
    ".services--item--title--1",
    data.items[1].fields.titleServices
  );
  setTextContent(
    ".services--item--text--1",
    data.items[1].fields.contentServices
  );
  setTextContent(
    ".services--item--title--2",
    data.items[2].fields.titleServices
  );
  setTextContent(
    ".services--item--text--2",
    data.items[2].fields.contentServices
  );
  setTextContent(
    ".services--item--title--3",
    data.items[3].fields.titleServices
  );
  setTextContent(
    ".services--item--text--3",
    data.items[3].fields.contentServices
  );

  setImageSrc(".cohete", data.includes.Asset[4].fields.file.url);
  setImageSrc(".sombra", data.includes.Asset[2].fields.file.url);
  setImageSrc(".quien--soy--img", data.includes.Asset[3].fields.file.url);
  setImageSrc(
    ".services--item--img--1",
    data.includes.Asset[1].fields.file.url
  );
  setImageSrc(
    ".services--item--img--2",
    data.includes.Asset[6].fields.file.url
  );
  setImageSrc(
    ".services--item--img--3",
    data.includes.Asset[0].fields.file.url
  );
  setImageSrc(".maletin", data.includes.Asset[5].fields.file.url);
  console.log(data.items[0].fields.maletintext);
}

fetchData();

function main() {
  const headerElement = document.querySelector(".header");
  if (headerElement) header(headerElement);

  const welcomeElement = document.querySelector(".welcome--contenedor");
  if (welcomeElement) welcome(welcomeElement);

  const welcomeserviceElement = document.querySelector(
    ".services--welcome--contenedor"
  );
  if (welcomeserviceElement) welcomeservice(welcomeserviceElement);

  const portfolioElement = document.querySelector(".portfolio--container");
  if (portfolioElement) portfolio(portfolioElement);

  const quienSoyElement = document.querySelector(".quien--soy--contenedor");
  if (quienSoyElement) info(quienSoyElement);

  const servicesElement = document.querySelector(".services--container");
  if (servicesElement) servicios(servicesElement);

  const portfoliotextElement = document.querySelector(".portfolio--text");
  if (portfoliotextElement) portfoliotext(portfoliotextElement);

  const formElement = document.querySelector(".contact--form");
  if (formElement) formulario(formElement);

  const footerElement = document.querySelector(".contenedor--footer");
  if (footerElement) footer(footerElement);
}
main();
