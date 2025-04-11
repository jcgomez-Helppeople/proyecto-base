import React from 'react';
import { PasswordProps } from 'primereact/password';
export interface CustomPasswordProps extends PasswordProps {
    /**
     * Estado de carga. Si es true, el input se deshabilitará.
     */
    loading?: boolean;
    /**
     * Mensaje de error para mostrar debajo del input.
     */
    error?: string;
    label?: string;
}
declare const CustomPassword: React.FC<CustomPasswordProps>;
export default CustomPassword;
