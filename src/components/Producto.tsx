import React from 'react'
import { producto } from '../types/producto'

type Props = {
  prod: producto
}

export default function Producto({prod}: Props) {
  return (
    <div className='producto'>
      <h4>{prod.name}</h4>
      <img src={prod.img} alt="producto" />
    </div>
  )
}