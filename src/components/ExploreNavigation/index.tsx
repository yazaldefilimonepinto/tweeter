import Link from 'next/link';
import { ReactNode, useState } from 'react';

import { ExploreNavigationContainer } from './styles';

interface ExploreNavigationProps {
  children?: ReactNode;
}
type LinkProps = {
  name: string;
  path: string;
};

export function ExploreNavigation({ children }: ExploreNavigationProps) {
  const [links, SetLinks] = useState<LinkProps[]>([
    { name: 'Tweets', path: '/' },
    { name: 'Tweets & Replies', path: '/' },
    { name: 'Media', path: '/' },
    { name: 'Likes', path: '/' },
  ]);
  return (
    <ExploreNavigationContainer>
      <ul>
        {links.map(({ name, path }) => (
          <Link href={path}>
            <a>{name}</a>
          </Link>
        ))}
      </ul>
    </ExploreNavigationContainer>
  );
}
