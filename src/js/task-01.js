const liEl = document.querySelectorAll(".item");
console.log("Number of categories:", liEl.length);

// liEl.forEach(elements);

// function elements(category) {
//   const categotyTitles = category.firstElementChild;
//   console.log("Category:", categotyTitles.textContent);
//   const animalsOfList = categotyTitles.nextElementSibling;
//   console.log("Elements:", animalsOfList.childElementCount);
// }

for (const element of liEl) {
  const categotyTitles = element.firstElementChild;
  console.log("Category:", categotyTitles.textContent);
  const animalsOfList = categotyTitles.nextElementSibling;
  console.log("Elements:", animalsOfList.childElementCount);
}

// const listAllElements = document.querySelectorAll(".item ul");
// const firstLiElChild = liEl[0].firstElementChild;
// console.log("Category:", firstLiElChild.textContent);
// const animalsOfList = listAllElements[0].children.length;
// console.log("Elements:", animalsOfList);

// const secondLiElChild = liEl[1].firstElementChild;
// console.log("Category:", secondLiElChild.textContent);
// const productslOfList = listAllElements[1].children.length;
// console.log("Elements:", productslOfList);

// const lastLiElChild = liEl[2].firstElementChild;
// console.log("Category:", lastLiElChild.textContent);
// const technologieslOfList = listAllElements[2].children.length;
// console.log("Elements:", technologieslOfList);
