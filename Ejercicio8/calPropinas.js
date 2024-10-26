/* calculadora de propina: crear una calculadora donde el usuario ingrese el total de la cuenta y el porcentaje de propina, y el programa calcule la propina total.*/

function calculadoraPropina() {
  let cuenta = document.getElementById("cuenta").value;
  let porcentaje = document.getElementById("porcentaje").value;
  let propina = (porcentaje * cuenta) / 100;

  console.log("La propina es: ", propina)
}
