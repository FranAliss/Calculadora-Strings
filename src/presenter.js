import sumarCadena from "./CCadenas";

const first = document.querySelector("#primer-numero");
const form = document.querySelector("#calculadora-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = first.value;

  div.innerHTML = "<p>" + sumarCadena(firstNumber) + "</p>";
});
