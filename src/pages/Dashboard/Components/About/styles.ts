import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--backgroundMain01);
  color: var(--textMain01);
  padding: 60px 30px 100px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 50px;
    margin-bottom: 25px;
  }
`;

export const ContentAbout = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    align-items: center;
    flex-direction: column;
  }

  img {
    width: 100%;
    height: 100%;
    max-width: 600px;
    border-radius: 10%;
  }

  div {
    padding: 10px 20px;
    font-size: 25px;

    p {
      font-family: sans-serif;
      text-indent: 3rem;
    }
  }
`;
