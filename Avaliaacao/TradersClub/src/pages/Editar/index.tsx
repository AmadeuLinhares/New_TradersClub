import React, { useState, useCallback } from 'react';
import Select, { Styles, StylesConfig } from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Container from '../../components/Container';
import { RootState } from '../../store/modules/rootReducer';
import * as CarsActions from '../../store/modules/carros/actions';
import SearchBar from '../../components/SearcgBar';
import {
  ContainerTextError,
  ContainerInputs,
  NomeVeiculo,
  ModeloAno,
  Marca,
  Caracteristicas,
  ContainerCadastro,
  ContainerButtons,
  RemoveButtons,
  SavedButtons,
} from './styles';

import Input from '../../components/Inputs/Text';
import Button from '../../components/Buttons';

interface ListaMarcas {
  label?: string | undefined;
  value?: number | undefined;
}

interface InfosCarRquestInterface {
  brand: string;
  color: string;
  id: number;
  idBrand: number;
  km: number;
  model: string;
  price: number;
  title: string;
  year: number;
}

const Cadastro: React.FC = () => {
  const listCarros: InfosCarRquestInterface[] = useSelector(
    (state: RootState) => state.CarrosList,
  );
  const history = useHistory();

  const { id } = useParams();
  const veiculoEditar = listCarros.filter(c => c.id === parseInt(id));

  if (!veiculoEditar.length) {
    history.push('/');
  }
  debugger;
  const dispatch = useDispatch();
  const [titulo, setTitulo] = useState(veiculoEditar[0].title);
  const [marcaSelecionada, setMarcaSelecionada] = useState(
    {} as ListaMarcas | undefined | null,
  );
  const [modelo, setModelo] = useState(veiculoEditar[0].model);
  const [ano, setAno] = useState(veiculoEditar[0].year.toString());
  const [cor, setCor] = useState(veiculoEditar[0].color);
  const [km, setKm] = useState(veiculoEditar[0].km.toString());
  const [preco, setPreco] = useState(veiculoEditar[0].price.toString());

  const listaMarcas: ListaMarcas[] = useSelector(
    (state: RootState) => state.MarcasList,
  );

  function MarcaSelecionada(
    marcaSelect: object | undefined | null | ListaMarcas,
  ) {
    console.log(marcaSelect);
    setMarcaSelecionada(marcaSelect);
  }

  const SalvarCarro = () => {
    const car = {
      id: veiculoEditar[0].id,
      title: titulo,
      model: modelo,
      brand: marcaSelecionada && marcaSelecionada.label,
      idBrand: marcaSelecionada && marcaSelecionada.value,
      year: parseInt(ano),
      color: cor,
      km: parseInt(km),
      price: parseInt(preco),
    };
    dispatch(CarsActions.EditCard(car));

    console.log('VALORES NOVO CARRO =>', car);
    history.push('/Listagem');
  };
  const RemoverCarro = () => {
    dispatch(CarsActions.RemoveCar(veiculoEditar[0]));

    history.push('/Listagem');
  };

  return (
    <>
      <SearchBar />
      <Container>
        <ContainerCadastro>
          <ContainerTextError>
            <div>
              <p>Problemas no envio do formulario</p>
            </div>
          </ContainerTextError>

          <ContainerInputs>
            <NomeVeiculo>
              <Input
                type="text"
                placeholder="Nome do veiculo"
                value={titulo}
                onChange={e => setTitulo(e.target.value)}
              />
            </NomeVeiculo>
            <ModeloAno>
              <Input
                type="text"
                placeholder="Modelo"
                onChange={e => setModelo(e.target.value)}
                value={modelo}
              />
              <Input
                type="text"
                value={ano}
                placeholder="Ano"
                onChange={e => setAno(e.target.value)}
              />
            </ModeloAno>
            <Marca>
              <Select
                // onChange={t =>
                //   setMarcaSelecionada(
                //     t =>
                //       t || {
                //         label: 'l',
                //         value: 1,
                //       },
                //   )
                // }
                onChange={t => MarcaSelecionada(t)}
                options={listaMarcas}
                styles={{
                  input: s => ({ ...s, color: 'white' }),
                  control: s => ({
                    ...s,
                    backgroundColor: '#1f2d40',
                    border: 'none',
                    borderBottom: 'solid 1px white',
                    borderRadius: 'none',
                  }),
                  option: s => ({ ...s, color: '#1f2d40' }),
                  singleValue: s => ({ ...s, color: 'white' }),
                  placeholder: s => ({ ...s, color: 'white' }),
                }}
              />
            </Marca>
            <Caracteristicas>
              <Input
                type="text"
                placeholder="Cor"
                onChange={e => setCor(e.target.value)}
                value={cor}
              />
              <Input
                type="number"
                placeholder="Quilometragem"
                onChange={e => setKm(e.target.value)}
                value={km}
              />
              <Input
                type="number"
                placeholder="Valor"
                onChange={e => setPreco(e.target.value)}
                value={preco}
              />
            </Caracteristicas>
          </ContainerInputs>

          <ContainerButtons>
            <SavedButtons>
              <Button tipo="Salvar" onClick={() => SalvarCarro()}>
                Salvar
              </Button>
            </SavedButtons>
            <RemoveButtons>
              <Button tipo="Excluir" onClick={() => history.push('/Listagem')}>
                Cancelar
              </Button>
              <Button
                onClick={() => {
                  RemoverCarro();
                }}
                tipo="Excluir"
              >
                Remover
              </Button>
            </RemoveButtons>
          </ContainerButtons>
        </ContainerCadastro>
      </Container>
    </>
  );
};

export default Cadastro;
