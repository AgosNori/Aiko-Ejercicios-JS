/* Escribir una funcion llamada fizzBuzz que reciba un numero y retorne un string de acuerdo a lo siguiente:
a. "fizz" si el numero es multiplo de 3
b. "buzz" si el numero es multiplo de 5
c. "fizzbuzz" si el numero es multiplo tanto de 3 como de 5
d. si no cumple ninguna de las condiciones anteriores debe retornar el mismo numero
*/
function fizzBuzz() {
  let numero = document.getElementById("num").value;
  if (numero % 3 === 0 && numero % 5 === 0) {
    console.log( "fizzbuzz");
  } else if (numero % 3 === 0) {
    console.log ("fizz");
  } else if (numero % 5 === 0) {
    console.log ("buzz");
  } else {
    console.log(numero);
  }
}
