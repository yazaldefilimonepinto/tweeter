import { ReactNode } from 'react';

import { Container } from './styles';

interface ButtonProps {
  children?: ReactNode;
  text: string;
}

function Button({ children, text }: ButtonProps) {
  return (
    <Container>
      {children} {text}
    </Container>
  );
}

export default Button;
