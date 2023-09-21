const button = document.querySelector(".button");
const valueContainer = document.querySelector(".value-container");

button.onclick = function () {
  let x = Math.floor(Math.random() * 100) + 1;
  valueContainer.textContent = x;
};


