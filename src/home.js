import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuNav from './MenuNav';
import Registro from './Registro';
import QuienesSomos from './QuienesSomos';
import Inicio from './Inicio';
import 'bootstrap/dist/css/bootstrap.css';
import './estilos.css/index.css';

function Home() {
  return (
    <body>
      <Router>
          <MenuNav/>
              <Routes>
                  <Route index element={<Inicio />}/>
                  <Route path="/inicio" element={<Inicio />}/>
                  <Route path="/registro" element={<Registro />}/>
                  <Route path="/quienessomos" element={<QuienesSomos />}/> 
              </Routes>
      </Router>
      <div className='piePagina-1'>
        <div className='centrarTexto-f'>
          <h1 style={{fontSize:'1vw', color:'white'}}>
            @Desarrollado por Diego Guerra todos los derechos reservados
          </h1>
        </div>
      </div> 
    </body>
    
  );
}

export default Home;