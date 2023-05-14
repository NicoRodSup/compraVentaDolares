const formulario = document.getElementById("formulario");

formulario.addEventListener("submit",(e) => {
const nombre = document.querySelector("#nombre").value;
const apellido = document.querySelector("#apellido").value;
const dni = document.querySelector("#dni").value;
let cantidad = document.getElementById("cantidad").value;

if((nombre == "" || apellido == "" || dni.length < 8 || cantidad =="")){
    alert ("No puede dejar espacios sin rellenar")
} else {
    let usuarioOperacion ={
        nombre: nombre, 
        apellido: apellido,
        dni: dni,
    }
    const usuarioJSON =JSON.stringify(usuarioOperacion)
    localStorage.setItem("usuario",usuarioJSON);
    const usuarioEnLocalStorage=localStorage.getItem("usuario");
    const usuarioObjeto = JSON.parse(usuarioEnLocalStorage)
    enviarFormulario(e,cantidad,usuarioOperacion);
}
});

function enviarFormulario (e, cantidad, usuarioOperacion){
    e.preventDefault();

    const mostrarInfo = document.getElementById("mostrarInfo")
    let inputCompra = document.getElementById("compra")
    let inputVenta = document.getElementById("venta")
    let inputSucursal1 = document.getElementById("sucursal1")
    let inputSucursal2 = document.getElementById("sucursal2")
    let inputSucursal3 = document.getElementById("sucursal3")
    let inputSucursal4 = document.getElementById("sucursal4")

    const sucursales =[
        {nombre:"Sucursal Balvanera",direccion:"Avenida Belgrano 2590",horario:"09 a 16hs"},
        {nombre:"Sucursal Devoto",direccion:"Cuenca 3420",horario:"10 a 17:30hs"},
        {nombre:"Sucursal Almagro",direccion:"Avenida Rivadavia 4500",horario:"10 a 15:30hs"},
        {nombre:"Sucursal Ramos Mejia ",direccion:"Avenida de Mayo 1364",horario:"11 a 16:30hs"}]
        
    
        if(inputCompra.checked){
        cantidadOperacion = comprar(cantidad)
        mostrarInfo.innerHTML = `Su operacion fue realizada con exito,tienes 24hs para acercarte a la sucursal seleccionada y finalizar la operacion.No olvides presentar tu DNI. <br/> <br/> Nombre y Apellido: ${usuarioOperacion.nombre} ${usuarioOperacion.apellido} <br/> DNI: ${usuarioOperacion.dni}<br/> El valor total de la operacion es de : ${cantidadOperacion} pesos Argentinos  `
    } else if (inputVenta.checked){
        cantidadOperacion = vender(cantidad)
        mostrarInfo.innerHTML = `Su operacion fue realizada con exito,tienes 24hs para acercarte a la sucursal seleccionada y finalizar la operacion  <br/> <br/> Nombre y Apellido: ${usuarioOperacion.nombre} ${usuarioOperacion.apellido} <br/> DNI: ${usuarioOperacion.dni}<br/> Recibe un total de : ${cantidadOperacion} pesos Argentinos  `
    }

    if(inputSucursal1.checked){
        for (sucursal of sucursales){
            let valorNombre = "Sucursal Balvanera"
            const mostrarSucursalNombre1 = sucursales.find(sucursal => sucursal.nombre === valorNombre);
            let valorDireccion ="Avenida Belgrano 2590"
            const mostrarSucursalDireccion1 = sucursales.find(sucursal => sucursal.direccion === valorDireccion);
            let valorHorario ="09 a 16hs"
            const mostrarSucursalhorario1 = sucursales.find(sucursal => sucursal.horario === valorHorario)

        
            mostrarInfo.innerHTML = `¡SU OPERACION FUE REALIZADA CON EXITO!<br/> Tienes 24hs para acercarte a la sucursal seleccionada y finalizar la operacion. <br/> <br/> Nombre y Apellido: ${usuarioOperacion.nombre} ${usuarioOperacion.apellido} <br/> DNI: ${usuarioOperacion.dni}<br/> Recibe un total de : ${cantidadOperacion} pesos Argentinos.<br/> Retira en: ${mostrarSucursalNombre4.nombre}<br/> Direccion: ${mostrarSucursalDireccion4.direccion} <br/> Horario: ${mostrarSucursalhorario4.horario } `
    }
    }else if(inputSucursal2.checked){
        for (sucursal of sucursales){
            let valorNombre = "Sucursal Devoto"
            const mostrarSucursalNombre2 = sucursales.find(sucursal => sucursal.nombre === valorNombre);
            let valorDireccion ="Cuenca 3420"
            const mostrarSucursalDireccion2 = sucursales.find(sucursal => sucursal.direccion === valorDireccion);
            let valorHorario ="10 a 17:30hs"
            const mostrarSucursalhorario2 = sucursales.find(sucursal => sucursal.horario === valorHorario)

            mostrarInfo.innerHTML = `Su operacion fue realizada con exito,tienes 24hs para acercarte a la sucursal seleccionada y finalizar la operacion  <br/> <br/> Nombre y Apellido: ${usuarioOperacion.nombre} ${usuarioOperacion.apellido} <br/> DNI: ${usuarioOperacion.dni}<br/> Recibe un total de : ${cantidadOperacion} pesos Argentinos.<br/> Retira en : ${mostrarSucursalNombre2.nombre}<br/> Direccion: ${mostrarSucursalDireccion2.direccion} <br/> Horario :${mostrarSucursalhorario2.horario } `
        }
        }else if(inputSucursal3.checked)
        for (sucursal of sucursales){
            let valorNombre = "Sucursal Almagro"
            const mostrarSucursalNombre3 = sucursales.find(sucursal => sucursal.nombre === valorNombre);
            let valorDireccion ="Avenida Rivadavia 4500"
            const mostrarSucursalDireccion3 = sucursales.find(sucursal => sucursal.direccion === valorDireccion);
            let valorHorario ="10 a 15:30hs"
            const mostrarSucursalhorario3 = sucursales.find(sucursal => sucursal.horario === valorHorario)

            mostrarInfo.innerHTML = `¡SU OPERACION FUE REALIZADA CON EXITO!<br/> Tienes 24hs para acercarte a la sucursal seleccionada y finalizar la operacion. <br/> <br/> Nombre y Apellido: ${usuarioOperacion.nombre} ${usuarioOperacion.apellido} <br/> DNI: ${usuarioOperacion.dni}<br/> Recibe un total de : ${cantidadOperacion} pesos Argentinos.<br/> Retira en: ${mostrarSucursalNombre4.nombre}<br/> Direccion: ${mostrarSucursalDireccion4.direccion} <br/> Horario: ${mostrarSucursalhorario4.horario } `
        }else if(inputSucursal4.checked)
        for (sucursal of sucursales){
            let valorNombre = "Sucursal Ramos Mejia "
            const mostrarSucursalNombre4 = sucursales.find(sucursal => sucursal.nombre === valorNombre);
            let valorDireccion ="Avenida de Mayo 1364"
            const mostrarSucursalDireccion4 = sucursales.find(sucursal => sucursal.direccion === valorDireccion);
            let valorHorario ="11 a 16:30hs"
            const mostrarSucursalhorario4 = sucursales.find(sucursal => sucursal.horario === valorHorario)

            mostrarInfo.innerHTML = `¡SU OPERACION FUE REALIZADA CON EXITO!<br/> Tienes 24hs para acercarte a la sucursal seleccionada y finalizar la operacion. <br/> <br/> Nombre y Apellido: ${usuarioOperacion.nombre} ${usuarioOperacion.apellido} <br/> DNI: ${usuarioOperacion.dni}<br/> Recibe un total de : ${cantidadOperacion} pesos Argentinos.<br/> Retira en: ${mostrarSucursalNombre4.nombre}<br/> Direccion: ${mostrarSucursalDireccion4.direccion} <br/> Horario: ${mostrarSucursalhorario4.horario } `
        };
    
    formulario.reset()
    ocultar()
};


function comprar (cantidad){
    cantidad = 480*cantidad;
    return cantidad
};

function vender (cantidad){
    cantidad = 420*cantidad;
    return cantidad 
};

function ocultar(){
    document.getElementById("formulario").style.display="none"
}
