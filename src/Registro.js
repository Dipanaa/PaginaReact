import Form from 'react-bootstrap/Form';
import './estilos.css/registro.css';
import caballeroconpizza from './imagenes/ccp.jpg';
import './estilos.css/mediaquery-r.css';

function Registro() {
  return (
    <div className='container-r-p'>
      <div className='container-r-1'>
        <h1 style={{fontSize:'3vw', color:'white'}}>
          ¿Quieres ser parte de nuestro equipo?
        </h1>
      </div>
      <div style={{backgroundImage: `url(${caballeroconpizza})`, backgroundPosition: 'center', backgroundSize: 'cover'}} className='container-r-2 ocultar'></div>
      <div className='container-r-3'>
      <Form>
        <Form.Group style={{color:'white'}} className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label style={{fontSize:'2vw', color:'white'}}>Deja tu correo electronico aqui!!</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group style={{color:'white'}} className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label style={{fontSize:'2vw', color:'white'}}>Cuentanos sobre ti!!</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
      </div>
    </div>

  );
}

export default Registro;