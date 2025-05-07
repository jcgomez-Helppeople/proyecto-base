import React from "react";
import { Input as AntInput, InputProps as AntInputProps, InputRef } from "antd";

export interface CustomInputProps extends AntInputProps {
  label?: string; // Agrega la propiedad 'label' como opcional
  placeholder?: string;
  type?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = React.forwardRef<InputRef, CustomInputProps>(
  (props, ref) => {
    return (
      <AntInput
        {...props}
        ref={ref}
        style={{
          ...props.style, 
          fontSize: "12px",
        }}
      />
    );
  }
);

CustomInput.displayName = 'CustomInput';

export default CustomInput;
