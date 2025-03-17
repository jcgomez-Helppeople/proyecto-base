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
    <div className="custom-input-text w-full">
      {label && <label className='block text-gray-700 font-semibold mb-1 text-base'>{label}</label>}
      <InputText
        {...rest}
        disabled={rest.disabled || loading}
        className="text-base px-3 py-1 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition shadow-md"
      />
      {error && <small className="p-error">{error}</small>}
    </div>
  );
};

export default CustomInputText;
