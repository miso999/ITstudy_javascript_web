// const btn = document.querySelector("#btn");
// btn.addEventListener("click", (e) => {
//   const a = e.target;
//   console.log(a.innerHTML);
// });

// const btn = document.querySelector("#btn");
// btn.addEventListener("click", (e) => {
//   const a = e.target;
//   a.innerHTML = "ㄹㅇ";
// });

// const coffee = {name: "americano", price: "1500"}
// const {price} = coffee

const btn = document.querySelector("#btn");
btn.addEventListener("click", (e) => {
  const { target } = e;
  const { innerHTML } = target;
  target.innerHTML = innerHTML == "😎" ? "😀" : "😎";
});

// const input = document.querySelector("#input");
// input.addEventListener("input", (e) => {
//   const { target } = e;
//   console.log(target.value);
// });

const input = document.querySelector("#input");
input.addEventListener("input", (e) => {
  const { target } = e;
  console.log(target.value.length);
});
