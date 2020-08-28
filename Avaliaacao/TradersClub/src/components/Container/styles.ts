import styled from 'styled-components';
import Background from '../../assets/background.png';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 360px auto;

  @media only screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: auto 1000px auto;
  }
  @media only screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: auto 1200px auto;
  }
`;

/* ==================================== */
export const SubContainer = styled.div`
  display: grid;
  grid-area: 2/2/3/3;
  grid-template-columns: auto 330px auto;
  grid-auto-rows: auto;

  @media only screen and (min-width: 1200px) {
    grid-area: 1/2/2/3;
    display: grid;
    grid-template-columns: auto 930px auto;
  }
  @media only screen and (min-width: 1440px) {
    grid-area: 1/2/2/3;
    display: grid;
    grid-template-columns: auto 1024px auto;
  }
`;

export const Principal = styled.div`
  grid-area: 1/2/2/3;

  display: grid;

  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1440px) {
  }
`;

export const ContainerLogo = styled.div`
  /* display: flex; */
  position: absolute;
  top: 0;
  left: 0;
  width: 120px;
  /* justify-content: flex-start;
  align-items: center; */
  height: 100vh;
  background-color: rgb(16, 23, 31);

  img {
    display: block;
    top: 0;
    margin: 0 auto;
    margin-top: 20px;
    cursor: pointer;
  }
`;
