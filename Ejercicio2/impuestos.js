/* Calculo de impuestos: Escribir una funcion llamada calculoImpuestos que reciba dos argumentos numericos:edad e ingresos.
 Si la edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos * 40%. De lo contrario retornar cero.*/


 function calculoImpuestos(){
    let edad = document.querySelector(".edad").value;
    let ingresos = document.querySelector(".sueldo").value;
    let impuestos;
    if (edad >= 18 &&  ingresos > 1000){
        impuestos = ingresos * 0.40;
        console.log('El total de impuestos es: ',impuestos)
    } else{
        console.log("Cero")
    }
 }