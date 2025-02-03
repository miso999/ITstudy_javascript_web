const capital = document.querySelector("#capital");
const desc = document.querySelector("#desc");
const country = {
  {capital: "london",
  nation: "England"},
  {capital: "paris",
  nation: "France"},
  {capital: "tokyo",
  nation: "Japan"},
  {capital: "seoul",
    nation: "Korea"
  }       
};

country.forEach((v) => {
  const nation = document.querySelector("#" + v.capital);
  li.addEventListener("click", () => {
  li.innerHTML = v.capital;
  capital.innerHTML = v.capital;
    desc.innerHTML = `${v.capital} is the capital city of ${v.nation}`;
  });
   countryList.appendChild.(li);
});
