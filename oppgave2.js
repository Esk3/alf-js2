const svar = document.querySelector("#svar");
const fahrenheitId = "fahrenheit";
const farenheitHTML = `<span id="${fahrenheitId}"></span>`;
const celsiusId = "celsius";
const celsiusHTML = `<span id="${celsiusId}"></span>`;
const kelvinId = "kelvin";
const kelvinHTML = `<span id="${kelvinId}"></span>`;

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  const verdi = Number(e.target.temperatur.value);
  const fraEnhet = e.target.fra.value;

  const verdiKelvin = tilKelvin(verdi, fraEnhet);


  if (fraEnhet == "f") {
    svar.innerHTML = `${farenheitHTML} grader Fahrenheit tilsvarer ${celsiusHTML} grader Celsius og ${kelvinHTML} grader Kelvin`
  } else if (fraEnhet == "c") {
    svar.innerHTML = `${celsiusHTML} grader Celsius tilsvarer ${farenheitHTML} grader Fahrenheit og ${kelvinHTML} grader Kelvin`
  }
  else if (fraEnhet == "k") {
    svar.innerHTML = `${kelvinHTML} grader Kelvin tilsvarer ${celsiusHTML} grader Celsius og ${farenheitHTML} grader Fahrenheit`
  }
  else {
    svar.innerHTML = "error"
  }

  const farenheitSpan = svar.querySelector("#" + fahrenheitId);
  const celsiusSpan = svar.querySelector("#" + celsiusId);
  const kelvinSpan = svar.querySelector("#" + kelvinId);

  farenheitSpan.textContent = fraKelvin(verdiKelvin, "f");
  celsiusSpan.textContent = fraKelvin(verdiKelvin, "c");
  kelvinSpan.textContent = fraKelvin(verdiKelvin, "k");
});

function tilKelvin(v, type) {
  if (type == "f") {
    return (v - 32) * (5 / 9) + 273.15
  } else if (type == "c") {
    return v + 273.15
  } else if (type == "k") {
    return v
  }
}

function fraKelvin(k, type) {
  if (type == "f") {
    return (k - 273.15) * (9 / 5) + 32;
  } else if (type == "c") {
    return k - 273.16;
  } else if (type == "k") {
    return k;
  }
}
