import React, { FunctionComponent, ReactNode } from 'react';
import styles from '@/styles/components/Modal/styles.module.scss';

type ModalProps = {
  children: ReactNode;
};
export const Modal: FunctionComponent<ModalProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
