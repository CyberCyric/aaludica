import Carousel from "react-bootstrap/Carousel";
import slide1 from "./assets/slide1.jpg";
import slide2 from "./assets/slide2.jpg";
import slide3 from "./assets/slide3.jpg";
import slide4 from "./assets/slide4.jpg";

const CarouselSA = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={slide1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide3} alt="Third slide" />
      </Carousel.Item>      
      <Carousel.Item>
        <img className="d-block w-100" src={slide4} alt="Fourth slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselSA;
