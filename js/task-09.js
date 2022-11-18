function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyEl: document.querySelector("body"),
  spanEl: document.querySelector(".color"),
  buttonChangeColor: document.querySelector(".change-color"),
};

refs.buttonChangeColor.addEventListener("click", onButtonChangeColorClick);

function onButtonChangeColorClick(event) {
  refs.spanEl.textContent = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
}
