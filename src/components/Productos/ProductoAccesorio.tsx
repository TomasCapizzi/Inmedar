import { accesorio } from "../../types/accesorio"

type Props = {
    prod: accesorio
  }

export default function ProductoAccesorio({prod}: Props) {
  return (
    <div className='producto-item'>
        <div className='img-container'>
          <img src={prod.img} alt="producto" />
        </div>
        <div className='info-container'>
          <h4>{prod.nombre}</h4>
          <p>{prod.descripcion}</p>
        </div>
    </div>
  )
}