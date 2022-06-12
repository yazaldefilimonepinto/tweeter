import React, { FunctionComponent, ReactNode } from 'react';
import styles from '@/styles/components/Modal/styles.module.scss';

type ModalProps = {
  children: ReactNode;
  status: boolean;
};
export const Modal: FunctionComponent<ModalProps> = ({ children, status }) => {
  return <div className={status ? `${styles.container} ${styles.activeModal}` : styles.container}>{children}</div>;
};
