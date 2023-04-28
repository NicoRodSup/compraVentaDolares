let eleccion;
let comprar;
let vender;
let continuar;

let nombre =prompt("Hola, ingresa tu nombre y apellido");

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
     alert("El costo total de la operacion es de:"+(390 * cantidadCompra + " " + "pesos argentinos.\nA continuacion le vamos a pedir sus datos para finalizar la operacion"));
    }else{
        alert("Por favor vuelva a repetir la operacion e ingrese un valor numerico");
    }
}


function venta(){
    let cantidadVenta= parseInt (prompt("Cuantos dolares desea vender? Indique el valor en numeros"));
    if(Number.isInteger(cantidadVenta)){
      alert("Le damos un total de  : "+(cantidadVenta * 380 + " " + "pesos argentinos\nA continuacion le vamos a pedir sus datos para finalizar la operacion"));
    }else{
        alert("Por favor vuelva a repetir la operacion e ingrese un valor numerico")
    }
}



// SEGUNDA PREENTREGA


// METODO CONSTRUCTOR CON SUCURSALES
class Sucursal {
    constructor(nombre,direccion,horario){
        this.nom=nombre;
        this.dir=direccion;
        this.hor=horario;
        this.info=`Nombre: ${this.nom}\nDireccion: ${this.dir}\nHorario: ${this.hor}`;
    }
};

const sucursal1=new Sucursal("Sucursal Balvanera","Avenida Belgrano 2590","09 a 16hs");
const sucursal2=new Sucursal("Sucursal Devoto","Cuenca 3420", "10 a 17:30hs");
const sucursal3=new Sucursal("Sucursal Almagro","Avenida Rivadavia 4500","10 a 15:30 hs");
const sucursal4=new Sucursal("Sucursal Ramos Mejia", "Avenida de Mayo 1364","11 a 16:30hs");

//MUESTRO LOS DATOS DE LA SUCRUSAL
console.log(sucursal1.info)
console.log(sucursal2.info)
console.log(sucursal3.info)
console.log(sucursal4.info)

//SUCURSALES ARRAY
const sukursales =[{nombre:"Sucursal Balvanera",direccion:"Avenida Belgrano 2590",horario:"09 a 16hs"},
                {nombre:"Sucursal Devoto",direccion:"Cuenca 3420",horario:"10 a 17:30hs"},
                {nombre:"Sucursal Almagro",direccion:"Avenida Rivadavia 4500",horario:"10 a 15:30hs"},
                {nombre:"Sucursal Ramos Mejia ",direccion:"Avenida de Mayo 1364",horario:"11 a 16:30hs"}]
  
                const ListaNombres = sukursales.map(nombre =>nombre.nombre)
                console.log(ListaNombres);

                //METIDO FOREACH
                sukursales.forEach((suc)=>{
                    console.log(suc);
                })

// HAY ALGUNA FORMA MAS CONVENIENTO DE NOMBRAR LAS SUCURSALES? METODO CONSTRUCTOR 
// O MEDIANTE OBJETOS DENTRO DEL ARRAY COMO ARRIBA?


//ARRAYS CON LOS CLIENTES
class Cliente {
    constructor(nombre, direccion, dni) {
        this.nombre  = nombre;
        this.direccion  = direccion;
        this.dni = dni;
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

// ¿ Porque me aparece "false" al buscar con el metodo include "Nicolas Rodriguez" o cualquier palabra? 
console.log(clientes.includes("Nicolas Rodriguez"));

// ¿ Como puedo mostrarle al cliente una vez que indico cuanto comprar 
// las sucursales disponibles para retirar ? Intente llamarlo
// desde una alert y me aparece como "no inicializada"