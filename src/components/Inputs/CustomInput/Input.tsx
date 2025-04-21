import React from "react";
import { Input as AntInput, InputProps as AntInputProps } from "antd";

export interface CustomInputProps extends AntInputProps {
  label?: string; // Agrega la propiedad 'label' como opcional
  placeholder?: string;
  type?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<CustomInputProps> = (props) => {
  return <AntInput {...props} />;
};

export default CustomInput;