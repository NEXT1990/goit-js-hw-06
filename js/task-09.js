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
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
  refs.spanEl.textContent = refs.bodyEl.style.backgroundColor;

  console.log(refs.spanEl.textContent);
  console.log(refs.bodyEl.style.backgroundColor);
}
