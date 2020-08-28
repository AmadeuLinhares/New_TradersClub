import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: solid 1px #fefefe;

  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1440px) {
  }
  cursor: pointer;
  :hover {
    transition: 0.4s;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
export const Veiculo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1440px) {
  }
`;
export const NomeValor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 14px;
  }
  @media only screen and (min-width: 1200px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 20px;
    }
  }
  @media only screen and (min-width: 1440px) {
  }
`;
export const DescricaoANo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  h2 {
    font-size: 12px;
  }
  @media only screen and (min-width: 1200px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    h2 {
      font-size: 16px;
    }
  }
  @media only screen and (min-width: 1440px) {
  }
`;
