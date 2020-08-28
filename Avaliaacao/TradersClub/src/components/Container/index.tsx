import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, SubContainer, Principal, ContainerLogo } from './styles';
import SearchBar from '../SearcgBar';
import Logo from '../../assets/logo-tc.png';

const ContainerGlobal: React.FC = ({ children }) => {
  const history = useHistory();
  const screen = window.innerWidth;
  return (
    <>
      {screen > 1200 && (
        <ContainerLogo>
          <img src={Logo} alt="Logo" onClick={() => history.push('/')} />
        </ContainerLogo>
      )}

      {/* <SearchBar /> */}
      <Container>
        <SubContainer>
          <Principal>
            <div>{children}</div>
          </Principal>
        </SubContainer>
      </Container>
    </>
  );
};

export default ContainerGlobal;
