
const Productos=[
    {
        id: 1, 
        nombre: 'Leche',
        precio: 200
    },

    {
        id: 2, 
        nombre: 'Azucar',
        precio: 300
    },

    {
        id: 3, 
        nombre: 'Yerba',
        precio: 400
    },

    {
        id: 4,
        nombre: 'Fideos',
        precio: 350
    },

    {
        id: 5, 
        nombre: 'Pan',
        precio: 150
    }
] 

// muestra todo el arreglo
function mostrarListado (listado){
    console.log (listado)
}
//mostrarListado (Productos); 



function agregarProducto (id, nombre, precio, arreglo){
arreglo.push({id, nombre, precio});

    console.log (arreglo)
}

//agregarProducto (prompt("agregue el id del producto"), prompt("Especifique el producto"),(  prompt("Defina precio")), Productos);


function mostrarProducto (posicion, listado){
    console.log (listado [posicion])
}

//mostrarProducto (prompt ("Ingrese la posicion numero...."), Productos)


function modificarProducto (posicion, nombre, precio){
    let id=posicion + 1
    Productos [posicion]={id, nombre, precio}
    console.log(Productos)
}

//modificarProducto (prompt("ingrese posicion a modificar"), prompt ("Ingrese nombre del producto"), prompt ("Agregue precio"))

function Inicial (numero){ 
 if (numero==1){
    mostrarListado (Productos);
 } else if (numero==2) {
    agregarProducto (prompt("agregue el id del producto"), prompt("Especifique el producto"),( prompt("Defina precio")), Productos);
 } else if (numero==3){
    mostrarProducto (prompt ("Ingrese la posicion numero...."), Productos)
 } else if (numero==4){
    modificarProducto (prompt("ingrese posicion a modificar"), prompt ("Ingrese nombre del producto"), prompt ("Agregue precio"))
 }else (alert ("El valor ingresado es incorrecto"))
 }

 Inicial (prompt(`Ingrese una de las siguientes opciones: 
 1: Mostrar listado, 
 2: Agregar producto, 
 3: Mostrar producto, 
 4; Modificar producto`))