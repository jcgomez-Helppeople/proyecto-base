// src/components/CustomInputText.tsx
import React from 'react';
import { InputText, InputTextProps } from 'primereact/inputtext';

export interface CustomInputTextProps extends InputTextProps {
  /**
   * Estado de carga. Si es true, el input se deshabilitará.
   */
  loading?: boolean;
  /**
   * Mensaje de error para mostrar debajo del input.
   */
  error?: string;
  /**
   * Label que se mostrará encima del input.
   */
  label?: string;
}

const CustomInputText: React.FC<CustomInputTextProps> = ({ loading, error, label, ...rest }) => {
  return (
    <div className="custom-input-text">
      {label && <label>{label}</label>}
      <InputText {...rest} disabled={rest.disabled || loading} />
      {error && <small className="p-error">{error}</small>}
    </div>
  );
};

export default CustomInputText;
