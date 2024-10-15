
document.querySelector("form.frakmh").addEventListener("submit", e => {
  e.preventDefault();
  const km = parseInt(e.target.km.value);

  const mph = km / 1.609;

  const kmSpan = document.querySelector("p.frakmh>#km");
  const mphSpan = document.querySelector("p.frakmh>#mph");

  kmSpan.textContent = km;
  mphSpan.textContent = mph;
});

document.querySelector("form.framph").addEventListener("submit", e => {
  e.preventDefault();
  const mph = parseInt(e.target.mph.value);

  const km = mph * 1.609;

  const kmSpan = document.querySelector("p.framph>#km");
  const mphSpan = document.querySelector("p.framph>#mph");

  kmSpan.textContent = km;
  mphSpan.textContent = mph;
});
