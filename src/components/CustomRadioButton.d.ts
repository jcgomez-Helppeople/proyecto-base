import React from 'react';
import { RadioButtonProps } from 'primereact/radiobutton';
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
declare const CustomRadioButton: React.FC<CustomRadioButtonProps>;
export default CustomRadioButton;
