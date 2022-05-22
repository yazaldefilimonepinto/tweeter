import { ReactNode } from 'react';

import { Container } from './styles';

interface BookmarksProps {
  children: ReactNode;
}

function Bookmarks({ children }: BookmarksProps) {
  return (
    <Container>
      <h1>Bookmarks</h1>
      {children}
    </Container>
  );
};

export default Bookmarks;
