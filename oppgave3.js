
document.querySelector("form.frakmh").addEventListener("submit", e => {
  e.preventDefault();
  const km = Number(e.target.km.value);

  const mph = km / 1.609;

  const kmSpan = document.querySelector("p.frakmh>#km");
  const mphSpan = document.querySelector("p.frakmh>#mph");

  kmSpan.textContent = km;
  mphSpan.textContent = mph.toFixed(2)
    ;

  const p = document.querySelector("p.frakmh");
  p.classList.remove("skjult");
});

document.querySelector("form.framph").addEventListener("submit", e => {
  e.preventDefault();
  const mph = Number(e.target.mph.value);

  const km = mph * 1.609;

  const kmSpan = document.querySelector("p.framph>#km");
  const mphSpan = document.querySelector("p.framph>#mph");

  kmSpan.textContent = km.toFixed(2);
  mphSpan.textContent = mph;
  const p = document.querySelector("p.framph");
  p.classList.remove("skjult");
});
