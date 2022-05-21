import { ReactNode } from 'react';

import { Container } from './styles';

interface ButtonProps {
  children: ReactNode;
}

function Button({ children }: ButtonProps) {
  return (
    <Container>
      <h1>Button</h1>
      {children}
    </Container>
  );
};

export default Button;
