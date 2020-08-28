import styled from 'styled-components';

export const Container = styled.div`
  height: 40px;
  width: 100%;
  border-bottom: solid 1px white;
`;
export const Subcontianer = styled.div`
  height: 100%;
  width: 100%;
`;
export const Input = styled.input`
  border: none;
  padding-left: 10px;
  width: 100%;
  height: 100%;
  background-color: transparent;
  color: white;
  ::placeholder {
    color: white;
    padding-bottom: 5px;
    font-size: 15px;
  }

  @media only screen and (min-width: 1200px) {
    ::placeholder {
      color: white;
      padding-bottom: 5px;
      font-size: 25px;
    }
    font-size: 25px;
  }
  @media only screen and (min-width: 1440px) {
  }
`;
