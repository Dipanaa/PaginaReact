import Carousel from "react-bootstrap/Carousel";
import pizza from'./imagenes/Pizza_Tomatoes_547600_1920x1080.jpg';
import pizza2 from './imagenes/991307 editada.jpg';
import delivery from './imagenes/Delivery_Rowan_Freeman_Unsplash.jpeg';
import React from "react";


function Inicio() {
  return (
    <div>
      <Carousel>
        <Carousel.Item >
          <img style={{width:'100vw',height:'55vw'}} className="d-block w-100" src={pizza} alt="Imagen 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img style={{width:'100vw',height:'55vw'}} className="d-block w-100" src={pizza2} alt="Imagen 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img style={{width:'100vw',height:'55vw'}} className="d-block w-100" src={delivery} alt="Imagen 3" />
        </Carousel.Item>
      </Carousel>
    </div>
   
  );
}

export default Inicio;