const kmSpan = document.querySelector("#km");
const mphSpan = document.querySelector("#mph");

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  const km = parseInt(e.target.km.value);

  const mph = km / 1.609;

  kmSpan.textContent = km;
  mphSpan.textContent = mph;
});
