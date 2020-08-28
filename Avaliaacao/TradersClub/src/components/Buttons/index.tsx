import React, { ButtonHTMLAttributes } from 'react';
import { Container, SubContainer, Button } from './styles';

interface ParametersButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  tipo: 'Salvar' | 'Excluir';
}

const ButtonComponent: React.FC<ParametersButton> = ({
  tipo,
  children,
  ...rest
}) => {
  return (
    <Container>
      <SubContainer>
        <Button {...rest} tipoBtn={tipo}>
          {children}
        </Button>
      </SubContainer>
    </Container>
  );
};

export default ButtonComponent;
