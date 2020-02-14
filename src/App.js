import React,{Fragment,useState} from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Producto from './Components/Producto';
import Carrito from './Components/Carrito';


function App() {

  //Crear lista de productos
  const [productos,setProductos] = useState([
    {id : 1,nombre:'Camisa React.js',precio:50},
    {id : 2,nombre:'Camisa VUE.js',precio:40},
    {id : 3,nombre:'Camisa Node.js',precio:30},
    {id : 4,nombre:'Camisa Angular',precio:20}
  ]);
  //state para un carrito de compras

  const [carrito,agregarProducto] = useState([]);

  //obtener la fecha
  const fecha = new Date().getFullYear();
  return (
    <Fragment>
      <Header 
        titulo="Tienda Virtual Title"
      />
      <h1>Lista de Produtos</h1>
      {productos.map(producto => (
        <Producto
          producto={producto}
          key={producto.id}
          carrito={carrito}
          productos ={productos}
          agregarProducto={agregarProducto}
        />
      ))}
      <Carrito
        carrito={carrito}
        agregarProducto={agregarProducto}
      />
      <Footer
        fecha = {fecha}
      />
    </Fragment> 
  );
}
export default App;
