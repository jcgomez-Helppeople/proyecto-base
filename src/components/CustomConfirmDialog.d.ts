import React from 'react';
import { ConfirmDialogProps } from 'primereact/confirmdialog';
export interface CustomConfirmDialogProps extends ConfirmDialogProps {
    /**
     * Etiqueta que se mostrará encima del ConfirmDialog (opcional).
     */
    label?: string;
    /**
     * Mensaje de error a mostrar debajo del ConfirmDialog (opcional).
     */
    error?: string;
    /**
     * Estado de carga. Si es true, se muestra un overlay con un spinner.
     */
    loading?: boolean;
}
declare const CustomConfirmDialog: React.FC<CustomConfirmDialogProps>;
export default CustomConfirmDialog;
