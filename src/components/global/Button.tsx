import React, { FunctionComponent, ReactNode } from 'react';

import styles from '@/styles/components/global/Button.module.scss';
type ButtonProps = {
  loader?: boolean;
  text: string;
  children?: ReactNode;
};
export const Button: FunctionComponent<ButtonProps> = ({ loader, text, children }) => {
  return (
    <button className={styles.button}>
      {children} {text} {loader && <span className={styles.spinner}></span>}
    </button>
  );
};
