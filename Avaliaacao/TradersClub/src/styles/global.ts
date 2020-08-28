import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500&display=swap');

*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body{
  -webkit-font-smoothing: antialiased;
  background-color:#1f2d40;
  color:#f5f5f5;
  font-family: 'Roboto', sans-serif;
  height: 100%;
  min-height: 100vh;
}

button{
  cursor: pointer;
  border: none;
  background-color: transparent;
}

input[type="text"]{
  font-size: 15px;
  color: white
}



  @media only screen and (min-width: 1200px) {

    button{
      font-size: 20px;
    }

      input[type="text"]{
        font-size: 20px;
        color: white
      }
  }
  @media only screen and (min-width: 1440px) {
      input[type="text"]{
        font-size: 20px;
        color: white
      }
  }

`;
