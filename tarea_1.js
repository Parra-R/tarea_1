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