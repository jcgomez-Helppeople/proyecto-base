import React from "react";
import {
  InputNumber as AntInputNumber,
  InputNumberProps as AntInputNumberProps,
} from "antd";

export interface CustomNumericInputProps extends AntInputNumberProps {}

const CustomNumericInput: React.FC<CustomNumericInputProps> = (props) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const charCode = event.key;
    // Permitir solo números, punto, y teclas de control como backspace
    if (!/^[0-9.]$/.test(charCode) && charCode !== "Backspace") {
      event.preventDefault();
    }
  };

  return (
    <AntInputNumber
      {...props}
      onKeyPress={handleKeyPress}
      style={{
        ...props.style,
      }}
      controls={false} // Desactivar los controles de incremento/decremento
    />
  );
};

export default CustomNumericInput;
