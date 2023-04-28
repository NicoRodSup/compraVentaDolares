let eleccion;
let comprar;
let vender;
let continuar;

let nombre =prompt("Hola, ingresa tu nombre y apellido");

const sucursales =[
    {nombre:"Sucursal Balvanera",direccion:"Avenida Belgrano 2590",horario:"09 a 16hs"},
    {nombre:"Sucursal Devoto",direccion:"Cuenca 3420",horario:"10 a 17:30hs"},
    {nombre:"Sucursal Almagro",direccion:"Avenida Rivadavia 4500",horario:"10 a 15:30hs"},
    {nombre:"Sucursal Ramos Mejia ",direccion:"Avenida de Mayo 1364",horario:"11 a 16:30hs"}]

if (nombre != "") {
    alert("Hola" + " " + nombre +" " + "bienvenido");
    do{
        eleccion = prompt("Ingresa 1 si queres comprar\nIngresa 2 si quieres vender\nIngresa 3 si quieres finalizar")
        comprar=1
        vender=2
        finalizar=3
        if(eleccion == comprar){ compra()
    }else if(eleccion == vender){ venta() 
    }else if(eleccion == finalizar){
        alert("Aguarda que finalizamos la operacion")}
    else{
        alert("Tu respuesta no es correcta ,ingresa una respuesta correcta")
    }
    } while (eleccion != finalizar);
    

}else{
    prompt("Su nombre no puede estar vacio.\nPor favor indique su nombre y apalledio")
}

function compra(){
    let cantidadCompra= parseInt(prompt("Cuantos dolares desea comprar\nIndique el valor en numeros"));
    if(Number.isInteger(cantidadCompra)){
     alert("El costo total de la operacion es de:"+(390 * cantidadCompra + " " + "pesos argentinos.\nA continuacion le vamos a indicar donde puede finalizar la operaion al precio acordado"));
    const nombreSucursales = sucursales.map(sucursal => sucursal.nombre)
    const mensaje = `Nombre de las sucursales: \n${nombreSucursales.join("\n")}`
    alert(mensaje);
    }else{
        alert("Por favor vuelva a repetir la operacion e ingrese un valor numerico");
    }
}

function venta(){
    let cantidadVenta= parseInt (prompt("Cuantos dolares desea vender? Indique el valor en numeros"));
    if(Number.isInteger(cantidadVenta)){
      alert("Le damos un total de  : "+(cantidadVenta * 380 + " " + "pesos argentinos\nA continuacion le vamos a indicar donde puede finalizar la operacion al precio acordado"));
    const nombreSucursales = sucursales.map(sucursal => sucursal.nombre)
    const mensaje = `Nombre de las sucursales: \n${nombreSucursales.join("\n")}`
    alert (mensaje);
    }else{
        alert("Por favor vuelva a repetir la operacion e ingrese un valor numerico")
    }
}


//ARRAYS CON LOS CLIENTES
class Cliente {
    constructor(nombre, direccion, dni) {
        this.nombre  = nombre;
        this.direccion  = direccion;
        this.dni = dni;
        this.info= `Nombre: ${this.nombre}\nDireccion: ${this.direccion}\n DNI: ${this.dni}`;
    }
}
//Declaramos un array de clientes para almacenar objetos
const clientes = [];
//push agregamos clientes
clientes.push(new Cliente("Nicolas Rodriguez","Campana 3557", "36807471"));
clientes.push(new Cliente("Romina Corda","Cullen 5134", "33409781"));
clientes.push(new Cliente("Martin Lutfi","Delgado 331" ,"28457162"));

// para ver la cantidad de clientes que hay //
console.log(Cliente.length);

//mostrar nombre de un cliente 

clientes.forEach(cliente => {
        if(cliente.nombre.includes("Nicolas Rodriguez")){
            console.log(`Se encontro al cliente "${cliente.nombre}"`);
        }
    });
