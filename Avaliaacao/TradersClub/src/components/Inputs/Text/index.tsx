import React, { InputHTMLAttributes } from 'react';

import { Container, Subcontianer, Input } from './styles';

interface Parameters extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const InputComponent: React.FC<Parameters> = ({ placeholder, ...rest }) => {
  return (
    <Container>
      <Subcontianer>
        <Input placeholder={placeholder} {...rest} />
      </Subcontianer>
    </Container>
  );
};

export default InputComponent;
