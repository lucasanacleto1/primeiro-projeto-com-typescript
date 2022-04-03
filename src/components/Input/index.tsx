import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  label?: string;
}

export const Input = ({ label, placeholder, ...rest }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input placeholder={placeholder} {...rest} />
      <br />
    </>
  );
};
