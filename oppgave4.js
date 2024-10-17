const hoydeSpan = document.querySelector("#hoydeOutput");
const vektSpan = document.querySelector("#vektOutput");
const bmiSpan = document.querySelector("#bmi");
const skjult = document.querySelector(".skjult");

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  const vekt = Number(e.target.vekt.value);
  const hoyde = Number(e.target.hoyde.value);

  const bmi = vekt / ((hoyde * hoyde));

  hoydeSpan.textContent = hoyde.toFixed(2);
  vektSpan.textContent = vekt.toFixed(2);
  bmiSpan.textContent = bmi.toFixed(2);
  skjult.classList.remove("skjult");
});
