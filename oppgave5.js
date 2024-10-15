const tekst = document.querySelector("input#tekst");
const utskrift = document.querySelector("p#utskrift");

document.querySelector("button#lengde").addEventListener("click", () => {
  utskrift.textContent = tekst.value.length;
});
document.querySelector("button#stor").addEventListener("click", () => {
  utskrift.textContent = tekst.value.toUpperCase();
})
document.querySelector("button#liten").addEventListener("click", () => {
  utskrift.textContent = tekst.value.toLowerCase();
})
