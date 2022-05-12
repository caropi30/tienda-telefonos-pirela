import React from "react";
import { Carousel, Figure } from "react-bootstrap";
import desk1 from "../../assets/img/header/desk1.jpeg";
import desk2 from "../../assets/img/header/desk2.jpeg";
import desk3 from "../../assets/img/header/desk3.jpeg";

const ItemListContainerCarousel = () => {
  return (
    <>
      <Carousel className="text-center p-4">
        <Carousel.Item interval={4000}>
          <Figure>
            <img className="d-block w-100" src={desk1} alt="First slide" />
          </Figure>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <Figure>
            <img className="d-block w-100" src={desk2} alt="Second slide" />
          </Figure>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <Figure>
            <img className="d-block w-100" src={desk3} alt="Third slide" />
          </Figure>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default ItemListContainerCarousel;
