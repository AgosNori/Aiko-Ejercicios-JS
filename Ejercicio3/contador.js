/* Crear un contador que se incremente o decrementa con botones :
a. Crear un h2 que muestre un numero (inicialmente en 0)
b. Añade dos botones :"Incrementar" y "Deccrementar"
c. Al hacer click en los botones, el numero debe aumentar o disminuir en 1
*/

let contador = 0;
function incrementarNumero(){
    contador += 1;
    document.getElementById("numero").innerHTML = contador;
}
function decrementarNumero(){
    contador -= 1;
    document.getElementById("numero").innerHTML = contador;
}