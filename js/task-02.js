const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const liElContainer = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  liEl.classList.add("item");
  console.log(liEl);

  return liEl;
});

// ----------------Олд Счул =)---------------------

// const elements = [];

// for (let i = 0; i < ingredients.length; i += 1) {
//   const ingredient = ingredients[i];
//   const liEl = document.createElement("li");
//   liEl.textContent = ingredient;
//   liEl.classList.add("item");
//   console.log(liEl);

//   elements.push(liEl);
// }

// console.log(elements);

liElContainer.append(...elements);
