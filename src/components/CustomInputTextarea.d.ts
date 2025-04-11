import React from 'react';
import { InputTextareaProps } from 'primereact/inputtextarea';
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
declare const CustomInputTextarea: React.FC<CustomInputTextareaProps>;
export default CustomInputTextarea;
