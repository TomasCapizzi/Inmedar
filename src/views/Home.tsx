
//type Props = {}

import Portada from "../components/Home/Portada";
import Inmedar from "../components/Home/Inmedar";
import Servicios from "../components/Home/Servicios";
import Contacto from "../components/Home/Contacto";

export default function Home() {
  return (
    <div className='home'>
      <Portada/>
      <Inmedar/>
      <Servicios/>
      <Contacto/>
    </div>
  )
}