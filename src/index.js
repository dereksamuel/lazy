import { registerImage } from "./lazy";
import { monitor } from "./monitor";

const url = "https://randomfox.ca/images/";
const app = document.querySelector("#container");
const container = document.createElement("div");
const buttonImage = document.querySelector("#button");
const buttonImageRemove = document.querySelector("#remove");
const buttonImageRemoveOne = document.querySelector("#one");
const buttonDeleteFirst = document.getElementById("oneFirst");
export let appendedImages = 0;

function check() {
  container.childNodes.forEach((child) => {
    if (!child) {
      buttonDeleteFirst.setAttribute("disabled");
      buttonImageRemoveOne.setAttribute("disabled");
      buttonImageRemove.setAttribute("disabled");
      return;
    }
  })
}

function random() {
  return Math.floor(Math.random() * (122 - 1)) + 1;
}

function createImageNode() {
  const image = new Image();

  container.className = "p-9";
  container.style = `
    display: flex;
    flex-wrap: wrap;
  `;
  image.dataset.src = url + "/" + random() + ".jpg";
  image.style = `
    filter: blur(.5px);
    width: 339px;
    height: 285px;
    margin: 15px auto;
    object-fit: cover;
    transition: 1s;
  `;
  image.className = "bg-gray-300";
  appendedImages++;

  registerImage(image);
  container.append(image);
  app.append(container);
  monitor(appendedImages);
}

const cleanImages = () => {
  check();
  appendedImages = 0;
  monitor(appendedImages);
  [...container.childNodes].forEach(child => {
    child.remove();
  }) 
}

const cleanImage = () => {
  check();
  container.lastChild && appendedImages--;
  monitor(appendedImages);
  container.lastChild && container.lastChild.remove();
}

buttonDeleteFirst.addEventListener("click", () => {
  check();
  container.firstChild && appendedImages--;
  monitor(appendedImages);
  container.firstChild && container.firstChild.remove();
});

buttonImageRemove.addEventListener("click", cleanImages);

buttonImage.addEventListener("click", () => {
  buttonDeleteFirst.removeAttribute("disabled");
  buttonImageRemoveOne.removeAttribute("disabled");
  buttonImageRemove.removeAttribute("disabled");
  createImageNode();
});

buttonImageRemoveOne.addEventListener("click", cleanImage);
