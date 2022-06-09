import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import styles from '@/styles/components/Header/styles.module.scss';

interface Props {
  title: string;
  path: string;
  includes?: boolean;
  children: ReactNode;
}

export function NavLink({ title, path, includes = false, children }: Props) {
  const router = useRouter();

  function verifyIfIsActive() {
    if (includes) {
      return router.pathname.includes(path);
    }
    return path === router?.pathname;
  }

  const isActive = verifyIfIsActive();
  console.log(isActive);
  return (
    <Link href={path}>
      <a className={isActive ? `${styles.nav__link} ${styles.activeLink}` : `${styles.nav__link}`}>
        {children}
        <span className={styles.nav__name}></span>
        {title}
      </a>
    </Link>
  );
}
