import { ReactNode } from 'react';

import { Container } from './styles';

interface TweeterProps {
  children: ReactNode;
}

function Tweeter({ children }: TweeterProps) {
  return (
    <Container>
      <h1>Tweeter</h1>
      {children}
    </Container>
  );
};

export default Tweeter;
