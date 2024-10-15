const farenheitSpan = document.querySelector("#fahrenheit");
const celsiusSpan = document.querySelector("#celsius");
const kelvinSpan = document.querySelector("#kelvin");

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  const verdi = parseInt(e.target.temperatur.value);
  const fraEnhet = e.target.fra.value;
  const tilEnhet = e.target.til.value;

  const verdiKelvin = tilKelvin(verdi, fraEnhet);

  const verdiITilEnhet = fraKelvin(verdiKelvin, tilEnhet);

  console.log(verdi, fraEnhet, verdiKelvin, tilEnhet, verdiITilEnhet)

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
