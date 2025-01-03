import { implante } from '../../types/implante'

type Props = {
  prod: implante
}

export default function Producto({prod}: Props) {
  return (
    <div className='producto'>
      <h4>{prod.nombre}</h4>
      <img src={prod.img} alt="producto" />
    </div>
  )
}