import React, { useContext, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ContainerHome, Titulo, ContainerButton } from './styles';
import Container from '../../components/Container';
import Button from '../../components/Buttons';
import * as CarsActions from '../../store/modules/carros/actions';
import * as BrandsActions from '../../store/modules/marcas/actions';
import api from '../../services/api';
import SearchBar from '../../components/SearcgBar';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const carrosLocalStorage = localStorage.getItem('@listaCarros');
    const marcasLocalStorage = localStorage.getItem('@listaMarcas');
    if (carrosLocalStorage) {
      JSON.parse(carrosLocalStorage).map((list: Object) =>
        dispatch(CarsActions.AddCarSuccess(list)),
      );
    } else {
      dispatch(CarsActions.AddCarRequest());
    }

    if (marcasLocalStorage) {
      JSON.parse(marcasLocalStorage).map((list: Object) =>
        dispatch(BrandsActions.AddBrandsSuccess(list)),
      );
    } else {
      dispatch(BrandsActions.AddBrandsRequest());
    }
  }, []);

  const hisoty = useHistory();
  return (
    <>
      <SearchBar />
      <Container>
        <ContainerHome>
          <Titulo>
            Pesquisa de veículas do <span>TradersClub</span>
          </Titulo>
        </ContainerHome>
        <ContainerButton>
          <Button
            style={{
              width: '150px',
              borderRadius: '5px',
            }}
            tipo="Salvar"
            onClick={() => hisoty.push('/Listagem')}
          >
            Listar Carros
          </Button>
        </ContainerButton>
      </Container>
    </>
  );
};

export default Home;
