import Portada from '../components/Portada'
import Características from '../components/Características'
import Inmedar from '../components/Inmedar'
import Productos from '../components/Productos'
import Contacto from '../components/Contacto'
import Footer from '../components/Footer';

//type Props = {}

export default function Home() {
  return (
    <div className='home'>
        <Portada/>
        <Características/>
        <Inmedar/>
        <Productos/>
        <Contacto/>
        <Footer/>
    </div>
  )
}