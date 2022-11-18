const form = document.querySelector(".login-form");
const inputEmail = form.querySelector("input[type='email']");
const inputPassword = form.querySelector("input[type='password']");
console.dir(inputEmail, inputPassword);

form.addEventListener("submit", clickOnSubmit);

function clickOnSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email.length && password.length !== 0) {
    const dataForm = {
      email,
      password,
    };
    console.log(dataForm);
    form.reset();
    return;
  }
  alert(`Всі поля повинні бути заповнені!!!`);
}
