import { ReactNode } from 'react';

import styles from '@/styles/components/Header/styles.module.scss';

interface HeaderProps {
  children?: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <header className={styles.container}>
      <h1>Header</h1>
      {children}
    </header>
  );
}
