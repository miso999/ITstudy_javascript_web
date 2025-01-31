//body 태그에 button[버튼]태그 추가하기
//이벤트 추가(클릭하면 점메추 alert 나오도록)

// const button = document.createElement("button");
// button.innerText = "오늘 쭈꾸미 먹으러 감";
// button.addEventListener("click", () => {
//   alert(`점메추`);
// });
// document.body.appendChild(button);

// <button onclick="drink">술마심</button>
// const drink = () => {
//   alert("술찌듦");
// };

// document.getElementsByClassName;
// const red = document.querySelector(".red");
// red.addEventListener("click", () => {
//   alert("빨강");
// });

// const makeAlert = (msg) => {
//   alert(msg);
// };

// [".red", ".blue", ".green"].forEach((v) =>
//   document.querySelector(v).addEventListener("click", () => makeAlert(v))
// );

//빨간색 버튼 누르면  박스가 배경이 빨간색
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
