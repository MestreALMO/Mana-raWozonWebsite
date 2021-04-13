import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--backgroundMain02);
  color: var(--textMain01);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 0 60px 0;

  h1 {
    font-size: 50px;
    padding-bottom: 16px;
  }

  .carousel-root {
    max-width: 1000px;
    padding: 0 30px 0 30px;
  }
`;

export const ImageCarousel = styled.div`
  position: relative;
`;
