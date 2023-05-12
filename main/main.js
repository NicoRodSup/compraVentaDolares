const formulario = document.getElementById("formulario");

formulario.addEventListener("submit",(e) => {
const nombre = document.querySelector("#nombre").value;
const apellido = document.querySelector("#apellido").value;
const dni = document.querySelector("#dni").value;
let cantidad = document.getElementById("cantidad").value;

if((nombre == "" || apellido == "" || dni.length < 8 || cantidad =="")){
    alert ("No puede dejar espacios sin rellenar")
} else {
    const usuarioOperacion ={
        nombre: nombre, 
        apellido: apellido,
        dni: dni,
    }
    enviarFormulario(e,cantidad,usuarioOperacion)
}
})

function enviarFormulario (e, cantidad, usuarioOperacion){
    e.preventDefault();

    const mostrarInfo = document.getElementById("mostrarInfo")
    let inputCompra = document.getElementById("compra")
    let inputVenta = document.getElementById("venta")
    // let inputSucursal1 = document.getElementById("sucursal1")
    // let inputSucursal2 = document.getElementById("sucursal2")
    // let inputSucursal3 = document.getElementById("sucursal3")
    // let inputSucursal4 = document.getElementById("sucursal4")
    
    if(inputCompra.checked){
        cantidadOperacion = comprar(cantidad)
        mostrarInfo.innerHTML = `Su operacion fue realizada con exito,tienes 24hs para acercarte a la sucursal seleccionada y finalizar la operacion.No olvides presentar tu DNI. <br/> <br/> Nombre y Apellido: ${usuarioOperacion.nombre} ${usuarioOperacion.apellido} <br/> DNI: ${usuarioOperacion.dni}<br/> El valor total de la operacion es de : ${cantidadOperacion} pesos Argentinos  `
    } else if (inputVenta.checked){
        cantidadOperacion = vender(cantidad)
        mostrarInfo.innerHTML = `Su operacion fue realizada con exito,tienes 24hs para acercarte a la sucursal seleccionada y finalizar la operacion  <br/> <br/> Nombre y Apellido: ${usuarioOperacion.nombre} ${usuarioOperacion.apellido} <br/> DNI: ${usuarioOperacion.dni}<br/> Recibe un total de : ${cantidadOperacion} pesos Argentinos  `
    }

    // if(inputSucursal1.checked)
    // else(inputSucursal2.checked)
    // else(inputSucursal3.checked)
    // else if(inputSucursal4.checked)
    
    
    formulario.reset()
};

function comprar (cantidad){
    cantidad = 480*cantidad;
    return cantidad
};

function vender (cantidad){
    cantidad = 420*cantidad;
    return cantidad 
}

/*const sucursales =[
    {nombre:"Sucursal Balvanera",direccion:"Avenida Belgrano 2590",horario:"09 a 16hs"},
    {nombre:"Sucursal Devoto",direccion:"Cuenca 3420",horario:"10 a 17:30hs"},
    {nombre:"Sucursal Almagro",direccion:"Avenida Rivadavia 4500",horario:"10 a 15:30hs"},
    {nombre:"Sucursal Ramos Mejia ",direccion:"Avenida de Mayo 1364",horario:"11 a 16:30hs"}]
    
*/
