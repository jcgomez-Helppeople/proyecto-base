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
              fontFamily: "var(--toolbar-title-font-family)",
              fontWeight: "var(--toolbar-title-font-weight)",
              fontSize: "var(--toolbar-labels-font-size)",
              marginBottom: 4,
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
            fontSize: "var(--toolbar-labels-font-size)",
            fontFamily: "var(--toolbar-title-font-family)",
          }}
        />
      </div>
    );
  }
);

CustomInput.displayName = 'CustomInput';

export default CustomInput;
