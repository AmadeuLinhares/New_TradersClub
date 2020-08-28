import styled, { css } from 'styled-components';

interface BtnParameters {
  tipoBtn: string;
}

export const Container = styled.div``;
export const SubContainer = styled.div``;
export const Button = styled.button<BtnParameters>`
  width: 100%;
  height: 40px;
  border: solid 1px white;

  ${props =>
    props.tipoBtn === 'Salvar'
      ? css`
          background-color: white;
          color: black;
        `
      : css`
          background-color: transparent;
          color: white;
        `}

  @media only screen and (min-width: 1200px) {
    height: 60px;
  }
  @media only screen and (min-width: 1440px) {
    height: 60px;
  }
`;
