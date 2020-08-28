import React, { ButtonHTMLAttributes } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Veiculo, NomeValor, DescricaoANo } from './styles';

interface Parametros {
  titulo: string;
  preco: number;
  modelo: string;
  km: number;
  marca: string;
  ano: number;
  id: number;
}

const ListaVeiculos: React.FC<Parametros> = ({
  ano,
  km,
  marca,
  modelo,
  preco,
  titulo,
  id,
}) => {
  const history = useHistory();

  return (
    <Container onClick={() => history.push(`/Editar/${id}`)}>
      <Veiculo>
        <NomeValor>
          <div>
            <h1> {titulo}</h1>
          </div>
          <div>
            <h1>{preco}</h1>
          </div>
        </NomeValor>

        <DescricaoANo>
          <div>
            <h2>
              {' '}
              {modelo} {marca} {km}
            </h2>
          </div>
          <div>
            <h2>{ano}</h2>
          </div>
        </DescricaoANo>
      </Veiculo>
    </Container>
  );
};
export default ListaVeiculos;
