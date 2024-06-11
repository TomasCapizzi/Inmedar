//type Props = {}

import { Link } from "react-router-dom"

export default function Menu() {
  return (
    <nav className='navbar'>
      <Link to={'/'}>
        <img src="./img/logo/INMEDAR PNG.png" alt="inmedar logotipo" />
      </Link>
      <ul>
          <a href="#inmedar">
            <li>¿Quiénes somos?</li>
          </a>
          <Link to={'/impresora'}>
            <li>Implantes</li>
          </Link>
          <Link to={'/productos'}>
            <li>Productos</li>
          </Link>
          <a href="#contacto"><li>Contacto</li></a>
      </ul>
    </nav>
  )
}

