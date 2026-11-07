import { useState } from "react";
import { useProductos } from "./hooks/useProductos";
import ProductoList from "./components/ProductoList";
import CarritoPanel from "./components/CarritoPanel";

function TiendaApp() {
  const { productos, cargando, error } = useProductos();

  const [carrito, setCarrito] = useState([]);

  function agregarProducto(producto) {
    setCarrito((actual) => {
      if (actual.some((item) => item.id === producto.id)) {
        return actual;
      }

      return [...actual, producto];
    });
  }

  function quitarProducto(id) {
    setCarrito((actual) =>
      actual.filter((producto) => producto.id !== id)
    );
  }

  function vaciarCarrito() {
    setCarrito([]);
  }

  if (cargando) {
    return <h2>Cargando...</h2>;
  }

  if (error) {
    return <h2 className="error">{error}</h2>;
  }

  return (
    <div className="tienda">
      <header>
        <h1>MINI TIENDA</h1>
        <p>Bienvenido a nuestra tienda online</p>
      </header>

      <main className="contenido">
        <section>
          <h2>Productos disponibles</h2>

          <ProductoList
            productos={productos}
            carrito={carrito}
            agregarProducto={agregarProducto}
          />
        </section>

        <aside>
          <CarritoPanel
            carrito={carrito}
            quitarProducto={quitarProducto}
            vaciarCarrito={vaciarCarrito}
          />
        </aside>
      </main>
    </div>
  );
}

export default TiendaApp;