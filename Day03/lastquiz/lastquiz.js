const id = document.querySelector("#id");
const btn = document.querySelector("#btn");

id.addEventListener("click", () => {
  if (id.innerHTML == "btn") {
    id.innerHTML != "btn";
    id.type = "password";
  } else {
    id.innerHTML == "btn";
    id.type = "text";
  }
});
