import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';


import Barbershop1 from '../img/carusel/fcscreen.jpg' 
import Barbershop2 from '../img/carusel/fscreen.jpg' 
import Barbershop3 from '../img/carusel/ksv23xmv.jpg' 

const CarouselBox = () => {
  const captionStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  };

  const h1Style = {
    fontSize: "40px",
  };

  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src={Barbershop1} />
        <Carousel.Caption style={captionStyle}>
          <h1 style={h1Style}>Chester Barbershop</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src={Barbershop2} />
        <Carousel.Caption style={captionStyle}>
          <h1 style={h1Style}>A welcoming and friendly atmosphere</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Barbershop3} />
        <Carousel.Caption style={captionStyle}>
          <h1 style={h1Style}>A glass of scotch whisky for every visitor</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};



export default CarouselBox