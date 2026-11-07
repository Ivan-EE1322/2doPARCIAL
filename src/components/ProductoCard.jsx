function ProductoCard({ producto, agregarProducto, agregado }) {
  return (
    <div className={`producto-card ${agregado ? "agregado" : ""}`}>
      <img src={producto.thumbnail} alt={producto.title} />

      <h3>{producto.title}</h3>

      <p>{producto.category}</p>

      <h3>$ {producto.price.toFixed(2)}</h3>

      <button
        onClick={() => agregarProducto(producto)}
        disabled={agregado}
      >
        {agregado ? "Agregado" : "Agregar al carrito"}
      </button>
    </div>
  );
}

export default ProductoCard;