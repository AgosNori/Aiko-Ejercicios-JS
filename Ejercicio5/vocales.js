/* Contar vocales: escribir un programa que permita al usuario ingresar una palabra y cuente cuantas vocales tiene:
a. Crea un campo de texto donde el usuario pueda ingresar una palabra
b. al hacer click en un boton, se debe contar cuantas vocales (a,e,i,o,u) contiene la palabra
*/
let vocalesTotal = 0;
function cantVocales(){
    let palabra = document.getElementById("palabra").value;
    const vocales = "aeiouAEIOU";
    for ( let caracter of palabra){
        if (vocales.includes(caracter)){
            vocalesTotal += 1
        } 
    } 
    console.log('La cantidad de vocales es: ',vocalesTotal)
}