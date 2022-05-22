import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { NavLinkContainer } from './styles';

interface Props {
  title: string;
  path: string;
  includes?: boolean;
  children?: ReactNode;
}

export default function NavLink({ title, path, includes = false, children }: Props) {
  const router = useRouter();

  function verifyIfIsActive() {
    if (includes) {
      return router.pathname.includes(path);
    }
    return path === router.pathname;
  }

  const isActive = verifyIfIsActive();
  return (
    <NavLinkContainer isActive={isActive}>
      <Link href={path}>{children}</Link>

      <Link href={path}>
        <a className="textLink">{title}</a>
      </Link>
    </NavLinkContainer>
  );
}
