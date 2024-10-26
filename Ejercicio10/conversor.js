/* Conversor de unidades: Crear un conversor de unidades que convierta km a millas:
a. el usuario ingresa una cantidad en km
b. Al hacer click en un boton, el programa convierte esa cantidad a millas 
akm = 0.621371 millas)
c. Muestre el resultado en la pag */


function convertirKmAMillas(){
    let km = document.getElementById("cantKm").value;
    let millas = km * 0.621371
    document.getElementById("resultado").innerHTML = "La cantidad de millas es: " + millas;
}