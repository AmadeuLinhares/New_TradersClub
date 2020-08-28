import styled from 'styled-components';

export const ContainerHome = styled.div`
  /* border: solid 1px red; */
  height: 500px;
  display: flex;
  justify-content: center;
  align-self: center;
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1440px) {
  }
`;
// export const ContainerTituloHome = styled.div`
//   @media only screen and (min-width: 1200px) {
//   }
//   @media only screen and (min-width: 1440px) {
//   }
// `;
export const Titulo = styled.h1`
  line-height: 60px;
  text-align: right;
  padding-top: 80px;
  @media only screen and (min-width: 1200px) {
    line-height: 90px;
    text-align: right;
    padding-top: 80px;
    font-size: 60px;
    width: 800px;
  }
  @media only screen and (min-width: 1440px) {
  }
  span {
    background-color: rgb(39, 65, 94);
    padding: 5px;
  }
`;
export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 80px;
  border-radius: 5px;
  cursor: pointer;

  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1440px) {
  }
`;
