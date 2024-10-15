const hoydeSpan = document.querySelector("#hoyde");
const vektSpan = document.querySelector("#vekt");
const bmiSpan = document.querySelector("#bmi");

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  const vekt = parseInt(e.target.vekt.value);
  const hoyde = parseInt(e.target.hoyde.value);

  const bmi = vekt / ((hoyde * hoyde));

  hoydeSpan.textContent = hoyde;
  vektSpan.textContent = vekt;
  bmiSpan.textContent = bmi;
});
