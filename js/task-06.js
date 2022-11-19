const refs = {
  input: document.querySelector("#validation-input"),
  dataLength: document.querySelector(`input[data-length="6"]`).dataset.length,
};

console.log(refs.dataLength);

refs.input.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === Number(refs.dataLength)) {
    refs.input.classList.remove("invalid");
    refs.input.classList.add("valid");
    return;
  }
  refs.input.classList.add("invalid");
  refs.input.classList.remove("valid");
  return;
});
