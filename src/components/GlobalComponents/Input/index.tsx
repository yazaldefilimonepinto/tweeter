import { InputContainer, Underline } from './styles';

interface InputProps {
  type?: string;
  name: string;
  label: string;
  placeholder: string;
  props?: any[];
}

export function InputLabel({ type, name, label, placeholder, props }: InputProps) {
  return (
    <InputContainer>
      <input {...props} type={type ? type : 'text'} id={name} required />
      <Underline className="underline"></Underline>
      <label htmlFor={name}>{placeholder}</label>
    </InputContainer>
  );
}
export function Input({ type, name, label, placeholder, props }: InputProps) {
  return (
    <InputContainer>
      <input {...props} type={type ? type : 'text'} id={name} />
    </InputContainer>
  );
}
