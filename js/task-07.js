const refs = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};

refs.input.addEventListener("input", (event) => {
  if (event.currentTarget.value) {
    refs.span.style.fontSize = event.currentTarget.value + "px";
  }
});

// refs.input.addEventListener("change", (event) => {
//   if (event.currentTarget.value) {
//     refs.span.style.fontSize = event.currentTarget.value + "px";
//   }
// });
