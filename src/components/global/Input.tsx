import React, { FunctionComponent, ReactNode } from 'react';
import styles from '@/styles/components/global/Input.module.scss';

type InputProps = {
  label?: string;
  name: string;
  placeholder?: string;
  type?: string;
  children?: ReactNode;
  required?: boolean;
  error?: boolean;
  value?: string;
  setValue?: Function;
};

export const Input: FunctionComponent<InputProps> = ({ error, type, label, name, placeholder, ...props }) => {
  return (
    <div className={error ? `${styles.inputFields} ${styles.error}` : styles.inputFields}>
      {label && <label htmlFor={name}>{label}</label>}
      <input id={name} type={type ? type : 'text'} placeholder={placeholder} {...props} />
    </div>
  );
};
