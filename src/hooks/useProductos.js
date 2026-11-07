import { useEffect, useState } from "react";
import { fetchProductos } from "../services/fetchProductos";

export function useProductos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function cargar() {
      try {
        setCargando(true);
        setError("");

        const datos = await fetchProductos();
        setProductos(datos);
      } catch (error) {
        setError("Error: No hay conexión a Internet.");
      } finally {
        setCargando(false);
      }
    }

    cargar();
  }, []);

  return { productos, cargando, error };
}