const input = document.querySelector("#input");
const special = document.querySelector("#special");
const charLength = document.querySelector("#charLength");
const checkList = [false, false];
btn.addEventListener("click", (e) => {
  const { value } = e.target;
  const { length } = value;
  if (6 <= length && length <= 20) {
    charLength.style.setProperty("color", "green");
    checkList[0] = true;
  } else {
    charLength.style.setProperty("color", "#efefef");
    checkList[0] = false;
  }
  const specialList = [..."!@#$"];
  if (specialList.some((v) => value.includes(v))) {
	special.style.setProperty("color", "green");
  } else {
	special.
  }
});

//   const a = e.target;
//   const b = 6 <= a.innerHTML.length && a.innerHTML.length <= 20;
//   if ((b.includes = ("!", "@", "$", "%", "^", "*", "_", "+", "~"))) {
//     console.log("맞는 비밀번호입니다.");
//   } else {
//     console.log("특수문자가 포함되어 있지 않습니다");
//   }
// });
