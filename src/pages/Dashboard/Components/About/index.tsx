import React from 'react';
import manaira from '../../../../assets/manaira.jpg';

import { Container, ContentAbout } from './styles';

const About: React.FC = () => (
  <Container>
    <h1>About me</h1>

    <ContentAbout>
      <img src={manaira} alt="Manaíra" />
      <div>
        <p>
          Architecture is both the process and the product of planning,
          designing, and constructing buildings or other structures.[3]
          Architectural works, in the material form of buildings, are often
          perceived as cultural symbols and as works of art. Historical
          civilizations are often identified with their surviving architectural
          achievements.
        </p>
        <p>
          The practice, which began in the prehistoric era, has been used as a
          way of expressing culture for civilizations on all seven
          continents.[5] For this reason, architecture is considered to be a
          form of art. Texts on architecture have been written since ancient
          time. The earliest surviving text on architectural theory is the 1st
          century AD treatise De architectura by the Roman architect Vitruvius,
          according to whom a good building embodies firmitas, utilitas, and
          venustas (durability, utility, and beauty). Centuries later, Leon
          Battista Alberti developed his ideas further, seeing beauty as an
          objective quality of buildings to be found in their proportions.
          Giorgio Vasari wrote Lives of the Most Excellent Painters, Sculptors,
          and Architects and put forward the idea of style in the arts in the
          16th century. In the 19th century, Louis Sullivan declared that
          &quot;form follows function&quot;. &quot;Function&quot; began to
          replace the classical &quot;utility&quot; and was understood to
          include not only practical but also aesthetic, psychological and
          cultural dimensions. The idea of sustainable architecture was
          introduced in the late 20th century.
        </p>
      </div>
    </ContentAbout>
  </Container>
);

export default About;
