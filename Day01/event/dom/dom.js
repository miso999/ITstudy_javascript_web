// const btn = document.createElement("button");
// btn.innerText = "고기살롱";
// document.body.appendChild(btn);

const h1 = document.createElement("h1");
h1.innerText = "고기살롱 어서오고";
h1.style.color = "red";
document.body.appendChild(h1);

const meats = ["삼겹살", "목살", "돼지갈비", "양념갈비", "항정살"];
meats.map((x, i) => {
  const btn = document.createElement("button");
  // 배경색 홀수 파랑, 짝수 노랑
  btn.innerText = `${i}번째` + x;
  btn.style.backgroundColor = i % 2 ? "skyblue" : "yellow";
  btn.addEventListener("click", () => {
    alert(`${x}고기고기`);
  });
  document.body.appendChild(btn);
});
