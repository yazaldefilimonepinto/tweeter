import React, { FunctionComponent, ReactNode } from 'react';
import styles from '@/styles/components/global/Container.module.scss';

type ContainerProps = {
  children: ReactNode;
};
export const Container: FunctionComponent<ContainerProps> = ({ children }) => {
  return <section className={styles.container}>{children}</section>;
};
