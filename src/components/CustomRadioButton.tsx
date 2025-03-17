// src/components/CustomRadioButton.tsx
import React from 'react';
import { RadioButton, RadioButtonProps } from 'primereact/radiobutton';

export interface CustomRadioButtonProps extends RadioButtonProps {
  /**
   * Estado de carga. Si es true, el radio button se deshabilitará.
   */
  loading?: boolean;
  /**
   * Mensaje de error que se mostrará debajo del radio button.
   */
  error?: string;
  /**
   * Etiqueta que se mostrará junto al radio button.
   */
  label?: string;
}

const CustomRadioButton: React.FC<CustomRadioButtonProps> = ({
  loading,
  error,
  label,
  ...rest
}) => {
  return (
    <div className="custom-radio-button p-d-flex p-ai-center">
      {label && (
        <label htmlFor={rest.inputId} className="p-mr-2 mr-2">
          {label}
        </label>
      )}
      <RadioButton {...rest} disabled={rest.disabled || loading} />
      {error && <small className="p-error p-ml-2">{error}</small>}
    </div>
  );
};

export default CustomRadioButton;
