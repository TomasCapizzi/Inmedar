//type Props = {}

import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { useRef } from "react";


export default function Menu() {
  const menuRef = useRef<HTMLUListElement>(null);

  function toggleMenu(){
    menuRef.current ? menuRef.current.classList.toggle('hide') : null
  }

  return (
    <nav className='navbar'>
      <Link to={'/'}>
        <img src="./img/logo/INMEDAR PNG.png" alt="inmedar logotipo" />
      </Link>
      <TiThMenu className="menu-hamb" onClick={toggleMenu}/>
      <ul className="menu-list">
          <a href="/#inmedar">
            <li>¿Quiénes somos?</li>
          </a>
          <Link to={'/productos'}>
            <li>Productos</li>
          </Link>
          <Link to={'/impresora'}>
            <li>Implantes</li>
          </Link>
          <a href="/#contacto"><li>Contacto</li></a>
      </ul>
      <ul className="menu-responsive hide" ref={menuRef}>
          <a href="/#inmedar">
            <li>¿Quiénes somos?</li>
          </a>
          <Link to={'/productos'}>
            <li>Productos</li>
          </Link>
          <Link to={'/impresora'}>
            <li>Implantes</li>
          </Link>
          <a href="/#contacto"><li>Contacto</li></a>
      </ul>
    </nav>
  )
}

