/* Semaforo interactico: Simular un semaforo donde las luces cambian de color al hacer click en botones: 
a. Crea tres botones: "Rojo", "Amarrillo" y "Verde"
b. Crea un circulo que represente el semaforo
c. Al hacer click en cada boton, el circulo debe cambiar de color para simular el estado del semaforo */


/* version 1*/
document.getElementById("btnRojo").addEventListener("click", function() {
    document.getElementById("luz").style.backgroundColor = "red";
});

document.getElementById("btnAmarillo").addEventListener("click", function() {
    document.getElementById("luz").style.backgroundColor = "yellow";
});

document.getElementById("btnVerde").addEventListener("click", function() {
    document.getElementById("luz").style.backgroundColor = "green";
});


/* Version 2 */
// function cambiarColor(color) {
//     document.getElementById("luz").style.backgroundColor = color;
// }

