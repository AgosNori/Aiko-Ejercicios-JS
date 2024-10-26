/* "Piedra papel o tijera": Crear un juego interactico donde el usuario juegue contra la computadora.
a. El usuario selecciona "Piedra","Papel " o "Tijera" a traves de botones
b. la computadora selecciona aleatoriamente una opcion
c. Se muestra quien gana con base a las reglas
*/

function jugar(opcionUsuario) {
    const opciones = ["Piedra", "Papel", "Tijera"];
    const opcionComputadora = opciones[Math.floor(Math.random() * opciones.length)];

    let resultado;
    if (opcionUsuario === opcionComputadora) {
        resultado = "Empate. Ambos eligieron " + opcionUsuario;
    } else if (
        (opcionUsuario === "Piedra" && opcionComputadora === "Tijera") ||
        (opcionUsuario === "Papel" && opcionComputadora === "Piedra") ||
        (opcionUsuario === "Tijera" && opcionComputadora === "Papel")
    ) {
        resultado = "¡Ganaste! La computadora eligió " + opcionComputadora;
    } else {
        resultado = "Perdiste. La computadora eligió " + opcionComputadora;
    }

    document.getElementById("resultado").textContent = resultado;
}
