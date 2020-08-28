import React, { useState, useContext, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import {
  ContainerPesquisa,
  Pesquisa,
  Cadastrar,
  Container,
  SubContainer,
  Principal,
  ContainerSerachBar,
} from './styles';

interface Parameters {
  filtrar?(texto: string): string;
}

const SerachBar: React.FC<Parameters> = ({ filtrar }) => {
  const history = useHistory();
  return (
    <Container>
      <SubContainer>
        <Principal>
          <ContainerPesquisa>
            <Pesquisa>
              <input
                type="text"
                onChange={filtrar && (e => filtrar(e.target.value))}
              />
            </Pesquisa>
            <Cadastrar onClick={() => history.push('/Cadastro')}>
              Cadastrar
            </Cadastrar>
          </ContainerPesquisa>
        </Principal>
      </SubContainer>
    </Container>
  );
};

export default SerachBar;
