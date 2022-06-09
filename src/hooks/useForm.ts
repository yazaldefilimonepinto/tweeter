import React from 'react';

const validators: any = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido',
  },
  password: {
    regex: /^(?=\\S+$).{8,20}$/,
    message: 'Com no mínimo 8 caracteres e sem espaços em branco.',
  },
  number: {
    regex: /^\d+$/,
    message: 'Utilize números apenas.',
  },
};

export const useForm = function (type: string | any) {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState<null | string>(null);

  function validate(value: string) {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Preencha um valor.');
      return false;
    } else if (validators[type] && !validators[type].regex.test(value)) {
      setError(validators[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }: any) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};
