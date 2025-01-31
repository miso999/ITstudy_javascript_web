const redButton = document.querySelector(".red");
const blueButton = document.querySelector(".blue");
const greenButton = document.querySelector(".green");
const box = document.querySelector(".box");

redButton.addEventListener("click", () => {
  box.style.backgroundColor = "red";
});

blueButton.addEventListener("click", () => {
  box.style.backgroundColor = "blue";
});

greenButton.addEventListener("click", () => {
  box.style.backgroundColor = "green";
});

const squareButton = document.querySelector(".square");
squareButton.addEventListener("click", () => {
  box.style.borderRadius = "0px";
});

const softButton = document.querySelector(".soft");
softButton.addEventListener("click", () => {
  box.style.borderRadius = "30px";
});

const hardButton = document.querySelector(".hard");
hardButton.addEventListener("click", () => {
  box.style.borderRadius = "9999px";
});

//스몰사이즈 100 100 //미디엄사이즈 200 200 // 라지사이즈 300 300
const smallButton = document.querySelector(".small");
smallButton.addEventListener("click", () => {
  box.style.width = "100px";
  box.style.height = "100px";
});

const mediumButton = document.querySelector(".medium");
mediumButton.addEventListener("click", () => {
  box.style.width = "200px";
  box.style.height = "200px";
});

const largeButton = document.querySelector(".large");
largeButton.addEventListener("click", () => {
  box.style.width = "300px";
  box.style.height = "300px";
});

const colorBox = ["red", "blue", "green"];

redButton.addEventListener("click", () => {
  box.classList.remove(...colorBox);
  box.classList.add("red");
});

blueButton.addEventListener("click", () => {
  box.classList.remove(...colorBox);
  box.classList.add("blue");
});

greenButton.addEventListener("click", () => {
  box.classList.remove(...colorBox);
  box.classList.add("green");
});
