// src/components/CustomInputTextarea.tsx
import React from 'react';
import { InputTextarea, InputTextareaProps } from 'primereact/inputtextarea';

export interface CustomInputTextareaProps extends InputTextareaProps {
  /**
   * Estado de carga. Si es true, el textarea se deshabilitará.
   */
  loading?: boolean;
  /**
   * Mensaje de error que se mostrará debajo del textarea.
   */
  error?: string;
  /**
   * Etiqueta que se mostrará encima del textarea.
   */
  label?: string;
}

const CustomInputTextarea: React.FC<CustomInputTextareaProps> = ({ loading, error, label, ...rest }) => {
  return (
    <div className="custom-input-textarea">
      {label && <label>{label}</label>}
      <InputTextarea {...rest} disabled={rest.disabled || loading} />
      {error && <small className="p-error">{error}</small>}
    </div>
  );
};

export default CustomInputTextarea;
