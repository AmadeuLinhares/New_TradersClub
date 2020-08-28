import styled from 'styled-components';

export const ContainerCadastro = styled.div`
  display: grid;
  row-gap: 20px;
  margin-top: 50px;
  @media only screen and (min-width: 1200px) {
    row-gap: 50px;
  }
  @media only screen and (min-width: 1440px) {
  }
`;
export const ContainerTextError = styled.div`
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1440px) {
  }
`;

export const ContainerInputs = styled.div`
  display: grid;
  grid-auto-rows: auto;
  row-gap: 10px;

  @media only screen and (min-width: 1200px) {
    display: grid;
    grid-auto-rows: auto;
    row-gap: 60px;
  }
  @media only screen and (min-width: 1440px) {
  }
`;

export const NomeVeiculo = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  width: 100%;
  row-gap: 10px;

  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1440px) {
  }
`;
export const ModeloAno = styled.div`
  row-gap: 10px;
  display: grid;
  @media only screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(2, auto);
    column-gap: 80px;
    row-gap: 40px;
  }
  @media only screen and (min-width: 1440px) {
  }
`;
export const Marca = styled.div`
  row-gap: 10px;
  display: grid;
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1440px) {
  }
`;
export const Caracteristicas = styled.div`
  row-gap: 10px;
  display: grid;
  @media only screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(2, auto);
    column-gap: 80px;
    row-gap: 60px;
  }
  @media only screen and (min-width: 1440px) {
  }
`;
export const ContainerButtons = styled.div`
  row-gap: 10px;
  display: grid;

  @media only screen and (min-width: 1200px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
  }
  @media only screen and (min-width: 1440px) {
  }
`;
export const RemoveButtons = styled.div`
  row-gap: 20px;
  display: grid;
  @media only screen and (min-width: 1200px) {
    width: auto;
    grid-template-columns: 200px 200px;
    column-gap: 20px;
  }
  @media only screen and (min-width: 1440px) {
  }
`;
export const SavedButtons = styled.div`
  row-gap: 20px;
  display: grid;
  @media only screen and (min-width: 1200px) {
    width: 200px;
  }
  @media only screen and (min-width: 1440px) {
  }
`;
