let eleccion;
let comprar;
let vender;
let salir;

let nombre =prompt("Hola, ingresa tu nombre y apellido");

if (nombre != "") {
    alert("Hola" + " " + nombre +" " + "bienvenido");
    do{
        eleccion = prompt("Ingresa 1 si queres comprar\nIngresa 2 si quieres vender\nIngresa 3 si quieres salir")
        comprar=1
        vender=2
        salir=3
        if(eleccion == comprar){ compra()
    }else if(eleccion == vender){ venta()
    }else if(eleccion == salir){
        alert("Muchas gracias, te esperamos la proxima")}
    else{
        alert("Tu respuesta no es correcta , vuelve a ingresar e ingresa una respuesta correcta")
    }
    } while (eleccion != salir);
    

}else{
    prompt("Su nombre no puede estar vacio.\nPor favor indique su nombre y apalledio")
}


function compra(){
    let cantidadCompra= parseInt(prompt("Cuantos dolares desea comprar\nIndique el valor en numeros"));
    if(Number.isInteger(cantidadCompra)){
     alert("El costo total de la operacion es de:"+(390 * cantidadCompra + " " + "pesos argentinos"));
    }else{
        alert("Por favor vuelva a repetir la operacion e ingrese un valor numerico");
    }
}
function venta(){
    let cantidadVenta= parseInt (prompt("Cuantos dolares desea vender? Indique el valor en numeros"));
    if(Number.isInteger(cantidadVenta)){
      alert("Le damos un total de  : "+(cantidadVenta * 380 + " " + "pesos argentinos"));
    }else{
        alert("Por favor vuelva a repetir la operacion e ingrese un valor numerico")
    }
}