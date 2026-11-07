function CarritoPanel({ carrito, quitarProducto, vaciarCarrito }) {
  const total = carrito.reduce(
    (suma, producto) => suma + producto.price,
    0
  );

  return (
    <div className="carrito-panel">
      <h2>Carrito de compras</h2>

      <h3>Productos: {carrito.length}</h3>

      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          {carrito.map((producto) => (
            <div key={producto.id} className="carrito-item">
              <p>{producto.title}</p>

              <p>$ {producto.price.toFixed(2)}</p>

              <button onClick={() => quitarProducto(producto.id)}>
                Quitar
              </button>
            </div>
          ))}

          <button onClick={vaciarCarrito}>
            Vaciar carrito
          </button>
        </>
      )}

      <h2>Total: $ {total.toFixed(2)}</h2>
    </div>
  );
}

export default CarritoPanel;