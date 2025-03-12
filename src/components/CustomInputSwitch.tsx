// src/components/CustomInputSwitch.tsx
import React from 'react';
import { InputSwitch, InputSwitchProps } from 'primereact/inputswitch';

export interface CustomInputSwitchProps extends InputSwitchProps {
  /**
   * Estado de carga. Si es true, el switch se deshabilitará.
   */
  loading?: boolean;
  /**
   * Mensaje de error que se mostrará debajo del switch.
   */
  error?: string;
  /**
   * Etiqueta que se mostrará encima del switch.
   */
  label?: string;
}

const CustomInputSwitch: React.FC<CustomInputSwitchProps> = ({ loading, error, label, ...rest }) => {
  return (
    <div className="custom-input-switch">
      {label && <label>{label}</label>}
      <InputSwitch {...rest} disabled={rest.disabled || loading} />
      {error && <small className="p-error">{error}</small>}
    </div>
  );
};

export default CustomInputSwitch;
