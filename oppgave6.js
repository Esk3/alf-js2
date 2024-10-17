const epostSpan = document.querySelector("#epost");
const skjult = document.querySelector(".skjult");

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  const fornavn = e.target.fornavn.value;
  const mellomnavn = e.target.mellomnavn.value;

  const domain = "min-epost-server.no";

  const epost = fornavn + "." + mellomnavn + "@" + domain;

  epostSpan.textContent = epost;
  skjult.classList.remove("skjult");
});
