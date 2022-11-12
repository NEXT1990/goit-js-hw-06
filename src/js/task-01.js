const liEl = document.querySelectorAll(".item");
console.log("Number of categories:", liEl.length);
const firstLiElChild = liEl[0].firstElementChild;
console.log("Category:", firstLiElChild.textContent);
const listAllElements = document.querySelectorAll(".item ul");
const animalsOfList = listAllElements[0].children.length;
console.log("Elements:", animalsOfList);

const secondLiElChild = liEl[1].firstElementChild;
console.log("Category:", secondLiElChild.textContent);
const productslOfList = listAllElements[1].children.length;
console.log("Elements:", productslOfList);

const lastLiElChild = liEl[2].firstElementChild;
console.log("Category:", lastLiElChild.textContent);
const technologieslOfList = listAllElements[2].children.length;
console.log("Elements:", technologieslOfList);
