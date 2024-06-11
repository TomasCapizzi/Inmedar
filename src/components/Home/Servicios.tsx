import Servicio from "./Servicio";
import { servicios } from "../../data/servicios";
import { useState } from "react";
import { servicio } from "../../types/servicio";

export default function Servicios() {
    const [serviciosState] = useState<servicio[]>(servicios)
  return (
    <div className="servicios-container">
        {
            serviciosState.map(
                serv => <Servicio titulo={serv.titulo} texto={serv.texto} img={serv.img} key={serv.id}/>
            )
        }
    </div>
  )
}