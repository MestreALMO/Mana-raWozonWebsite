import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import Img01 from '../../../../assets/Carousel/01.jpg';
import Img02 from '../../../../assets/Carousel/02.jpg';
import Img03 from '../../../../assets/Carousel/03.jpg';
import Img04 from '../../../../assets/Carousel/04.jpg';

import { Container, CarouselBox } from './styles';

const CarouselDiv: React.FC = () => {
  return (
    <>
      <Container>
        <h1>My Projects</h1>

        <CarouselBox>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={Img01} alt="First slide" />
              {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Img02} alt="Second slide" />

              {/* <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Img03} alt="Third slide" />

              {/* <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Img04} alt="Third slide" />

              {/* <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption> */}
            </Carousel.Item>
          </Carousel>
        </CarouselBox>
      </Container>
    </>
  );
};

export default CarouselDiv;
