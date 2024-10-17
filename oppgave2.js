const svar = document.querySelector("#svar");

function skriv(fraVerdi, fraEnhet, tilverdi1, tilEnhet1, tilverdi2, tilEnhet2) {
  svar.textContent = `${fraVerdi.toFixed(2)} grader ${fraEnhet} tilsvarer ${tilverdi1.toFixed(2)} grader ${tilEnhet1}, og ${tilverdi2.toFixed(2)} grader ${tilEnhet2}`;
}

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  const verdi = Number(e.target.temperatur.value);
  const fraEnhet = e.target.fra.value;

  const verdiKelvin = tilKelvin(verdi, fraEnhet);


  if (fraEnhet == "f") {
    skriv(verdi, "Fahrenheit",
      fraKelvin(verdiKelvin, "c"), "Celsius",
      fraKelvin(verdiKelvin, "k"), "Kelvin"
    )
  }
  else if (fraEnhet == "c") {
    skriv(verdi, "Celsius",
      fraKelvin(verdiKelvin, "f"), "Fahrenheit",
      fraKelvin(verdiKelvin, "k"), "Kelvin",
    )
  }
  else if (fraEnhet == "k") {
    skriv(verdi, "Kelvin",
      fraKelvin(verdiKelvin, "c"), "Celsius",
      fraKelvin(verdiKelvin, "f"), "Fahrenheit",
    )
  }
  svar.classList.remove("skjult");
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
