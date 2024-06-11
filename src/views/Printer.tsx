import Características from "../components/Impresora/Características";
import Contacto from "../components/Impresora/Contacto";
import Portada from "../components/Impresora/Portada";
import Productos from "../components/Impresora/Productos";

export default function Printer() {
  return (
    <div className="printer-view">
        <Portada/>
        <Características/>
        <Productos/>
        <Contacto/>
    </div>
  )
}