import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Img01 from '../../../../assets/Carousel/01.jpg';
import Img02 from '../../../../assets/Carousel/02.jpg';
import Img03 from '../../../../assets/Carousel/03.jpg';
import Img04 from '../../../../assets/Carousel/04.jpg';

import { Container, ImageCarousel } from './styles';

const CarouselDiv: React.FC = () => {
  return (
    <>
      <Container>
        <h1>My Projects</h1>

        <Carousel showArrows infiniteLoop autoPlay emulateTouch>
          <ImageCarousel>
            <img src={Img01} alt="Img 01" />
            <p className="legend">Legend 1</p>
          </ImageCarousel>
          <ImageCarousel>
            <img src={Img02} alt="Img 02" />
            <p className="legend">Legend 2</p>
          </ImageCarousel>
          <ImageCarousel>
            <img src={Img03} alt="Img 03" />
            <p className="legend">Legend 3</p>
          </ImageCarousel>
          <ImageCarousel>
            <img src={Img04} alt="Img 04" />
            <p className="legend">Legend 4</p>
          </ImageCarousel>
        </Carousel>
      </Container>
    </>
  );
};

export default CarouselDiv;
