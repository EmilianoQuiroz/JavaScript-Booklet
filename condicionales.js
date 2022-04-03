/*
EJERCICIO 1:
Solicitar al usuario un (1) nombre.
Si el mismo es igual a otro nombre 
almacenado en una variable, realizar
 una salida por alerta con el mensaje “Fui yo”. 
Caso contrario, la salida será “Yo no fui”.
*/
/*
let nombreIngresado = prompt("Ingrese su nombre: ")
let nombreGuardado = "Santiago"

if(nombreIngresado == nombreGuardado){
    alert("fui yo")
}
else{
    alert("yo no fui")
}
*/

/*
EJERCICIO 2:
Solicitar al usuario una (1) tecla.
Si se presiona “y” (minúscula), o “Y” (mayúscula), 
realizar una salida por alerta con el mensaje 
“Correcto”. Caso contrario, la salida será “Error”.
*/
/*
let letraIngresada = prompt("Ingrese una letra: ")

if (letraIngresada == "y" || letraIngresada == "Y"){
    alert("Correcto")
}
else{
    alert("Incorrecto")
}
*/

/*
EJERCICIO 3:
Solicitar al usuario un (1) un número.
Si el valor está entre 1 y 4, efectuar
una de las siguientes salidas según corresponda: 
“Elegiste a Homero” si es 1.
“Elegiste a Marge” si es 2.
“Elegiste a Bart” si es 3.
“Elegiste a Lisa” si es 4
*/
/*
let numeroIngresado = prompt("Ingrese un numero entre el 1 y el 4: ")

if(numeroIngresado == 1){
    alert("Elegiste a Homero")
}
else if(numeroIngresado == 2){
    alert("Elegiste a Marge")
}
else if(numeroIngresado == 3){
    alert("Elegiste a Bart")
}
else if(numeroIngresado == 4){
    alert("Elegiste a Lisa")
}
else{
    alert("Numero incorrecto")
}
*/

/*
EJERCICIO 4:
Solicitar al usuario un (1) número.
Si el valor está entre dos números, 
efectuar una de las siguientes salidas, según corresponda: 
“Presupuesto bajo” si está entre 0 y 1000.
“Presupuesto medio” si está entre 1001 y 3000.
“Presupuesto alto” si es  mayor que 3000.
*/
/*
let presupuestoIngresado = prompt("Ingrese un presupuesto: ")

if (presupuestoIngresado >= 0 && presupuestoIngresado <= 1000){
    alert("Presupuesto bajo")
}
else if(presupuestoIngresado >= 1001 && presupuestoIngresado <= 3000){
    alert("Presupuesto medio")
}
else{
    alert("presupuesto alto")
}
*/

/*
EJERCICIO 5:
Solicitar al usuario cuatro (4) productos de almacén. 
Si todos los elementos fueron cargados, realizar una 
única salida compuesta por el listado de productos. 
Caso contrario, la salida será 
“Error: Es necesario cargar todos los productos”
*/
/*
let productoIngreso1 = prompt("Ingrese un producto: ")
let productoIngreso2 = prompt("Ingrese un producto: ")
let productoIngreso3 = prompt("Ingrese un producto: ")
let productoIngreso4 = prompt("Ingrese un producto: ")

if((productoIngresado1 != "") && (productoIngresado2 != "") && (productoIngresado3 != "") && (productoIngresado4 != "")){
    let totalProductos = (`1.${productoIngresado1} 2.${productoIngresado2} 3.${productoIngresado3} 4.${productoIngresado4}`)
   
    alert(totalProductos)
}
else{
    alert("Error: Es necesario cargar todos los productos")
}
*/

let producto1 = prompt('INGRESAR 1er PRODUCTO');
let producto2 = prompt('INGRESAR 2do PRODUCTO');
let producto3 = prompt('INGRESAR 3er PRODUCTO');
let producto4 = prompt('INGRESAR 4to PRODUCTO');

if ((producto1 != "") && (producto2 != "") && (producto3 != "") && (producto4 != "")) {
    let heladera = "1) " + producto1 + " " +
        "2) " + producto2 + " " +
        "3) " + producto3 + " " +
        "4) " + producto4;
    alert(heladera);
} else {
    alert("ERROR: ES NECESARIO CARGAR TODOS LOS PRODUCTOS");
}

