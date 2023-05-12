const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", enviarFormulario)

function enviarFormulario(e){
    e.preventDefault();
    const nombre= document.querySelector("#nombre").value;
    if(nombre ==""){
        alert("Su nombre no puede estar vacio");
        document.getElementById("nombre").focus();
    }else{
    document.getElementById("nombre").value ="";
}
    const apellido = document.querySelector("#apellido").value;
    if(apellido ==""){
        alert("Su apellido no puede estar vacio");
        document.getElementById("apellido").focus();
    }else{
        document.getElementById("apellido").value ="";
    }

    const dni = document.querySelector("#dni").value;
    if(dni.length < 8 ){
    alert("Ingrese su DNI ");
    document.getElementById("dni").focus();
    }else{
    document.getElementById("dni").value ="";
    };

    let cantidad = document.getElementById("cantidad").value;

    if(document.getElementById("compra").checked){comprar()
    }
    else if(document.getElementById("venta").checked){vender()
    };    
    
    function comprar(){
        let cantidad = document.getElementById("cantidad").value;
        cantidad = 400 * cantidad;
        document.getElementById("cantidad").value="";
    };

    function vender(){
        let cantidad = document.getElementById("cantidad").value;
        console.log(400 * cantidad);
        document.getElementById("cantidad").value="";
    }
    

/*const sucursales =[
    {nombre:"Sucursal Balvanera",direccion:"Avenida Belgrano 2590",horario:"09 a 16hs"},
    {nombre:"Sucursal Devoto",direccion:"Cuenca 3420",horario:"10 a 17:30hs"},
    {nombre:"Sucursal Almagro",direccion:"Avenida Rivadavia 4500",horario:"10 a 15:30hs"},
    {nombre:"Sucursal Ramos Mejia ",direccion:"Avenida de Mayo 1364",horario:"11 a 16:30hs"}]
    
*/

const mostrarInfo = document.getElementById("mostrarInfo")
mostrarInfo.innerHTML = `Su operacion fue realizada con exito,tienes 24hs para acercarte a la sucursal seleccionada y finalizar la operacion  <br/> <br/> Nombre y Apellido: ${nombre} ${apellido} <br/> DNI: ${dni}<br/> Recibe una cantidad de : ${cantidad}   `
    
};
