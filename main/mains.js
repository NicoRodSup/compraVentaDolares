// // class Cliente {
// //     constructor(nombre, direccion, dni) {
// //         this.nombre  = nombre;
// //         this.direccion  = direccion;
// //         this.dni = dni;
// //     }
// // }
// // //Declaramos un array de clientes para almacenar objetos
// // const clientes = [];
// // //push agregamos clientes
// // clientes.push(new Cliente("Nicolas Rodriguez","Campana 3557", "36807471"));
// // clientes.push(new Cliente("Romina Corda","Cullen 5134", "33409781"));
// // clientes.push(new Cliente("Martin Lutfi","Delgado 331" ,"28457162"));

// // // para ver la cantidad de clientes que hay //
// // console.log(Cliente.length);

// // // Me saca el ultimo cliente
// // clientes.pop()
// // console.log(clientes)

// // console.log( clientes.includes('Nicolas Rodriguez') );

// // class Sucursal {
// //     constructor(nombre,direccion,horario){
// //         this.nom=nombre;
// //         this.dir=direccion;
// //         this.hor=horario;
// //         this.info=`Nombre: ${this.nom}\nDireccion: ${this.dir}\nHorario: ${this.hor}`;
// //     }

// //         info(){
// //         return `
// //         Sucursales:${this.info}
// //         `
// //     }
// // }
// // sucursal1=new Sucursal("Sucursal Balvanera","Avenida Belgrano 2590","09 a 16hs");
// // sucursal2=new Sucursal("Sucursal Devoto","Cuenca 3420", "10 a 17:30hs");
// // sucursal3=new Sucursal("Sucursal Almagro","Avenida Rivadavia 4500","10 a 15:30 hs");
// // sucursal4=new Sucursal("Sucursal Ramos Mejia", "Avenida de Mayo 1364","11 a 16:30hs");

// // console.log(`
// // ${sucursal1.info()}
// // `)


// // class Sucursal {
// //     constructor(nombre,direccion,horario){
// //         this.nom=nombre;
// //         this.dir=direccion;
// //         this.hor=horario;
// //         this.info=`Nombre: ${this.nom}\nDireccion: ${this.dir}\nHorario: ${this.hor}`;
// //     }
// // }

// // const sucursal1=new Sucursal("Sucursal Balvanera","Avenida Belgrano 2590","09 a 16hs");
// // const sucursal2=new Sucursal("Sucursal Devoto","Cuenca 3420", "10 a 17:30hs");
// // const sucursal3=new Sucursal("Sucursal Almagro","Avenida Rivadavia 4500","10 a 15:30 hs");
// // const sucursal4=new Sucursal("Sucursal Ramos Mejia", "Avenida de Mayo 1364","11 a 16:30hs");

// // Sucursal.forEach((suc)=>{
// //     console.log(suc);
// // })

// const sukursales =[{nombre:"Sucursal Balvanera",direccion:"Avenida Belgrano 2590",horario:"09 a 16hs"},
//                 {nombre:"Sucursal Devoto",direccion:"Cuenca 3420",horario:"10 a 17:30hs"},
//                 {nombre:"Sucursal Almagro",direccion:"Avenida Rivadavia 4500",horario:"10 a 15:30hs"},
//                 {nombre:"Sucursal Ramos Mejia ",direccion:"Avenida de Mayo 1364",horario:"11 a 16:30hs"}]
  
//                 sukursales.forEach((suc)=>{
//                     console.log(suc);
//                 })

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

// ¿ Porque m puedo buscar con el metodo include? 
console.log(clientes.includes("Delgado"));
