import { ReactNode, useState } from 'react';
import { Explore } from '../Explore';
import { ExploreNavigation } from '../ExploreNavigation';

import { HomeMasterContainer } from './styles';

// interface HomeMasterProps {
//   children: ReactNode;
// }

export function HomeMaster() {
  const [toast, SetToast] = useState(true);
  function handlerClick() {
    SetToast(!toast);
  }
  return (
    <HomeMasterContainer className="container">
      <button onClick={handlerClick}>Open Toats</button>
      <ExploreNavigation />
      <Explore />
    </HomeMasterContainer>
  );
}
