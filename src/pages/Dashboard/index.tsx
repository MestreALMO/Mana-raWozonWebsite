import React from 'react';

import instagram from '../../assets/instagram.png';

import CarouselDiv from './Components/Carousel';
import About from './Components/About';

import { Container, NameAndTitle, Contact } from './styles';

const Dashboard: React.FC = () => (
  <>
    <Container>
      <NameAndTitle>
        <h1>Manaíra Wozon</h1>
        <h2>Architect</h2>
      </NameAndTitle>

      <About />

      <CarouselDiv />

      <Contact>
        <h1>Contacts</h1>
        <a href="https://www.instagram.com/manawozon.arq/">
          <img src={instagram} alt="Instagram" />
          <p>Instagram</p>
        </a>
      </Contact>
    </Container>
  </>
);

export default Dashboard;
