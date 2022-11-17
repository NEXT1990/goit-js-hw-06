const form = document.querySelector(".login-form");
console.log(form);

form.addEventListener("submit", clickOnSubmit);

function clickOnSubmit(event) {
  event.preventDefault();
  console.log(`это нажатие на сабмит`);
}
