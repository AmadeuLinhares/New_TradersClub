import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgb(24, 34, 44);
  display: grid;
  grid-template-columns: auto 360px auto;
  padding: 20px;

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
  grid-area: 1/2/2/3;
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
`;

export const ContainerSerachBar = styled.div`
  display: grid;
`;

export const ContainerPesquisa = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1440px) {
  }
`;
export const Pesquisa = styled.div`
  width: 70%;
  border: solid 1px white;
  height: 40px;
  background-color: transparent;
  input {
    height: 100%;
    background-color: transparent;
    border: none;
    width: 100%;
    padding-left: 10px;
  }

  @media only screen and (min-width: 1200px) {
    width: 80%;
    border: solid 1px white;
    height: 60px;
    background-color: transparent;
    input {
      height: 100%;
      background-color: transparent;
      border: none;
      width: 100%;
      padding-left: 10px;
    }
  }
  @media only screen and (min-width: 1440px) {
    width: 80%;
    border: solid 1px white;
    height: 60px;
    background-color: transparent;
    input {
      height: 100%;
      background-color: transparent;
      border: none;
      width: 100%;
      padding-left: 10px;
    }
  }
`;
export const Cadastrar = styled.button.attrs(props => ({
  type: 'button',
}))`
  width: 80px;
  height: 40px;
  border-radius: 5px;
  background-color: white;
  font-size: 14px;

  @media only screen and (min-width: 1200px) {
    width: 170px;
    height: 60px;
    border-radius: 5px;
    background-color: white;
    font-size: 14px;
  }
  @media only screen and (min-width: 1440px) {
    width: 170px;
    height: 60px;
    border-radius: 5px;
    background-color: white;
    font-size: 14px;
    font-size: 20px;
  }
`;
