import React, { FunctionComponent } from 'react';

import styles from '@/styles/components/global/Button.module.scss';
type ButtonProps = {
  loader?: boolean;
  text: string;
};
export const Button: FunctionComponent<ButtonProps> = ({ loader, text }) => {
  return (
    <button className={styles.button}>
      {text} {loader && <span className={styles.spinner}></span>}
    </button>
  );
};
