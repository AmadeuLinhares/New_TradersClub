import React, { useContext, useEffect, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Veiculos from '../../components/ListaVeiculos';
import Container from '../../components/Container';
import { ListaVeiculosContainer, ContainerButton } from './styles';
import { RootState } from '../../store/modules/rootReducer';
import ButtonBack from '../../components/Buttons';
import SearchBar from '../../components/SearcgBar';

interface InfosCarRquestInterface {
  id: number;
  year: number;
  km: number;
  model: string;
  brand: string;
  price: number;
  title: string;
}

const Listagem: React.FC = () => {
  const listaCarros: InfosCarRquestInterface[] = useSelector(
    (state: RootState) => state.CarrosList,
  );

  const [palavrasChaves, setPalavrasChaves] = useState('');
  const [filtro, setFiltro] = useState(
    listaCarros as InfosCarRquestInterface[],
  );

  useEffect(() => {
    const array = listaCarros.filter(
      c =>
        c.title
          .toLocaleLowerCase()
          .indexOf(palavrasChaves.toLocaleLowerCase()) > -1,
    );

    if (array.length) {
      setFiltro(array);
    }

    console.log('ARRAY GERADO', array);
  }, [palavrasChaves]);

  function RetornaParametros(e: string) {
    console.log(e);
    setPalavrasChaves(e);

    return e;
  }

  console.log('AQUI =>>>>> ', listaCarros);

  const history = useHistory();

  return (
    <>
      <SearchBar filtrar={e => RetornaParametros(e)} />
      <Container>
        <ListaVeiculosContainer>
          {filtro.map(car => (
            <Veiculos
              key={car.id}
              id={car.id}
              ano={car.year}
              km={car.km}
              modelo={car.model}
              marca={car.brand}
              preco={car.price}
              titulo={car.title}
            />
          ))}
        </ListaVeiculosContainer>
        <ContainerButton>
          <ButtonBack tipo="Excluir" onClick={() => history.push('/')}>
            Voltar
          </ButtonBack>
        </ContainerButton>
      </Container>
    </>
  );
};

export default Listagem;
