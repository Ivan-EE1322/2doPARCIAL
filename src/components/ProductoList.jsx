import ProductoCard from "./ProductoCard";

function ProductoList({ productos, carrito, agregarProducto }) {
  return (
    <div className="productos-grid">
      {productos.map((producto) => (
        <ProductoCard
          key={producto.id}
          producto={producto}
          agregarProducto={agregarProducto}
          agregado={carrito.some(
            (item) => item.id === producto.id
          )}
        />
      ))}
    </div>
  );
}

export default ProductoList;