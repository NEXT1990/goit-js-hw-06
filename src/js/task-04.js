let counterValue = 0;

const buttonMinus = document.querySelector(`button[data-action="decrement"]`);
console.log(buttonMinus);
const buttonPlus = document.querySelector(`button[data-action="increment"]`);
console.log(buttonPlus);
const valueEl = document.querySelector("#value");
buttonPlus.addEventListener("click", (event) => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});

buttonMinus.addEventListener("click", (event) => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});

console.log(valueEl);
