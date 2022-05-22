import { ReactNode } from 'react';
import { Explore } from '../Explore';
import { ExploreNavigation } from '../ExploreNavigation';

import { HomeMasterContainer } from './styles';

// interface HomeMasterProps {
//   children: ReactNode;
// }

export function HomeMaster() {
  return (
    <HomeMasterContainer className="container">
      <ExploreNavigation />
      <Explore />
    </HomeMasterContainer>
  );
}
