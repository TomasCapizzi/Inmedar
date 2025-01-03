import { gasoterapia } from '../../types/gasoterapia'
import { implante } from '../../types/implante'
import { unidadSuministro } from '../../types/unidadSuministro'

type Props = {
    prod: (gasoterapia | unidadSuministro | implante)
  }

export default function Producto({prod}: Props) {
  return (
    <div className='producto-item'>
        <div className='img-container'>
          <img src={prod.img} alt="producto" />
        </div>
        <div className='info-container'>
          <h4>{prod.nombre}</h4>
          <p>{prod.uso}</p>
        </div>
    </div>
  )
}