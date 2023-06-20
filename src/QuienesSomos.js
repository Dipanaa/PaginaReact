import './estilos.css/index.css';
import './estilos.css/quienessomos.css';
import './estilos.css/mediaquery-q.css';
import Card from 'react-bootstrap/Card';
import caballerosabrazo from './imagenes/caballeroscomiendopizzaaaaaaaaaaaaaaaaaa.jpg';
import caballeroapuntando from './imagenes/caballero apuntandooooooooo.png';
import caballerodelivery from './imagenes/caballero delivery.jpg'
import caballeroshappy from './imagenes/caballeros del abrazo.jpg'


function QuienesSomos() {
  return (
    <div className='container-q-p'>
      <div className='container-qc-1'>
        <div className='container-qc-1-c1'>
          <div className='container-qc-1-c1-1'>
            <h1 style={{fontSize:'2.3vw', color:'white'}}> Acerca de nosotros</h1>
          </div>
          <div className='container-qc-1-c1-2'>
            <p style={{fontSize:'1.4vw', color:'white'}}>
              Somos una empresa que nacio el año 2023 con la idea de ofrecer uno de los mejores servicios en pizza. Nuestro enfoque principal es brindar ricos productos caseros a la comodidad de tu hogar o bien disfrutarlo en nuestros diversos locales a lo largo de Chile.
            </p>
          </div>
        </div>
        <div style={{backgroundImage: `url(${caballerosabrazo})`, backgroundPosition: 'center', backgroundSize: 'cover'}} className='container-qc-1-c2'></div>
      </div>
      <div className='container-qc-2'>
        <h1 style={{fontSize:'2.3vw', color:'white'}}> Nuestros principios</h1>
      </div>
      <div className='container-qc-3'>
        <div className='container-qc-3-allchilds imagenes-1'>
          <div className='ocultar-d'>
            <h1 style={{color:'white',marginTop:'13vw',fontSize:'5vw'}}>Seguridad</h1>
          </div>
          <Card style={{ width: '15vw',height:'auto' }} className='ocultar'>
            <Card.Img variant="top" src={caballeroapuntando} />
            <Card.Body style={{color:'white',background:'black'}}>
              <Card.Title style={{fontSize:'1.5vw'}}>Seguridad</Card.Title>
                <Card.Text style={{fontSize:'1vw'}}>
                  Entregamos seguridad en que tus productos son 100% caseros y estan hechos con cariño.
                </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='container-qc-3-allchilds imagenes-2'>
          <div className='ocultar-d'>
            <h1 style={{color:'white',marginTop:'13vw',fontSize:'5vw'}}>Confianza</h1>
          </div>
          <Card style={{ width: '15vw',height:'auto' }} className='ocultar'>
            <Card.Img variant="top" src={caballeroshappy} />
            <Card.Body style={{color:'white',background:'black'}}>
              <Card.Title style={{fontSize:'1.5vw'}}>Confianza</Card.Title>
                <Card.Text style={{fontSize:'1vw'}}>
                  Si necesitas dejar alguna critica de cualquier tipo, te brindamos nuestros diferentes canales de contacto para que puedas dejar lo que piensas
                </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='container-qc-3-allchilds imagenes-3'>
          <div className='ocultar-d'>
            <h1 style={{color:'white',marginTop:'13vw',fontSize:'5vw'}}>Rapidez</h1>
          </div> 
          <Card style={{ width: '15vw',height:'auto' }} className='ocultar'>
              <Card.Img variant="top" src={caballerodelivery} />
              <Card.Body style={{color:'white',background:'black'}}>
                <Card.Title style={{fontSize:'1.5vw'}}>Rapidez</Card.Title>
                  <Card.Text style={{fontSize:'1vw'}}>
                    Aca trabajamos con pasion y destreza por lo que te entregaremos el mejor servicio en el menor tiempo posible.
                  </Card.Text>
              </Card.Body>
          </Card>
        </div>
      </div>
    </div>
    
  );
}

export default QuienesSomos;
