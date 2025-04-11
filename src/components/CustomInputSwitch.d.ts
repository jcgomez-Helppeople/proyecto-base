import React from 'react';
import { InputSwitchProps } from 'primereact/inputswitch';
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
declare const CustomInputSwitch: React.FC<CustomInputSwitchProps>;
export default CustomInputSwitch;
