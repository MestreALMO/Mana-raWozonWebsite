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
`;

export const CarouselBox = styled.div`
  padding: 0 10px;
  max-width: 1000px;
  height: 100%;
  width: 100%;
`;
