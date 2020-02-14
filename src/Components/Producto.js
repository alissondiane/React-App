import React from 'react'

const Producto = ({producto,carrito,agregarProducto,productos}) =>{

    const {nombre,precio,id} = producto;

    //agregar producto al carrito
    const seleccionarProducto = id=>{
        const producto = productos.filter(producto =>producto.id === id)[0];
        console.log(producto[0]);
        agregarProducto(
            //.. indica tomar una copia de carrito.
            [
                ...carrito,
                producto
            ]
        );
    };
    //eliminar un producto del carrito
    const eliminarProducto = id=>{
        const productos = carrito.filter(producto =>producto.id !== id)[0];
        //colocar los productos en el state

        console.log(producto[0]);
        agregarProducto(productos);
    };
    return(
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
            {productos?
             (<button 
                type="button"
                onClick={()=> seleccionarProducto(id)}
            >Comprar</button>)
            :
            (<button 
                type="button"
                onclick={()=> eliminarProducto(id)}
            >Eliminar</button>)

            }
            
        </div>
    );
}

export default Producto;