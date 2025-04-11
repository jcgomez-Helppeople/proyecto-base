import React from 'react';
import { InputTextProps } from 'primereact/inputtext';
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
declare const CustomInputText: React.FC<CustomInputTextProps>;
export default CustomInputText;
