// 랜덤한 색상을 버튼 10개 만들어서
// 각 버튼을 누르면 박스 배경색 바뀜
// const btn1 = document.createElement("button");
// const btn2 = document.createElement("button");
// const btn3 = document.createElement("button");
// const btn4 = document.createElement("button");
// const btn5 = document.createElement("button");
// const btn6 = document.createElement("button");
// const btn7 = document.createElement("button");
// const btn8 = document.createElement("button");
// const btn9 = document.createElement("button");
// const btn10 = document.createElement("button");

// btn1.addEventListener("click", () => {
//   box.style.backgroundColor = "red";
// });

// function randomColor() {
//   let red = Math.floor(Math.random() * 255);
//   let green = Math.floor(Math.random() * 255);
//   let blue = Math.floor(Math.random() * 255);
//   return `rgb(${red}, ${green}, ${blue})`;
// }

// function changeColor() {
//   document.body.style.backgroundColor = randomColor();
// }

const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const colorList = [..."0123456789abcdef"];
const getOneOfHex = () => colorList[getRandom(0, colorList.length)];
const getColor = () =>
  "#" +
  Array(6)
    .fill(0)
    .map((v) => getOneOfHex())
    .join("");

Array(10)
  .fill(0)
  .forEach((v) => {
    const btn = document.createElement("button");
    const color = getColor();
    btn.innerText = color;
    btn.addEventListener("click", () => {
      const box = document.querySelector("#box");
      box.style.backgroundColor = color;
    });
    document.body.appendChild(btn);
  });
