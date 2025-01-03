import {useState, useEffect} from 'react'
import Producto from './Producto'
import { productos } from '../../data/productos'
import { implante } from '../../types/implante'

//type Props = {}

export default function Productos() {

    const [ProductosArr, setProductosArr] = useState<implante[]>([]);

    useEffect(()=>{
      setProductosArr(productos);
    }, [])

  return (
    <div className='productos-container'>
      <article className='productos'>
        <h3>Nuestros Productos</h3>
        <ul>
            {
              ProductosArr.map(
                producto => <Producto prod={producto} />
              )
            }
        </ul>
      </article>
    </div>
  )
}