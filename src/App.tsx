import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import './styles/_main.scss';
import Home from './views/Home';
import Printer from './views/Printer';
import Footer from './components/Footer';
import Productos from './views/Productos';

function App() {

  return (
    <>      
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/impresora' element={<Printer/>}/>
          <Route path='/productos' element={<Productos/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>


    </>
  )
}

export default App
