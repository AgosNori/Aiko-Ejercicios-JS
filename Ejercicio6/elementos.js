/* Manipulacion de elementos: crear un parrafo en el HTML y modificar su contenido usando JS */


document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("btnModificar"); 
    const parrafo = document.getElementById("miParrafo"); 

    // Agregar un evento de clic al botón
    boton.addEventListener("click", function() {
        parrafo.textContent = "Bienvenidos al Himalaya."; // Cambiar el texto del párrafo
    });
});
