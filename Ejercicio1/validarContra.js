/* Escribir una funcion que valide si una contrasela es correcta basandose en dos opciones prededfinidas 
a- Escribe una función llamada contraseñaValida que reciba un string como argumento.
b- Si el string es igual a una de las dos contraseñas definidas, la funcion debe volver un mensaje.
c- Si el string es diferente de estos valores, debe devolver otro mensaje en la consola */


const contra1 = "arrozconsalsa";
const contra2 = "arrozconpollo";

function validarContraseña(){
    let contraseña = document.querySelector(".contraseña").value;
    if (contraseña === contra1 || contraseña === contra2){
        console.log("Contraseña correcta. Bienvenid@ al portal")
    }else{
        console.log("Contraseña incorrecta. Vuelve a intentarlo")
    }
}