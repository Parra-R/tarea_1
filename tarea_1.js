// 🏆 Desafío 1: El Sistema de "Carrito del CarrerCei"

// Objetivo: Aplicar variables (const/let), funciones con parámetros, objetos y manipulación de arrays.

// 📝 Enunciado

// Crea un array de objetos llamado inventario. Cada objeto debe representar un producto con: nombre, precio y stock. (Añade al menos 3 productos).Crea una función llamada agregarCarrito que reciba dos parámetros: el nombre del producto y la cantidad deseada.Dentro de la función:

//     Busca el producto en el inventario.
//     Si el producto existe y hay stock suficiente, imprime en consola el total a pagar (precio * cantidad).
//     Si no hay stock, imprime un mensaje de advertencia.

// Extra: Usa un Template Literal para mostrar el mensaje final: "Has comprado [X] unidades de [Producto] por un total de $[Total]".

// Debes subirlo a un proyecto en tu Github (aprovechen para usar ramas)

const inventario=[
    {"nombre":"Producto1", "precio": 120, "stock":2},
    {"nombre":"Producto2", "precio": 140, "stock":3},
    {"nombre":"Producto3", "precio": 80, "stock":1}
]
function agregarCarrito (nombreProducto, cantidadDeseada){
    const producto = inventario.find((item)=>item.nombre === nombreProducto);

    if(!producto){
        console.warn(`El producto ${nombreProducto} no existe`);
        return
    }

    if(producto.stock < cantidadDeseada){
        console.warn(`No hay suficiente stock disponible, sentimos las molestias`);
        return
    }

    const total = producto.precio * cantidadDeseada;

    console.log(`Has comprado ${cantidadDeseada} unidades del ${producto.nombre}, su total es de ${total} €`)
}

agregarCarrito("Producto1", 2)