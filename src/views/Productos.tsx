import { useState, useEffect } from "react";
import { productos } from '../data/productos'
import { producto } from '../types/producto'
import Producto from "../components/Productos/Producto";

export default function Productos() {
    const [ProductosArr, setProductosArr] = useState<producto[]>([]);

    useEffect(()=>{
      setProductosArr(productos);
    }, [])
  return (
    <div className="productos-view-container">
        <h1>Productos</h1>
        <ul className="productos-list">
            {
              ProductosArr.map(
                producto => <Producto prod={producto} />
              )
            }
        </ul>
    </div>
  )
}