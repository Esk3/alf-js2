const form = document.querySelector("form");

const talletSpan = document.querySelector("#tallet");
const halvpatenSpan = document.querySelector("#halvparten");
const dobbeltSpan = document.querySelector("#dobbelt");
const tredobbeltSpan = document.querySelector("#tredobbelt");
const kvadratSpan = document.querySelector("#kvadrat");


form.addEventListener("submit", e => {
  e.preventDefault();
  const tallet = Number(e.target.tall.value);

  talletSpan.textContent = tallet;

  const halvparten = tallet / 2;
  halvpatenSpan.textContent = halvparten

  const dobbelt = tallet * 2;
  dobbeltSpan.textContent = dobbelt;

  const tredobblet = tallet * 3;
  tredobbeltSpan.textContent = tredobblet;

  const kvadrat = tallet * tallet;
  kvadratSpan.textContent = kvadrat;
});
