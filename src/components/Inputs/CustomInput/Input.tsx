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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {
          props.label &&
          <label
            style={{
              marginBottom: 4,
              fontSize: 12,
              fontWeight: 600,
              fontFamily: "'Open Sans', sans-serif",
            }}
          >
            {props.label}
          </label>
        }
        < AntInput
          {...props}
          ref={ref}
          style={{
            ...props.style,
          }}
        />
      </div>
    );
  }
);

CustomInput.displayName = 'CustomInput';

export default CustomInput;
