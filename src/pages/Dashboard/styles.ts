import styled from 'styled-components';

import BgNameAndTitleImg from '../../assets/background.png';

export const Container = styled.div`
  background-color: var(--backgroundMain);
  color: var(--textMain);
`;

export const NameAndTitle = styled.div`
  background: url(${BgNameAndTitleImg}) no-repeat fixed center;
  color: var(--textMain01);
  padding: 60px 0 60px 0;
  font-family: 'Cedarville Cursive', cursive;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 50px;
  }

  h2 {
    font-size: 36px;
  }
`;

export const Contact = styled.div`
  background-color: var(--backgroundMain01);
  color: var(--textMain01);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 30px 40px 30px;

  h1 {
    font-size: 50px;
    padding-bottom: 30px;
  }

  a {
    background-color: var(--contactLink);
    text-decoration: none;
    color: var(--textMain01);
    padding: 8px;
    border-radius: 10%;
    transition: background-color 0.2s;

    &:hover {
      background-color: #c82333;
    }
  }
`;
